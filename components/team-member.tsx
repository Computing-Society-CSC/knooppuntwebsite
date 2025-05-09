import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface TeamMemberProps {
  name: string
  image: string
}

const TeamMember = ({ name, image }: TeamMemberProps) => {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="aspect-square relative">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <CardContent className="p-6 text-center">
        <h3 className="text-xl font-bold text-primary">{name}</h3>
      </CardContent>
    </Card>
  )
}

export default TeamMember
