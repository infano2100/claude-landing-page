export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm">
          Built with{' '}
          <a href="https://vitejs.dev" className="text-violet-400 hover:text-violet-300">
            Vite
          </a>{' '}
          +{' '}
          <a href="https://react.dev" className="text-violet-400 hover:text-violet-300">
            React
          </a>{' '}
          +{' '}
          <a href="https://tailwindcss.com" className="text-violet-400 hover:text-violet-300">
            Tailwind CSS
          </a>
        </p>
        <p className="text-xs mt-3">
          Claude is a product of{' '}
          <a href="https://anthropic.com" className="text-violet-400 hover:text-violet-300">
            Anthropic
          </a>
        </p>
      </div>
    </footer>
  )
}
