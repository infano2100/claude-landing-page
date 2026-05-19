export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-xl text-gray-900">Claude AI</span>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-gray-900 transition-colors">How it works</a>
          <a href="#get-started" className="hover:text-gray-900 transition-colors">Get started</a>
        </div>
        <a
          href="https://claude.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-violet-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-violet-700 transition-colors"
        >
          Try Claude
        </a>
      </div>
    </nav>
  )
}
