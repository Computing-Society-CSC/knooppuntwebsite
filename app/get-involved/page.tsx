import HeroSection from "@/components/hero-section"
import SectionTitle from "@/components/section-title"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Send } from "lucide-react"
import { useState } from "react"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  idea: z.string().min(10, { message: "Your idea must be at least 10 characters." }),
})

export default function GetInvolvedPage() {
  return (
    <div>
      <HeroSection
        title="Get Involved"
        subtitle="Join us in building bridges in our community"
        backgroundImage="/placeholder.svg?height=800&width=1600"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Ways to Get Involved"
            subtitle="There are many ways you can contribute to the Knooppunt Community Center"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Volunteer</h3>
                <p className="text-gray-600 mb-6">
                  Share your time and skills to help with our events, programs, and activities. We welcome volunteers of
                  all backgrounds and abilities.
                </p>
                <Link href="/contact">
                  <Button className="w-full">Contact Us</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Become a Human Book</h3>
                <p className="text-gray-600 mb-6">
                  Share your unique story and experiences as part of our Living Library program. Help break down
                  stereotypes through dialogue.
                </p>
                <Link href="/living-library">
                  <Button className="w-full">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Propose an Idea</h3>
                <p className="text-gray-600 mb-6">
                  Have an idea for a community event, workshop, or collaboration? We're always open to new initiatives
                  that align with our mission.
                </p>
                <Link href="#propose-idea">
                  <Button className="w-full">Share Your Idea</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="propose-idea" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Propose Your Idea"
            subtitle="We welcome your ideas for events, workshops, or collaborations"
            centered={true}
          />

          <div className="max-w-2xl mx-auto mt-12">
            <GetInvolvedForm />
          </div>
        </div>
      </section>
    </div>
  )
}

// Client component for the form
function GetInvolvedForm() {
  "use client"

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      idea: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log(values)
    setIsSubmitting(false)
    setIsSuccess(true)
    form.reset()

    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {isSuccess ? (
        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-6">
          Thank you for your idea! We will review it and get back to you soon.
        </div>
      ) : null}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Your email" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="idea"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Idea</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe your idea for an event, workshop, or collaboration..."
                    className="min-h-[150px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full md:w-auto bg-knooppunt-blue hover:bg-knooppunt-blue/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting...
              </span>
            ) : (
              <span className="flex items-center">
                Submit Idea
                <Send className="ml-2 h-4 w-4" />
              </span>
            )}
          </Button>
        </form>
      </Form>
    </div>
  )
}
