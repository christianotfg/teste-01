export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50 text-gray-900 font-sans">
      <h1 className="text-4xl font-bold mb-4">Hello World 🚀</h1>
      <p className="text-lg text-gray-600 mb-8">Boilerplate Padrão - Front e Back integrados.</p>
      
      <a 
        href="/api/health" 
        target="_blank"
        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
      >
        Testar Health Check (/api/health)
      </a>
    </main>
  );
}
