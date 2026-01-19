import { PrismaClient } from '@prisma/client';

export const dynamic = 'force-dynamic';

export default async function TestDbPage() {
    let status = 'Unknown';
    let error = null;
    let counts = {};

    // Create a local instance to avoid global import issues
    const prisma = new PrismaClient({
        datasources: {
            db: {
                url: process.env.DATABASE_URL,
            },
        },
    });

    try {
        // Explicitly connect first
        await prisma.$connect();
        status = 'Connected (Local Instance)';

        // Count items
        const serviceCount = await prisma.service.count();
        const settingsCount = await prisma.siteSettings.count();

        counts = {
            services: serviceCount,
            settings: settingsCount,
        };
    } catch (e: any) {
        status = 'Failed';
        error = e.message + (e.code ? ` (${e.code})` : '') + '\n' + (e.meta ? JSON.stringify(e.meta) : '');
        console.error('Test DB Error:', e);
    } finally {
        await prisma.$disconnect();
    }

    return (
        <div className="p-10 font-mono text-sm">
            <h1 className="text-2xl font-bold mb-4">Database Connection Test (Isolated)</h1>

            <div className="mb-6 p-4 border rounded bg-gray-100 text-black">
                <p><strong>Status:</strong> <span className={status.startsWith('Connected') ? 'text-green-600' : 'text-red-600'}>{status}</span></p>

                <div className="mt-2 text-xs text-gray-500">
                    <strong>Env Check:</strong>
                    <div>DATABASE_URL: {process.env.DATABASE_URL ? 'Defined' : 'MISSING!'}</div>
                    <div>NODE_ENV: {process.env.NODE_ENV}</div>
                </div>

                {error && (
                    <div className="mt-4 text-red-600">
                        <strong>Error Details:</strong>
                        <pre className="whitespace-pre-wrap mt-1 bg-red-50 p-2 border border-red-200 rounded">{error}</pre>
                    </div>
                )}
            </div>

            {status.startsWith('Connected') && (
                <div className="mb-6">
                    <h2 className="font-bold mb-2">Table Counts</h2>
                    <pre className="bg-white p-2 border rounded">{JSON.stringify(counts, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}
