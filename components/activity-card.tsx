import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ActivityCardProps {
  title: string
  description: string
  image: string
  link: string
}

const ActivityCard = ({ title, description, image, link }: ActivityCardProps) => {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="aspect-video relative">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={link}>
          <Button className="group">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

export default ActivityCard
