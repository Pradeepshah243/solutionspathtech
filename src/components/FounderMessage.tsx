import { ImageWithFallback } from './figma/ImageWithFallback';
import { Quote } from 'lucide-react';

const founders = [
  // {
  //   name: 'Ram Prasad Neupane',
  //   role: 'Co-Founder & CEO',
  //   image: 'https://images.unsplash.com/photo-1742119803195-aaf41d6b2e61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBDRU8lMjBwb3J0cmFpdCUyMGNvcnBvcmF0ZXxlbnwxfHx8fDE3NzAwMTA4MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  //   message: '"At Solutions Path Technology, we believe that innovation is not just about technology—it\'s about understanding our clients\' needs and crafting solutions that truly make a difference. Since founding this company in 2023, our mission has been clear: to empower Nepali businesses with world-class digital solutions."'
  // },

  {
  name: 'Pradeep Raut',
  role: 'Co-Founder & CEO',
  image: '/images/founders/man.jpeg',
  message: '"At Solutions Path Technology, we believe that innovation is not just about technology—it\'s about understanding our clients\' needs and crafting solutions that truly make a difference. Since founding this company in 2023, our mission has been clear: to empower Nepali businesses with world-class digital solutions."'
},

  {
    name: 'Suraj Sah',
    role: 'Co-Founder & CTO',
    image: '/images/founders/man.jpeg',
    message: '"Technology is the bridge between dreams and reality. Our team\'s dedication to excellence and continuous innovation drives everything we do. We\'re proud to be 100% Nepali-owned and committed to contributing to Nepal\'s digital transformation journey."'
  }
];

export function FounderMessage() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-[#6D28D9] uppercase tracking-wider text-sm mb-2">Message from the Founders</div>
          <h2 className="text-4xl lg:text-5xl text-[#111827]">Our Vision & Commitment</h2>
        </div>

        <div className="space-y-8">
          {founders.map((founder, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className={`grid md:grid-cols-5 gap-8 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                {/* Founder Portrait */}
                <div className={`md:col-span-2 relative ${index % 2 === 1 ? 'md:col-start-4' : ''}`}>
                  <ImageWithFallback
                    src={founder.image}
                    alt={`${founder.name} - ${founder.role}`}
                    className="w-full h-full object-cover min-h-[400px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/60 via-transparent to-transparent"></div>
                  
                  {/* Name Tag on Image */}
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl mb-1">{founder.name}</h3>
                    <p className="text-blue-200">{founder.role}</p>
                  </div>
                </div>

                {/* Message */}
                <div className={`md:col-span-3 p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <Quote className="w-12 h-12 text-[#6D28D9] mb-6" />
                  
                  <blockquote className="space-y-4 text-gray-700 text-lg leading-relaxed">
                    <p>{founder.message}</p>
                  </blockquote>

                  {/* Signature */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="text-3xl text-[#1E3A8A] font-serif italic mb-2">
                      {founder.name}
                    </div>
                    <div className="text-gray-600">{founder.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
