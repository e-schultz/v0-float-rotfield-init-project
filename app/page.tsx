import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MouseIcon as Mushroom, Footprints, PinIcon as PinboardIcon, Sprout, Wrench, Bone } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-4">Gardens of Shacks: The Rotfield Vision</h1>
          <p className="text-lg text-muted-foreground">
            A field of soft, steaming rot. Fertile, chaotic. Mushrooms punching through decay. Rickety boardwalks
            stitched across the swamp, sometimes sinking, sometimes lifting you just barely above the muck.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/shacks">
            <Card className="h-full hover:bg-muted/50 transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mushroom className="h-5 w-5" />
                  Shacks
                </CardTitle>
                <CardDescription>Semi-structured ideas and partial builds</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Articles-in-progress, frameworks, and half-formed thoughts</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/boardwalks">
            <Card className="h-full hover:bg-muted/50 transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Footprints className="h-5 w-5" />
                  Boardwalks
                </CardTitle>
                <CardDescription>Minimal connections between ideas</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Wastebook links, maps of content, loose connections</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/bulletin-boards">
            <Card className="h-full hover:bg-muted/50 transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PinboardIcon className="h-5 w-5" />
                  Bulletin Boards
                </CardTitle>
                <CardDescription>Invitation spaces</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Idea dumps, reflection prompts, open questions</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/gardens">
            <Card className="h-full hover:bg-muted/50 transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sprout className="h-5 w-5" />
                  Garden Plots
                </CardTitle>
                <CardDescription>More cultivated systems</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Organized vault sections, growing knowledge trees</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/tool-crates">
            <Card className="h-full hover:bg-muted/50 transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5" />
                  Tool Crates
                </CardTitle>
                <CardDescription>Skill kits, methods, templates</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Ritual scaffolds, writing/teaching tools</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/bone-piles">
            <Card className="h-full hover:bg-muted/50 transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bone className="h-5 w-5" />
                  Bone Piles
                </CardTitle>
                <CardDescription>Failure archives, lessons learned</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Chat logs, old notes, things for note necromancy</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
