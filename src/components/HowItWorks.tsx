const steps = [
  {
    number: '01',
    title: 'Create an account',
    description: 'Sign up for free at claude.ai — no credit card required to get started.',
  },
  {
    number: '02',
    title: 'Type your prompt',
    description: 'Ask Claude anything: a question, a task, or a problem you want to solve.',
  },
  {
    number: '03',
    title: 'Get your answer',
    description: 'Receive a detailed, thoughtful response in seconds. Refine and iterate as needed.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How it works</h2>
          <p className="text-xl text-gray-500">Simple to start, powerful in practice.</p>
        </div>

        <div className="flex flex-col gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-violet-600 text-white flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px h-8 bg-violet-200 mx-auto mt-2" />
                )}
              </div>
              <div className="pt-3">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
