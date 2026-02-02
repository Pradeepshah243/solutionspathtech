import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, Users, MapPin } from 'lucide-react';

export function AboutUs() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2OTkyNzI2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Solutions Path Technology Team"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/50 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border-t-4 border-[#6D28D9]">
              <div className="text-5xl text-[#1E3A8A] mb-2">3+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <div>
              <div className="text-[#6D28D9] uppercase tracking-wider text-sm mb-2">About Us</div>
              <h2 className="text-4xl lg:text-5xl text-[#111827] mb-4">
                Building Digital Excellence in Nepal
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              Solutions Path Technology Pvt. Ltd. is a leading IT company based in Baluwatar, Kathmandu, Nepal. 
              Since our founding in 2023, we've been committed to delivering innovative digital solutions that 
              empower businesses to thrive in the digital age.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              With 100% Nepali ownership and a team of passionate professionals, we specialize in creating 
              scalable software solutions, stunning web applications, and comprehensive IT consulting services 
              tailored to meet the unique needs of businesses in Nepal and beyond.
            </p>

            {/* Quick Facts Badges */}
            <div className="grid sm:grid-cols-3 gap-4 pt-6">
              <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg border border-blue-100">
                <div className="w-12 h-12 bg-[#1E3A8A] rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Founded</div>
                  <div className="text-[#1E3A8A]">2023</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-purple-50 p-4 rounded-lg border border-purple-100">
                <div className="w-12 h-12 bg-[#6D28D9] rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Ownership</div>
                  <div className="text-[#6D28D9]">100% Nepali</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg border border-blue-100">
                <div className="w-12 h-12 bg-[#1E3A8A] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Headquarters</div>
                  <div className="text-[#1E3A8A] text-sm">Baluwatar, KTM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}