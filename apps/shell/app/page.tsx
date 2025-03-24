import { Remote1Content } from '@micro-frontend-demo/remote1';
import { Remote2Content } from '@micro-frontend-demo/remote2';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Micro Frontend Demo</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border rounded-lg overflow-hidden shadow-lg">
          <div className="bg-gray-100 p-4 border-b">
            <h2 className="text-xl font-semibold">Remote Application 1</h2>
          </div>
          <div className="p-4">
            <Remote1Content />
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden shadow-lg">
          <div className="bg-gray-100 p-4 border-b">
            <h2 className="text-xl font-semibold">Remote Application 2</h2>
          </div>
          <div className="p-4">
            <Remote2Content />
          </div>
        </div>
      </div>
    </main>
  );
} 