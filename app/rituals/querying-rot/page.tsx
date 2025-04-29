import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { QueryingRotRitual } from "@/components/querying-rot-ritual"

export default function QueryingRot() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Rotfield
          </Button>
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Querying the Rot Ritual</h1>
          <p className="text-lg text-muted-foreground">
            A gentle practice for when you feel anxious about which notes to use or how to organize your thoughts. This
            ritual helps you listen to your bone piles and find emergent patterns without forcing structure.
          </p>
        </div>

        <div className="mb-8">
          <blockquote className="p-4 border-l-4 bg-muted/50">
            <p className="italic">The field will tell me when it's ready.</p>
            <footer className="mt-2 text-sm text-muted-foreground">— Protection against perfectionist wiring</footer>
          </blockquote>
        </div>

        <QueryingRotRitual />

        <div className="mt-10 p-6 border rounded-lg bg-muted/30">
          <h2 className="text-xl font-semibold mb-4">Remember:</h2>
          <ul className="space-y-3">
            <li>
              <p>
                <strong>Rot isn't a queue.</strong> It's a biome. You don't pick "the right log." You listen for where
                the life is starting to move.
              </p>
            </li>
            <li>
              <p>
                <strong>You aren't promoting an old note.</strong> You are harvesting from the field, pulling threads
                from the rot, from the living hum of what has composted.
              </p>
            </li>
            <li>
              <p>
                <strong>The anxiety comes from invisible pressure</strong> of systems that expect every capture to
                become a "clean note" and every fragment to "promote" neatly into a final artifact.
              </p>
            </li>
            <li>
              <p>
                <strong>In Rotfield:</strong> Logs aren't waiting to be "promoted." Bones aren't "drafts" hoping to be
                cleaned up. They are themselves: raw material, compost, underground hum.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
