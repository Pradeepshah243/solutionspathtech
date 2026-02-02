import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Roshan Sah',
    position: 'CEO, Tesla Infrastructure ',
    company: 'Tesla Infrastructure ',
    rating: 5,
    text: 'Solutions Path Technology transformed our outdated system into a modern, efficient platform. Their team\'s expertise and dedication are unmatched. Highly recommended!',
    logo: 'HS'
  },
  {
    name: 'Ashutosh Karn',
    position: 'Managing Director, Engineers Vlogs',
    company: 'Engineers Vlogs',
    rating: 5,
    text: 'Working with Solutions Path was a game-changer for our e-commerce business. They delivered a beautiful, functional online store that increased our sales by 150%.',
    logo: 'NTC'
  },
  {
    name: 'Prakash Adhikari',
    position: 'Founder, XYZ',
    company: 'EduNepal',
    rating: 5,
    text: 'The team\'s professionalism and technical knowledge are exceptional. They built our educational platform from scratch and continue to provide excellent support.',
    logo: 'EN'
  },
  {
    name: 'Rina Maharjan',
    position: 'Director, XYZ',
    company: 'Artisan Nepal',
    rating: 5,
    text: 'Outstanding work! They understood our vision and created a website that perfectly represents our brand. The ongoing support has been fantastic.',
    logo: 'AN'
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-gradient-to-br from-[#1E3A8A] to-[#6D28D9] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-purple-300 uppercase tracking-wider text-sm mb-2">Client Reviews</div>
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Don't just take our word for it—hear from the businesses we've helped transform.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            {/* Quote Icon */}
            <Quote className="w-12 h-12 text-[#6D28D9] mb-6" />

            {/* Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-xl text-gray-700 leading-relaxed mb-8 min-h-[120px]">
              "{currentTestimonial.text}"
            </p>

            {/* Client Info */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                {/* Logo Circle */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1E3A8A] to-[#6D28D9] flex items-center justify-center text-white flex-shrink-0">
                  <span className="text-lg">{currentTestimonial.logo}</span>
                </div>
                
                <div>
                  <h4 className="text-lg text-[#111827]">{currentTestimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{currentTestimonial.position}</p>
                  <p className="text-[#6D28D9] text-sm">{currentTestimonial.company}</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full bg-gray-100 hover:bg-[#1E3A8A] hover:text-white transition-colors flex items-center justify-center"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full bg-gray-100 hover:bg-[#1E3A8A] hover:text-white transition-colors flex items-center justify-center"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className="mt-16 text-center">
          <p className="text-blue-200 mb-8">Trusted by leading businesses across Nepal</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-24 h-24 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white text-xl"
              >
                {testimonial.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
