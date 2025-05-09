import { Button } from "@/components/ui/button"
import Link from "next/link"

interface HeroSectionProps {
  title: string
  subtitle: string
  buttonText?: string
  buttonLink?: string
  backgroundImage?: string
  showVideo?: boolean
  videoUrl?: string
}

const HeroSection = ({
  title,
  subtitle,
  buttonText,
  buttonLink = "/",
  backgroundImage = "/placeholder.svg?height=800&width=1600",
  showVideo = false,
  videoUrl = "/videos/hero-video.mp4",
}: HeroSectionProps) => {
  return (
    <div
      className="hero-section relative min-h-[60vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 75, 140, 0.7), rgba(26, 75, 140, 0.7)), url(${backgroundImage})`,
      }}
    >
      <div className="container mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">{subtitle}</p>

        {showVideo && (
          <div className="max-w-4xl mx-auto bg-black/20 p-4 rounded-lg backdrop-blur-sm mt-8 mb-12">
            <div className="aspect-video rounded-md overflow-hidden">
              <video
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
                poster="/placeholder.svg?height=800&width=1600"
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}

        {buttonText && (
          <Link href={buttonLink}>
            <Button size="lg" className="bg-knooppunt-orange hover:bg-knooppunt-orange/90 text-white px-8 py-6 text-lg">
              {buttonText}
            </Button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default HeroSection
