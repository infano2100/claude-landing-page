const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description:
      'Get instant responses to complex questions, code reviews, and creative tasks in seconds.',
  },
  {
    icon: '🧠',
    title: 'Deeply Intelligent',
    description:
      'Claude understands nuance, context, and intent — giving you thoughtful, accurate answers every time.',
  },
  {
    icon: '🛡️',
    title: 'Safe & Trustworthy',
    description:
      'Built with Constitutional AI by Anthropic to be helpful, harmless, and honest.',
  },
  {
    icon: '💻',
    title: 'Coding Assistant',
    description:
      'Write, debug, and review code across all major languages with expert-level guidance.',
  },
  {
    icon: '✍️',
    title: 'Creative Writing',
    description:
      'Draft emails, articles, stories, and marketing copy that sounds natural and compelling.',
  },
  {
    icon: '📊',
    title: 'Data Analysis',
    description:
      'Understand complex data, summarize documents, and extract key insights instantly.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything you need</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Claude combines powerful AI capabilities with a safe, easy-to-use interface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl border border-gray-100 hover:border-violet-200 hover:shadow-md transition-all group"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-violet-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
