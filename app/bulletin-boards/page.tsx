import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, HelpCircle, Lightbulb, Recycle } from "lucide-react"

export default function BulletinBoards() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Rotfield
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-4">Bulletin Boards</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Invitation spaces for ideas, questions, and reflections. Places to pin thoughts that need more time to
            develop or connect.
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5" />
                Open Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="p-3 border rounded-md">
                  What are rituals for consciously feeding the bone piles without shame?
                </li>
                <li className="p-3 border rounded-md">
                  How can "decay" be celebrated, not hidden, in teaching systems?
                </li>
                <li className="p-3 border rounded-md">
                  What are signs that a garden (learning system) is becoming brittle?
                </li>
                <li className="p-3 border rounded-md">
                  How to design <em>boardwalks</em> that are helpful but don't restrict wandering?
                </li>
                <li className="p-3 border rounded-md">
                  What is the minimum viable ritual for composting a week's notes?
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Loose Reflections
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="p-3 border rounded-md">
                  <strong>Rot isn't a queue.</strong> It's a biome. You don't pick "the right log." You listen for where
                  the life is starting to move.
                </li>
                <li className="p-3 border rounded-md">
                  <strong>The field will tell me when it's ready.</strong> (Protection against old perfectionist
                  wiring.)
                </li>
                <li className="p-3 border rounded-md">
                  <strong>You don't organize bone piles.</strong> You listen to them rot until you can summon new
                  patterns from them.
                </li>
                <li className="p-3 border rounded-md">
                  <strong>The anxiety comes from invisible pressure</strong> of systems that aren't built for rot —
                  systems that expect every capture to become a "clean note."
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Recycle className="h-5 w-5" />
                Compost Prompts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="p-3 border rounded-md">
                  What old chat logs or notes have been sitting in my bone pile that might contain hidden insights?
                </li>
                <li className="p-3 border rounded-md">
                  Which abandoned project still has energy that could be redirected?
                </li>
                <li className="p-3 border rounded-md">
                  What connections am I not seeing between different shacks in my knowledge garden?
                </li>
                <li className="p-3 border rounded-md">
                  Which ideas need more time to rot before they're ready to be harvested?
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
