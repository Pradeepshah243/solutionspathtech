import { Code, Globe, Palette, Layers, ShoppingCart, Headphones, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs with scalable architecture.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Globe,
    title: 'Web Application Development',
    description: 'Modern, responsive web applications built with cutting-edge technologies.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Palette,
    title: 'Website Design & Development',
    description: 'Beautiful, user-friendly websites that convert visitors into customers.',
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: Layers,
    title: 'Full-Stack Web Solutions',
    description: 'End-to-end development from frontend to backend and database management.',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description: 'Complete online store setup with payment integration and inventory management.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Headphones,
    title: 'IT Consulting & Support',
    description: '24/7 technical support and strategic IT consulting for your business growth.',
    color: 'from-orange-500 to-orange-600'
  }
];

export function Services() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#6D28D9] uppercase tracking-wider text-sm mb-2">Our Services</div>
          <h2 className="text-4xl lg:text-5xl text-[#111827] mb-4">
            Comprehensive IT Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end digital solutions to transform your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl text-[#111827] mb-3 group-hover:text-[#1E3A8A] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className="mt-6 flex items-center gap-2 text-[#6D28D9] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm">Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button 
            onClick={scrollToContact}
            className="px-8 py-4 bg-gradient-to-r from-[#1E3A8A] to-[#6D28D9] text-white rounded-full hover:shadow-[0_0_30px_rgba(109,40,217,0.5)] transition-all duration-300 inline-flex items-center gap-2"
          >
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
