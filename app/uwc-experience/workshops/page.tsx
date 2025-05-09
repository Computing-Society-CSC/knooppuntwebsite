import HeroSection from "@/components/hero-section"
import SectionTitle from "@/components/section-title"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WorkshopsPage() {
  const workshops = [
    {
      title: "Turn Waste into Wonder: Soapmaking from used cooking oil",
      facilitator: "By Ayse Cosan",
      description:
        "Join us for a hands-on workshop where sustainability meets creativity! Learn how to transform used cooking oil into beautiful, eco-friendly soap. In this session, you'll discover the science behind saponification, explore the environmental benefits of upcycling waste, and leave with your own handmade soap. No prior experience needed – just bring your curiosity and a willingness to get your hands a little sudsy!",
    },
    {
      title: "Exploring Global Issues & Course Concepts",
      facilitator: "By Jancey Clark",
      description:
        "In the DP English Language and Literature course, there are 5 key concepts. Participants will explore how these course concepts can be seen in real-world global issues. Then we will discuss the range of text types which are studied in the Language & Literature course. Working in a small group, participants will select a text which represents one of the course concepts and reflects a global issue. Each group will share their selection. The aim of the workshop is for participants to understand how authors and artists use various text types to communicate a message about a global issue and inspire us to take action.",
    },
    {
      title: "More than Words: My Languages, My Superpower!",
      facilitator: "By Tanya Hermus & Aliki Beni",
      description:
        "In this interactive workshop, we'll explore how the languages we speak shape the way we think, learn, and express ourselves. Through fun activities, reflections, and group discussions, you'll discover the power of using all your languages — not just in life, but in learning too!",
    },
    {
      title: "Mini Film Festival",
      facilitator: "By Ajay Hirani",
      description:
        "The Y12 students will have finished their first group film. The films are all based on poems by BIPOC (Black Indigenous People of Color) female or trans poets. We will screen it and do some feedback on the different roles.",
    },
    {
      title: "From Warzones to Classrooms: We carry more than our flags! - I",
      facilitator: "By Veronika, Viktoriia, Maya",
      description:
        "Imagine a space where the echoes of conflict meet the aspirations of peace. In this open dialogue, you'll hear directly from Ukrainian and Syrian students at UWCM as they share their personal experiences navigating identity, resilience, and the profound impact of conflict in their homelands. This isn't just a presentation; it's an opportunity to connect with young voices carrying the weight of history and the hope for a brighter future. Join us for a powerful conversation that transcends headlines and delves into the human stories behind global events. Prepare to be moved, challenged, and inspired with us, but don't forget to leave your prejudices behind as we are going to broaden your perspectives!",
    },
    {
      title: "From Warzones to Classrooms: We carry more than our flags! - II",
      facilitator: "By Balsam and Mais",
      description:
        "Imagine a space where the echoes of conflict meet the aspirations of peace. In this open dialogue, you'll hear directly from Sudanese and Palestinian students at UWCM as they share their personal experiences navigating identity, resilience, and the profound impact of conflict in their homelands. This isn't just a presentation; it's an opportunity to connect with young voices carrying the weight of history and the hope for a brighter future. Join us for a powerful conversation that transcends headlines and delves into the human stories behind global events. Prepare to be moved, challenged, and inspired with us, but don't forget to leave your prejudices behind as we are going to broaden your perspectives!",
    },
    {
      title: "Gender in Media",
      facilitator: "By Robin Deelen",
      description:
        'What does media tell us about what it means "to be a man", what does it tell us about being a woman? Is there such a thing as an "ideal woman", and if so what does she look like? What happens if you do not fit these versions of masculinity or femininity? This session aims to uncover some of the messages regarding gender identity that we consume on a daily basis. It challenges you to think about the media that you consume in a critical manner and form your own opinion regarding what kind of masculinity, femininity or other gender identity you would like to ascribe to.',
    },
    {
      title: "Science Talk",
      facilitator: "By Edward Omondi",
      description: "Hands on science activity ;-) Be surprised what we can do with science!",
    },
    {
      title: "How do we know what we know?",
      facilitator: "By Pavan Kumar",
      description:
        "The group will engage in introspection to examine how they view the world and the agents that influence their perceptions.",
    },
    {
      title: "How should we accommodate religious diversity?",
      facilitator: "By Ben Clark",
      description:
        'The group will be joining a Y12 World Arts & Cultures (WAC) class or a Theory of Knowledge (ToK) class for an interactive session with an introduction to some paradigmatic thoughts about pluralism, a contemplative activity and a discussion/sharing opportunity to answer the question "How should we accommodate religious diversity in the UWC Experience?"',
    },
    {
      title: "Neurodiversity",
      facilitator: "By Luka Evans",
      description: "Informational session about neurodiversity",
    },
    {
      title: "Social Progress, Awareness and Racial Knowledge (SPARK)",
      facilitator: "By Eric Feng Li",
      description:
        "Social Progress, Awareness and Racial Knowledge (SPARK), a student led initiative in our school, with this workshop, aims to create awareness and create a safe space where people can learn and share their experiences around media and representation.",
    },
    {
      title: "Non-violent social movement: Join the cause and do so non-violently!",
      facilitator: "By Chiel Mooij",
      description:
        "Looking at past examples, we analyse the emergence of social movements, how they organise themselves and how nonviolence can play a significant role in their success.",
    },
    {
      title: "Unpacking identity: Gender and sexuality",
      facilitator: "By Lyzda, Milo, Majda",
      description:
        "Join us on a journey of the gender and sexuality exploration as part of people's identity and how the definition and perspective on these two topics varies depending on the culture. By recognizing the diverse definitions and perspectives shaped by cultures worldwide, we will unpack these concepts and appreciate their rich diversity across the globe.",
    },
    {
      title: "Sustainability: Different approaches and opportunities",
      facilitator: "By Olaya Garcia and the Eco Team",
      description:
        "Overview of how to integrate Sustainability in the school and food footprinting (how many earth resources does the food we eat require to reach our plate?)",
    },
    {
      title: "The IB Music Experience: Harmonizing Cultures",
      facilitator: "By JP Nyamaani",
      description:
        "The workshop aims to give it's participants a good Idea of the experience of IB Music in the school and the broader aims of IB music. I will begin by briefly explaining the IB Music syllabus, including the mandatory task components and the program's broader aims. Then, I'll proceed to have the participants do a short mini-analysis of a protest song by Fela Kuti followed by a short jazz improvisation attempt by the musicians attending the workshop.",
    },
    {
      title: "Own Your Voice: Gender Equality & Feminism at UWCM",
      facilitator: "By Vulnus Team",
      description:
        "Vulnus, a student-led feminist initiative, is organizing a workshop on how to get from silence to solidarity when it comes to gender equality at UWCM. A group of female student leaders will talk about the realities of gender equality and feminism among young people, including their personal stories and the unique experience of organizing safe space and feminist activities at UWC Maastricht. It's a interactive and informal workshop that will give a lot of insights and inspiration to those who are willing to make a meanigful change in their school communities.",
    },
    {
      title: "Culture erasure and its effect on modern societies",
      facilitator: "By Mariia Bogdanok",
      description:
        "This workshop will provoke a conversation on the core nature and definition of the culture erasure and enforcement, bringing up an example of both her home country, Ukraine, and also others cases. Mariia will talk about how it has shaped modern societies we live in, and how it has impacted them. She aims to bring awareness and inform about the dangers of both culture erasure and enforcement using her personal experience, UWCM background, Ukrainian context and other cases.",
    },
  ]

  return (
    <div>
      <HeroSection
        title="UWC Experience Workshops"
        subtitle="Interactive workshops that bring the UWC educational model to life"
        backgroundImage="/placeholder.svg?height=800&width=1600"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Workshops"
            subtitle="UWC Experience Day features a variety of interactive workshops led by UWC students, alumni, and faculty. Each workshop is designed to be engaging, thought-provoking, and fun, giving participants a taste of the UWC educational approach."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {workshops.map((workshop, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{workshop.title}</h3>
                  <p className="text-sm font-medium text-knooppunt-blue mb-4">{workshop.facilitator}</p>
                  <p className="text-gray-600">{workshop.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-knooppunt-blue text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Next UWC Experience Day</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Experience these workshops and more at our upcoming UWC Experience Day.
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
              Registration includes access to all workshops (subject to capacity), lunch, and closing ceremony.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-knooppunt-blue hover:bg-gray-100">
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
