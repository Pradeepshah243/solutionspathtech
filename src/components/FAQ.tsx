import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What services does Solutions Path Technology offer?',
    answer: 'We offer a comprehensive range of IT services including custom software development, web application development, website design and development, full-stack web solutions, e-commerce solutions, and IT consulting & support. Our team specializes in creating scalable, efficient, and future-ready digital solutions tailored to your business needs.'
  },
  {
    question: 'How long does it typically take to complete a project?',
    answer: 'Project timelines vary based on scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-6 months. We provide detailed project timelines during our initial consultation and maintain transparent communication throughout the development process.'
  },
  {
    question: 'Do you provide ongoing support after project completion?',
    answer: 'Yes! We offer 24/7 technical support and maintenance services. Our support packages include bug fixes, security updates, performance monitoring, and feature enhancements. We believe in building long-term partnerships with our clients and ensuring their digital solutions continue to perform optimally.'
  },
  {
    question: 'What is your development process?',
    answer: 'We follow an agile development methodology that includes: 1) Discovery & Planning, 2) Design & Prototyping, 3) Development & Testing, 4) Deployment, and 5) Maintenance & Support. This approach ensures transparency, flexibility, and regular client feedback throughout the project lifecycle.'
  },
  {
    question: 'How much does a typical project cost?',
    answer: 'Project costs vary depending on requirements, complexity, and features. We offer flexible pricing models including fixed-price projects and hourly rates. Contact us for a free consultation and detailed quote based on your specific needs. We ensure transparent pricing with no hidden costs.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#6D28D9] uppercase tracking-wider text-sm mb-2">FAQ</div>
          <h2 className="text-4xl lg:text-5xl text-[#111827] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our services and process.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg text-[#111827] pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-[#6D28D9] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#1E3A8A] to-[#6D28D9] text-white rounded-full hover:shadow-[0_0_30px_rgba(109,40,217,0.5)] transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
