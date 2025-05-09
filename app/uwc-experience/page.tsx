import HeroSection from "@/components/hero-section"
import SectionTitle from "@/components/section-title"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function UWCExperiencePage() {
  return (
    <div>
      <HeroSection
        title="UWC Experience Day"
        subtitle="Experience the unique UWC educational model through interactive workshops and activities"
        backgroundImage="/placeholder.svg?height=800&width=1600"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="What is UWC Experience Day?"
                subtitle="UWC Experience Day offers a taste of the unique educational approach of United World Colleges (UWC) to the wider community."
              />
              <p className="text-gray-600 mb-6">
                UWC is an international educational movement that brings together students from diverse backgrounds to
                promote intercultural understanding, personal responsibility, and a commitment to peace and
                sustainability.
              </p>
              <p className="text-gray-600 mb-6">
                During UWC Experience Day, participants engage in interactive workshops, discussions, and activities
                that reflect the UWC values and educational approach. It's an opportunity to experience firsthand the
                transformative power of education that goes beyond academic excellence to foster compassion, critical
                thinking, and global citizenship.
              </p>
              <Link href="/uwc-experience/workshops">
                <Button className="group">
                  Explore Workshops
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/activities/our story.jpg"
                alt="UWC Experience Day participants"
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
            title="UWC Values in Action"
            subtitle="UWC Experience Day brings to life the core values that define the UWC movement."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-knooppunt-blue/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-knooppunt-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">International Understanding</h3>
                <p className="text-gray-600">
                  Workshops and activities that promote cross-cultural dialogue and understanding, challenging
                  participants to see the world from different perspectives.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-knooppunt-green/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-knooppunt-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Personal Challenge</h3>
                <p className="text-gray-600">
                  Experiences that push participants out of their comfort zones, encouraging personal growth,
                  resilience, and self-awareness.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-knooppunt-orange/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-knooppunt-orange"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Diversity</h3>
                <p className="text-gray-600">
                  Celebration of diversity in all its forms, recognizing that our differences enrich our shared human
                  experience.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-knooppunt-blue/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-knooppunt-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Global Responsibility</h3>
                <p className="text-gray-600">
                  Activities that foster awareness of global issues and inspire participants to take action for a more
                  peaceful and sustainable world.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-knooppunt-green/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-knooppunt-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Lifelong Learning</h3>
                <p className="text-gray-600">
                  Emphasis on curiosity, critical thinking, and the joy of learning as a lifelong journey rather than a
                  destination.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-knooppunt-orange/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-knooppunt-orange"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Community Engagement</h3>
                <p className="text-gray-600">
                  Opportunities to connect with the local community and explore how we can contribute positively to the
                  world around us.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-knooppunt-blue text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Next UWC Experience Day</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Experience the transformative power of UWC education firsthand at our next UWC Experience Day.
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-6 pb-6 border-b border-white/20">
              <div>
                <p className="text-3xl font-bold">28</p>
                <p>May 2025</p>
              </div>
              <div>
                <p className="font-medium">10:00 - 16:00</p>
                <p>UWC Maastricht Campus</p>
              </div>
            </div>
            <p className="mb-8">
              Open to all ages. Workshops are designed for different age groups, with special activities for children,
              teenagers, and adults.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-knooppunt-blue hover:bg-gray-100">
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Testimonials"
            subtitle="Hear from past participants about their UWC Experience Day."
            centered={true}
          />

          <div className="mt-12 bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
            <div>
              <h4 className="font-bold text-primary">Fatima</h4>
              <p className="text-sm text-gray-500">Student of ISK, Brunssum</p>
            </div>
            <p className="text-gray-600 mt-4">
              I'm Fatima, a student of ISK, Brunssum. On 31st May '23 I and my group had the pleasure of spending a day
              in UWC. I certainly have a lot to praise about, so much so that a 'short feedback' wouldn't be enough.
              Firstly I'd like to thank and appreciate the students, who did such a spectacular job organizing numerous
              workshops, leading us throughout the event and of course, for being so kind and courteous.
            </p>
            <p className="text-gray-600 mt-4">
              I was paired-up with Mario Robustelli and I assume, perhaps if he were not such a good leader, I would've
              hardly enjoyed my day, as he was so interactive, instructive and respectful towards us all. My first class
              was Theory of Knowledge (ToK) led by Ms. Roberta, I found the subject quite different from the typical
              subjects at school, It was as if my brain cells have been awakened to question all the possible ways to
              find out a certain solution. Ms. Roberta made sure that everyone is equally included in the debate,
              afterwards she gave us plenty of helpful information about UWC.
            </p>
            <p className="text-gray-600 mt-4">
              Later, we had Mathematics hour with Ms. Behnaz. She explained briefly about 'Pascal's triangle'. I was
              stunned by her way of teaching, she was very clear and on point, it helped a lot as Maths is already a
              complex topic. After class, we even had a small talk. The noon had just began and I already connected to
              so many people, It was an unrealistically astonishing experience.
            </p>
            <p className="text-gray-600 mt-4">
              The last activity was to choose a student led workshop, 'Youth against Racism', there were a couple of
              students leading the workshop and each of them were so involved, I could tell that their real concern is
              to actually spread awareness about the racist acts, that has been ignored and normalized since decades. I
              must say I probably never enjoyed a workshop as much before.
            </p>
            <p className="text-gray-600 mt-4">
              The lunch was organized, delicious and healthy enough to be categorized as a balanced diet, however, I
              would like to recommend letting the students know about the food ingredients that trigger allergies and
              intolerances such as dairy, gluten, nuts etc. In the end of the day, I was left fascinated by how much
              knowledge I gained without wearing myself out, how comfortable socializing was for me as an introvert and
              how honest and receptive everyone was. Lastly, I would like to thank the whole UWC group once again for
              such a warm welcome and giving us this unforgettable experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
