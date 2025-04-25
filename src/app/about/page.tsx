import Image from 'next/image'
import Navigation from '@/components/Navigation'

export default function About() {
  return (
    <main>
      <Navigation />
      
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about/Jorge22.jpg"
                alt="Jorge Chable - Founder of Chable Cleaning Services"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            <div>
              <h1 className="section-title mb-6">About Jorge Chable</h1>
              <div className="space-y-4 text-lg">
                <p>
                  With over 9 years of experience in remodeling and cleaning services, 
                  Jorge Chable has built a reputation for excellence in the Contra Costa Bay Area.
                </p>
                <p>
                  As a bilingual professional, Jorge brings not only technical expertise but also 
                  clear communication and understanding to every project, ensuring client satisfaction 
                  from start to finish.
                </p>
                <p>
                  His journey began with a simple mission: to provide high-quality cleaning and 
                  remodeling services with a personal touch. Today, that mission has evolved into 
                  a full-service company that transforms spaces and exceeds expectations.
                </p>
                <p>
                  Jorge's commitment to quality is evident in every project, whether it's a deep 
                  house cleaning, a kitchen remodel, or a custom deck installation. His attention 
                  to detail and dedication to customer satisfaction have earned him a loyal client 
                  base throughout the Bay Area.
                </p>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Our Values</h2>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    Quality Workmanship
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    Clear Communication
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    Attention to Detail
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    Customer Satisfaction
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 