import HeroSection from "@/components/hero-section"
import SectionTitle from "@/components/section-title"
import TeamMember from "@/components/team-member"
import ContactForm from "@/components/contact-form"
import Image from "next/image"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Karolien",
      image: "/team/karolien.jpg",
    },
    {
      name: "Viktoriia",
      image: "/team/viktoriia.jpg",
    },
    {
      name: "Sheila",
      image: "/team/sheila.jpg",
    },
    {
      name: "Beste",
      image: "/team/beste.jpg",
    },
    {
      name: "Sahar",
      image: "/team/sahar.jpg",
    },
    {
      name: "Regina",
      image: "/team/regina.jpg",
    },
    {
      name: "Gabi",
      image: "/team/gabi.jpg",
    },
    {
      name: "Alima",
      image: "/team/alima.jpg",
    },
    {
      name: "Eric",
      image: "/team/eric.jpg",
    },
  ]

  return (
    <div>
      <HeroSection
        title="About Knooppunt"
        subtitle="Building bridges in our community through connection, dialogue, and shared experiences."
        backgroundImage="/placeholder.svg?height=800&width=1600"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <SectionTitle
                title="Our Story"
                subtitle="Knooppunt Community Center was founded in 2020 as an initiative of UWC Maastricht to create a space for meaningful community engagement."
              />
              <p className="text-gray-600 mb-6">
                The name "Knooppunt" comes from the Dutch word for "junction" or "node," representing our role as a
                meeting point where different paths, people, and ideas come together. Our community center serves as a
                hub for intercultural dialogue, learning, and collaboration.
              </p>
              <p className="text-gray-600 mb-6">
                What began as a small project has grown into a vibrant community space that hosts a variety of programs
                and activities, including our flagship initiatives: the Living Library and UWC Experience Day.
              </p>
              <p className="text-gray-600">
                Today, Knooppunt continues to evolve and expand, guided by our commitment to fostering understanding,
                respect, and connection across different backgrounds and perspectives.
              </p>
            </div>
            <div className="order-1 md:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/activities/our story.jpg"
                alt="Knooppunt Community Center building"
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
            title="Our Values"
            subtitle="These core values guide everything we do at Knooppunt Community Center."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
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
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Connection</h3>
              <p className="text-gray-600">
                We believe in the power of human connection to build understanding and empathy across different
                backgrounds and experiences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Dialogue</h3>
              <p className="text-gray-600">
                We create spaces for open, respectful dialogue where diverse perspectives can be shared and heard.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
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
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Inclusion</h3>
              <p className="text-gray-600">
                We are committed to creating an inclusive environment where everyone feels welcome, valued, and
                respected.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Learning</h3>
              <p className="text-gray-600">
                We foster a culture of continuous learning, curiosity, and growth through our programs and activities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
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
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of working together and building partnerships to create positive change in our
                community.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
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
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Global Perspective</h3>
              <p className="text-gray-600">
                We embrace a global perspective while remaining rooted in our local community, connecting the two
                through our work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Meet Our Team"
            subtitle="The dedicated individuals who make Knooppunt Community Center possible."
            centered={true}
          />

          <div className="mb-12 text-center mt-8">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl mx-auto max-w-3xl">
              <Image
                src="/team/Team 2025-2026.JPG"
                alt="Knooppunt Team 2025-2026"
                fill
                className="object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-xl font-bold text-white">Knooppunt Team 2025-2026</h3>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                email={member.email}
                social={member.social}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionTitle
                title="Contact Us"
                subtitle="Have questions or want to get involved? We'd love to hear from you!"
              />
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Visit Us</h3>
                <p className="text-gray-600 mb-2">Discusworp 13</p>
                <p className="text-gray-600 mb-2">6225 XP Maastricht</p>
                <p className="text-gray-600 mb-4">Netherlands</p>

                <h3 className="text-xl font-bold text-primary mb-4 mt-6">Contact Information</h3>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Email:</span> knooppunt@uwcmaastricht.nl
                </p>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
