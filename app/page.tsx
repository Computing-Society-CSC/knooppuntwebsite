import HeroSection from "@/components/hero-section"
import SectionTitle from "@/components/section-title"
import ActivityCard from "@/components/activity-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <HeroSection
        title="Building Bridges in Our Community"
        subtitle="Knooppunt Community Center connects people, cultures, and ideas through meaningful activities and experiences."
        buttonText="Discover Our Activities"
        buttonLink="/about"
        showVideo={true}
        videoUrl="/videos/hero-video.mp4"
        backgroundImage="/images/hero/main-hero.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-6xl mx-auto">
            <SectionTitle
              title="Welcome to Knooppunt"
              subtitle="Knooppunt Community Center is a UWC Maastricht initiative dedicated to fostering community connections, cultural exchange, and meaningful dialogue."
              centered={true}
            />
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
              Our community center serves as a hub where people from all walks of life can come together, share
              experiences, and learn from one another through our diverse programs and activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
            <ActivityCard
              title="Living Library"
              description="Engage with human 'books' who share their unique life experiences and perspectives in one-on-one conversations."
              image="/images/activities/living-library.jpg"
              link="/living-library"
            />
            <ActivityCard
              title="UWC Experience Day"
              description="Experience the UWC educational model through interactive workshops, discussions, and activities."
              image="/images/activities/uwc-experience.jpg"
              link="/uwc-experience"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Our Mission"
                subtitle="At Knooppunt, we believe in the power of connection and dialogue to build understanding across different backgrounds, cultures, and perspectives."
              />
              <p className="text-gray-600 mb-6">
                Our community center serves as a hub where people from all walks of life can come together, share
                experiences, and learn from one another. Through our diverse programs and activities, we aim to:
              </p>
              <ul className="space-y-2 text-gray-600 mb-8">
                <li className="flex items-start">
                  <span className="text-knooppunt-orange font-bold mr-2">•</span>
                  Foster intercultural understanding and dialogue
                </li>
                <li className="flex items-start">
                  <span className="text-knooppunt-orange font-bold mr-2">•</span>
                  Create opportunities for meaningful community engagement
                </li>
                <li className="flex items-start">
                  <span className="text-knooppunt-orange font-bold mr-2">•</span>
                  Promote the values of respect, compassion, and collaboration
                </li>
                <li className="flex items-start">
                  <span className="text-knooppunt-orange font-bold mr-2">•</span>
                  Build bridges between UWC Maastricht and the wider community
                </li>
              </ul>
              <Link href="/about">
                <Button className="bg-knooppunt-blue hover:bg-knooppunt-blue/90">Learn More About Us</Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/general/community-members.jpg"
                alt="Community members at Knooppunt"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-knooppunt-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Whether you want to participate in our activities, volunteer your time, or collaborate on a project, there's
            a place for you at Knooppunt.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-knooppunt-blue hover:bg-gray-100">
                Contact Us
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" className="bg-white text-knooppunt-blue hover:bg-gray-100">
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Upcoming Events"
            subtitle="Join us for these exciting events and activities at Knooppunt Community Center."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden col-start-2">
              <div className="bg-knooppunt-orange text-white p-4">
                <p className="text-2xl font-bold">28</p>
                <p className="text-sm">May 2025</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">UWC Experience Day</h3>
                <p className="text-gray-600 mb-4">
                  Experience the UWC educational model through interactive workshops.
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Time:</span> 10:00 - 16:00
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Location:</span> UWC Maastricht Campus
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/about">
              <Button
                variant="outline"
                className="border-knooppunt-blue text-knooppunt-blue hover:bg-knooppunt-blue/10"
              >
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
