import { Award, TrendingUp, CheckCircle, Users } from 'lucide-react';

const awards = [
  {
    icon: Award,
    title: 'Trusted IT Partner',
    description: 'Recognized for delivering reliable and innovative solutions',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: TrendingUp,
    title: 'Recognized for Innovation',
    description: 'Leading the way in digital transformation in Nepal',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: CheckCircle,
    title: '100+ Projects Delivered',
    description: 'Successfully completed projects across various industries',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Users,
    title: 'Client Satisfaction',
    description: '98% client retention rate with exceptional service',
    color: 'from-orange-500 to-orange-600'
  }
];

export function Awards() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#6D28D9] uppercase tracking-wider text-sm mb-2">Recognition</div>
          <h2 className="text-4xl lg:text-5xl text-[#111827] mb-4">
            Awards & Recognition
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence has earned us recognition and trust from clients across Nepal.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${award.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl text-[#111827] mb-3 relative">
                  {award.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed relative">
                  {award.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-[#1E3A8A] to-[#6D28D9] rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl mb-2">3+</div>
              <div className="text-blue-200">Years in Business</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2">100+</div>
              <div className="text-blue-200">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2">50+</div>
              <div className="text-blue-200">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2">98%</div>
              <div className="text-blue-200">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
