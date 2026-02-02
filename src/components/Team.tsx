import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Rajesh Sharma',
    role: 'Lead Software Architect',
    image:'/images/founders/man.jpeg',
    bio: '1+ years in enterprise software development. Expert in scalable cloud architectures.',
    linkedin: '#'
  },
  {
    name: 'Sunil Sah',
    role: 'Full-Stack Developer',
    image: '/images/founders/man.jpeg',
    bio: 'Specializes in React, Node.js, and modern web technologies. Passionate about UX.',
    linkedin: '#'
  },
  {
    name: 'Amit Gurung',
    role: 'UI/UX Designer',
    image: '/images/founders/man.jpeg',
    bio: 'Creates intuitive and beautiful interfaces. Expert in Figma and design systems.',
    linkedin: '#'
  },
  {
    name: 'Priya Shrestha',
    role: 'DevOps Engineer',
    image: '/images/founders/man.jpeg',
    bio: 'CI/CD pipeline expert. Ensures smooth deployment and infrastructure management.',
    linkedin: '#'
  },
  {
    name: 'Suresh Rai',
    role: 'Project Manager',
    image: '/images/founders/man.jpeg',
    bio: 'Agile methodology expert. Ensures projects are delivered on time and within budget.',
    linkedin: '#'
  },
  {
    name: 'Bikee Sah',
    role: 'QA Lead',
    image: '/images/founders/man.jpeg',
    bio: 'Quality assurance specialist. Ensures every product meets the highest standards.',
    linkedin: '#'
  }
];

export function Team() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#6D28D9] uppercase tracking-wider text-sm mb-2">Meet Our Team</div>
          <h2 className="text-4xl lg:text-5xl text-[#111827] mb-4">
            A Passionate Team Driving Digital Transformation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse team of experts brings together years of experience to deliver exceptional results.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Name and Role (Always Visible) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl mb-1">{member.name}</h3>
                  <p className="text-blue-300 text-sm">{member.role}</p>
                </div>

                {/* Hover Content */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#1E3A8A] to-[#6D28D9] p-6 flex flex-col justify-center items-center text-center text-white transition-opacity duration-300 ${
                    hoveredIndex === index ? 'opacity-95' : 'opacity-0'
                  }`}
                >
                  <h3 className="text-2xl mb-2">{member.name}</h3>
                  <p className="text-blue-200 mb-4">{member.role}</p>
                  <p className="text-sm mb-6 leading-relaxed">{member.bio}</p>
                  
                  <a
                    href={member.linkedin}
                    className="inline-flex items-center gap-2 bg-white text-[#1E3A8A] px-6 py-2 rounded-full hover:shadow-lg transition-shadow"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>Connect</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
