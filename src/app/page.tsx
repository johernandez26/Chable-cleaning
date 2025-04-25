import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { Icon } from '@/components/Icons'

export default function Home() {
  const featuredServices = [
    {
      title: 'Epoxy Flooring',
      description: 'Transform your floors with durable, beautiful epoxy coatings for both residential and commercial spaces.',
      icon: 'specialized',
      image: '/images/gallery/epoxy.jpg'
    },
    {
      title: 'Painting Services',
      description: 'Expert interior and exterior painting services to refresh and transform your space.',
      icon: 'cleaning',
      image: '/images/gallery/painting.jpg'
    },
    {
      title: 'Kitchen & Bath Remodeling',
      description: 'Complete transformations of your kitchen and bathroom spaces with modern fixtures and finishes.',
      icon: 'office',
      image: '/images/gallery/fullyfinished-kitchen.jpg'
    },
    {
      title: 'Outdoor & Deck Services',
      description: 'Create beautiful outdoor living spaces with our deck construction and patio installation services.',
      icon: 'outdoor',
      image: '/images/gallery/beautiful-outside-patio.jpg'
    }
  ]

  const recentProjects = [
    {
      title: 'Epoxy Floor Installation',
      image: '/images/gallery/epoxy.jpg',
      category: 'Epoxy Flooring'
    },
    {
      title: 'Kitchen Remodel',
      image: '/images/gallery/fullyfinished-kitchen.jpg',
      category: 'Kitchen Remodeling'
    },
    {
      title: 'Outdoor Patio',
      image: '/images/gallery/beautiful-outside-patio.jpg',
      category: 'Outdoor Services'
    }
  ]

  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/gallery/fullyfinished-kitchen.jpg"
              alt="Professional home improvement services by Chable Cleaning Services"
              fill
              className="object-cover brightness-75"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-black/40" />
        </div>
          <div className="absolute top-4 right-4 z-20 bg-black/60 text-white text-xs px-3 py-1 rounded-md">
            Lic # 3027335
            </div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Transform Your Space with Professional Home Improvement
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Expert epoxy flooring, painting, remodeling, and outdoor services to enhance your home or business
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="btn-primary">
              Get a Free Quote
            </Link>
            <Link href="/gallery" className="btn-secondary">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service) => (
              <div
                key={service.title}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-primary mb-4">
                    <Icon name={service.icon} className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Recent Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentProjects.map((project) => (
              <div key={project.title} className="group relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-white/80 text-sm">{project.category}</span>
                    <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/gallery" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-primary mb-4">
                <Icon name="quality" className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Workmanship</h3>
              <p className="text-gray-600">We take pride in delivering exceptional results with attention to detail</p>
            </div>
            <div className="text-center">
              <div className="text-primary mb-4">
                <Icon name="experience" className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Years of Experience</h3>
              <p className="text-gray-600">Trust our expertise in home improvement and renovation</p>
            </div>
            <div className="text-center">
              <div className="text-primary mb-4">
                <Icon name="customer" className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
              <p className="text-gray-600">Your satisfaction is our top priority</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote and let us bring your vision to life
          </p>
          <Link href="/contact" className="btn-secondary bg-white text-primary hover:bg-gray-100">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
} 