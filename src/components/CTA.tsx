export default function CTA() {
  return (
    <section id="get-started" className="py-24 bg-gradient-to-br from-violet-600 to-indigo-700">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to work smarter?
        </h2>
        <p className="text-xl text-violet-200 mb-10 leading-relaxed">
          Join millions of people using Claude to code, write, analyze, and create.
          Free to start, no setup required.
        </p>
        <a
          href="https://claude.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-violet-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-violet-50 transition-colors shadow-xl"
        >
          Get started for free
        </a>
      </div>
    </section>
  )
}
