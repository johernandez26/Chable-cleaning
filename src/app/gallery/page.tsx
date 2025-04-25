import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function Gallery() {
  const categories = [
    {
      title: 'Epoxy Flooring',
      images: [
        '/images/gallery/epoxy.jpg',
        '/images/gallery/epoxy2.jpg',
        '/images/gallery/epoxy3.jpg',
        '/images/gallery/epoxy4.jpg',
        '/images/gallery/epoxy5.jpg',
        '/images/gallery/epoxy6.jpg',
        '/images/gallery/epoxy7.jpg'
      ]
    },
    {
      title: 'Painting Services',
      images: [
        '/images/gallery/painting.jpg',
        '/images/gallery/more-painting.jpg',
        '/images/gallery/more-more-painting.jpg',
        '/images/gallery/painting-tape.jpg',
        '/images/gallery/taping-painting-inprogress.jpg',
        '/images/gallery/room-painting.jpg'
      ]
    },
    {
      title: 'Kitchen Remodeling',
      images: [
        '/images/gallery/fullyfinished-kitchen.jpg',
        '/images/gallery/kitchen-cabinets-in-progress.jpg',
        '/images/gallery/kitcheninprogress.jpg',
        '/images/gallery/kitchen-in-progress.jpg',
        '/images/gallery/Kitchen-dining-room-done.jpg'
      ]
    },
    {
      title: 'Bathroom Remodeling',
      images: [
        '/images/gallery/bathroom-remodel.jpg',
        '/images/gallery/bathroom-done.jpg',
        '/images/gallery/bathroom-finished.jpg',
        '/images/gallery/wall.jpg'
      ]
    },
    {
      title: 'Outdoor & Deck Services',
      images: [
        '/images/gallery/beautiful-outside-patio.jpg',
        '/images/gallery/patio-deck-finished.jpg',
        '/images/gallery/Outside-decking-done.jpg',
        '/images/gallery/OutsidePatio.jpg',
        '/images/gallery/fence-done.jpg',
        '/images/gallery/outside-balcony-done.jpg',
        '/images/gallery/deck-stairs.jpg',
        '/images/gallery/deck-before-1.jpg',
        '/images/gallery/outside-deck-inprogess.jpg'
      ]
    }
  ]

  return (
    <main>
      <Navigation />
      
      {/* Gallery Header */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work Gallery</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Browse through our collection of completed projects and transformations
          </p>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-16">
        <div className="container-custom">
          <div className="space-y-20">
            {categories.map((category) => (
              <div key={category.title} className="space-y-8">
                <h2 className="text-3xl font-bold text-center">{category.title}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {category.images.map((image, index) => (
                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src={image}
                        alt={`${category.title} - Image ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote and consultation
          </p>
          <Link href="/contact" className="btn-primary hover:bg-primary-dark transition-colors duration-300">
            Request a Quote
          </Link>
        </div>
      </section>
    </main>
  )
} 