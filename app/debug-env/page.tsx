export const dynamic = 'force-dynamic';

export default function DebugEnvPage() {
    const vars = {
        NODE_ENV: process.env.NODE_ENV,
        DATABASE_URL_DEFINED: !!process.env.DATABASE_URL,
        DATABASE_URL_LENGTH: process.env.DATABASE_URL ? process.env.DATABASE_URL.length : 0,
        // Check first few chars to confirm protocol, but don't show full secret
        DATABASE_TYPE: process.env.DATABASE_URL ? process.env.DATABASE_URL.split(':')[0] : 'N/A',
    };

    return (
        <div className="p-10 font-mono">
            <h1 className="text-2xl font-bold mb-4">Environment Debug</h1>
            <pre className="bg-gray-100 p-4 border rounded">
                {JSON.stringify(vars, null, 2)}
            </pre>
            <p className="mt-4 text-sm">
                If DATABASE_URL_DEFINED is false, go to Hostinger Panel and add it again.
            </p>
        </div>
    );
}
