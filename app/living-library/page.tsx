import HeroSection from "@/components/hero-section"
import SectionTitle from "@/components/section-title"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function LivingLibraryPage() {
  return (
    <div>
      <HeroSection
        title="Living Library"
        subtitle="Breaking down prejudice through dialogue and understanding"
        backgroundImage="/placeholder.svg?height=800&width=1600"
      />

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Testimonials"
            subtitle="Hear from our 2025 January participants about their Living Library experience."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="card-hover">
              <CardContent className="p-6">
                <p className="text-gray-600 italic mb-4">"The most eye-opening discussion that l have ever had."</p>
                <div className="w-12 h-1 bg-knooppunt-orange mx-auto"></div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <p className="text-gray-600 italic mb-4">
                  "Totally engaging… real.. emotional and a wonderful learning experience."
                </p>
                <div className="w-12 h-1 bg-knooppunt-orange mx-auto"></div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <p className="text-gray-600 italic mb-4">"Beautiful, moving, genuine.. no words."</p>
                <div className="w-12 h-1 bg-knooppunt-orange mx-auto"></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="What is a Living Library?"
                subtitle="A Living Library works just like a regular library – readers can browse the catalog for the available titles, choose the book they want to read, and borrow it for a limited period of time. The difference is that in a Living Library, the books are people."
              />
              <p className="text-gray-600 mb-6">
                Each "book" is a person who has volunteered to share their experiences and engage in conversation with
                "readers." These conversations challenge stereotypes and prejudices through dialogue, creating a space
                for understanding and connection.
              </p>
              <p className="text-gray-600">
                Our Living Library sessions bring together diverse individuals from different backgrounds, cultures, and
                life experiences to share their stories and perspectives with community members in a safe, respectful
                environment.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/activities/ll2.jpg"
                alt="Living Library session at Knooppunt"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="How It Works"
            subtitle="Participating in a Living Library session is simple and rewarding."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-knooppunt-blue text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Browse the Catalog</h3>
              <p className="text-gray-600">
                Before each session, we publish a catalog of available "books" with short descriptions of their stories
                and experiences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-knooppunt-blue text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Borrow a Book</h3>
              <p className="text-gray-600">
                At the session, you can borrow a human "book" for a 30-minute conversation. You can ask questions and
                engage in dialogue.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-knooppunt-blue text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Return and Reflect</h3>
              <p className="text-gray-600">
                After your conversation, you can borrow another "book" or join a reflection session to share your
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-knooppunt-blue text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Become a Human Book</h2>
              <p className="text-xl mb-6">
                Do you have a unique story or perspective to share? Consider becoming a human "book" in our Living
                Library.
              </p>
              <p className="mb-8">
                We're looking for individuals from diverse backgrounds who are willing to share their experiences and
                engage in open, respectful conversations with others. As a human book, you'll help break down
                stereotypes and foster understanding in our community.
              </p>
              <Link href="/contact">
                <button className="bg-white text-knooppunt-blue hover:bg-gray-100 px-6 py-3 rounded-md font-medium">
                  Apply to Become a Book
                </button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/activities/ll3.jpg"
                alt="Human books at Knooppunt Living Library"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
