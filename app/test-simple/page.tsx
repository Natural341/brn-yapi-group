export const dynamic = 'force-dynamic';

export default function TestSimplePage() {
    return (
        <div className="p-10 font-mono">
            <h1 className="text-2xl font-bold mb-4 text-green-600">Server is Running!</h1>
            <p>If you can see this, Next.js is working correctly.</p>
            <p className="mt-4 text-sm text-gray-500">Time: {new Date().toISOString()}</p>
        </div>
    );
}
