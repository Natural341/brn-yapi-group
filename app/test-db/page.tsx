import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function TestDbPage() {
    let status = 'Unknown';
    let error = null;
    let counts = {};
    let envCheck = {
        hasDbUrl: !!process.env.DATABASE_URL,
        nodeEnv: process.env.NODE_ENV,
    };

    try {
        // Test connection by counting items
        const serviceCount = await prisma.service.count();
        const settingsCount = await prisma.siteSettings.count();

        counts = {
            services: serviceCount,
            settings: settingsCount,
        };
        status = 'Connected';
    } catch (e: any) {
        status = 'Failed';
        error = e.message + (e.code ? ` (${e.code})` : '');
        console.error(e);
    }

    return (
        <div className="p-10 font-mono text-sm">
            <h1 className="text-2xl font-bold mb-4">Database Connection Test</h1>

            <div className="mb-6 p-4 border rounded bg-gray-100 text-black">
                <p><strong>Status:</strong> <span className={status === 'Connected' ? 'text-green-600' : 'text-red-600'}>{status}</span></p>
                {error && (
                    <div className="mt-2 text-red-600">
                        <strong>Error:</strong>
                        <pre className="whitespace-pre-wrap mt-1 bg-red-50 p-2 border border-red-200 rounded">{error}</pre>
                    </div>
                )}
            </div>

            <div className="mb-6">
                <h2 className="font-bold mb-2">Environment Check</h2>
                <ul className="list-disc pl-5">
                    <li>DATABASE_URL Set: {envCheck.hasDbUrl ? 'Yes' : 'NO'}</li>
                    <li>NODE_ENV: {envCheck.nodeEnv}</li>
                </ul>
            </div>

            {status === 'Connected' && (
                <div>
                    <h2 className="font-bold mb-2">Table Counts</h2>
                    <pre>{JSON.stringify(counts, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}
