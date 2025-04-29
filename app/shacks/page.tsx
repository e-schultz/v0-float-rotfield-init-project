import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, FileText, Layers, Lightbulb } from "lucide-react"

export default function Shacks() {
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
          <h1 className="text-4xl font-bold mb-4">Shacks</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Semi-structured ideas and partial builds. Half-tilted, half-built, always alive. Their windows leak light:
            notes, questions, scraps of half-born ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Rough Articles
              </CardTitle>
              <CardDescription>Articles-in-progress</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="p-2 hover:bg-muted rounded-md">
                  <Link href="#" className="block">
                    Bone Piles Are Sacred: Learning Systems Must Decay to Thrive
                  </Link>
                </li>
                <li className="p-2 hover:bg-muted rounded-md">
                  <Link href="#" className="block">
                    Rot Magic: Building Knowledge Gardens from the Dead
                  </Link>
                </li>
                <li className="p-2 hover:bg-muted rounded-md">
                  <Link href="#" className="block">
                    The Bloom Keeper's Manifesto
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="h-5 w-5" />
                Workshop Outlines
              </CardTitle>
              <CardDescription>Teaching frameworks and workshop ideas</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="p-2 hover:bg-muted rounded-md">
                  <Link href="#" className="block">
                    Necromantic Note-Tending: Building personal rituals
                  </Link>
                </li>
                <li className="p-2 hover:bg-muted rounded-md">
                  <Link href="#" className="block">
                    Boardwalk Weaving: Mapping weak ties between ideas
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="h-full md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Half-built Frameworks
              </CardTitle>
              <CardDescription>Conceptual models and thinking frameworks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 border rounded-md">
                <h3 className="font-medium text-lg mb-2">Rotfield System vs. False System</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">False System</th>
                        <th className="text-left p-2">Rotfield System</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2">Capture → Organize → Promote</td>
                        <td className="p-2">Capture → Let Rot → Listen → Weave</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Anxiety about which note is "right"</td>
                        <td className="p-2">Trust that richness accumulates</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Fear of redundancy</td>
                        <td className="p-2">Fertility through layering</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Need to clean everything up</td>
                        <td className="p-2">Honor the compost</td>
                      </tr>
                      <tr>
                        <td className="p-2">Forced productivity</td>
                        <td className="p-2">Emergent blooming</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
