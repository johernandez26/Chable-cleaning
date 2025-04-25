import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { Icon } from '@/components/Icons'

export default function Services() {
  const cleaningServices = [
    {
      title: 'Residential Cleaning',
      description: 'Professional cleaning for homes, apartments, and living spaces.',
      icon: 'cleaning',
      image: '/images/gallery/Kitchen-dining-room-done.jpg',
      features: [
        'House Cleaning',
        'Apartment Cleaning',
        'Deep Cleaning',
        'Move-In/Move-Out Cleaning'
      ]
    },
    {
      title: 'Commercial Cleaning',
      description: 'Maintaining clean and professional work environments.',
      icon: 'office',
      image: '/images/gallery/room-painting.jpg',
      features: [
        'Office Cleaning',
        'Common Area Maintenance',
        'Restroom Cleaning',
        'Floor Care'
      ]
    },
    {
      title: 'Specialty Cleaning',
      description: 'Specialized cleaning services for specific needs.',
      icon: 'specialized',
      image: '/images/gallery/OutsidePatio.jpg',
      features: [
        'Window Cleaning',
        'Power Washing',
        'Outdoor Space Cleaning',
        'Trash Removal'
      ]
    }
  ]

  const epoxyServices = [
    {
      title: 'Epoxy Finishes',
      description: 'Professional epoxy application for various surfaces.',
      icon: 'specialized',
      image: '/images/gallery/epoxy.jpg',
      features: [
        'Countertop Coating',
        'Bar Top Finishes',
        'Custom Surface Designs',
        'Durable Protective Layers'
      ]
    }
  ]

  const schedulingOptions = [
    {
      title: 'One-Time',
      description: 'Perfect for special occasions or deep cleaning needs'
    },
    {
      title: 'Weekly',
      description: 'Regular maintenance for consistent cleanliness'
    },
    {
      title: 'Bi-weekly',
      description: 'Balanced cleaning schedule for busy spaces'
    },
    {
      title: 'Monthly',
      description: 'Periodic deep cleaning for well-maintained spaces'
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Professional cleaning and epoxy finishing services to transform your space
          </p>
        </div>
      </section>

      {/* Cleaning Services */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Cleaning Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {cleaningServices.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-primary mb-4">
                    <Icon name={service.icon} className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-700">
                        <span className="text-primary mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Epoxy Services */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Epoxy Finishes</h2>
          <div className="max-w-3xl mx-auto">
            {epoxyServices.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="text-primary mb-4">
                    <Icon name={service.icon} className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center text-gray-700">
                        <span className="text-primary mr-2">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scheduling Options */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Flexible Scheduling</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {schedulingOptions.map((option) => (
              <div
                key={option.title}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                <p className="text-gray-600">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote and consultation
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-colors duration-300"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </main>
  )
} 