export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 via-white to-indigo-50 pt-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 text-sm px-4 py-1.5 rounded-full mb-8 font-medium">
          <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
          Powered by Anthropic
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
          Build anything with{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
            Claude AI
          </span>
        </h1>

        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Claude is an AI assistant built by Anthropic — safe, helpful, and honest.
          From coding to writing, Claude helps you work faster and smarter.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://claude.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-violet-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-violet-700 transition-colors shadow-lg shadow-violet-200"
          >
            Start for free
          </a>
          <a
            href="#how-it-works"
            className="border border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors"
          >
            See how it works
          </a>
        </div>
      </div>
    </section>
  )
}
