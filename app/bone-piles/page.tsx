import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, MessageSquare, FileText, FolderArchive, GitBranch } from "lucide-react"

export default function BonePiles() {
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
          <h1 className="text-4xl font-bold mb-4">Bone Piles</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Memory ruins; archives; forgotten traces. Raw necromantic fuel for new ideas. You don't organize bone piles.
            You listen to them rot until you can summon new patterns from them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Chat Logs
              </CardTitle>
              <CardDescription>Dead chat logs with latent energy</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Exported conversations, AI interactions, and discussion threads</p>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Exported Notes
              </CardTitle>
              <CardDescription>Forgotten notes and abandoned drafts</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Old notebooks, rough notes, and messy captures that never "became" anything</p>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FolderArchive className="h-5 w-5" />
                Old Projects
              </CardTitle>
              <CardDescription>Abandoned or completed work</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Past projects that might contain seeds for future growth</p>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GitBranch className="h-5 w-5" />
                Abandoned Threads
              </CardTitle>
              <CardDescription>Paths not taken</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Ideas that were started but never completed, waiting for resurrection</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 p-6 border rounded-lg bg-muted/30">
          <h2 className="text-xl font-semibold mb-4">Rituals Around Bone Piles</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="font-medium">Tending the Bone Pile</h3>
              <p className="text-muted-foreground">
                Skim old logs gently. Let patterns whisper. Pull fragments into new "living notes."
              </p>
            </li>
            <li>
              <h3 className="font-medium">Necromantic Excavations</h3>
              <p className="text-muted-foreground">
                Intentionally go digging once in a while. Find one overlooked idea to resurrect or mutate.
              </p>
            </li>
            <li>
              <h3 className="font-medium">Rites of Return</h3>
              <p className="text-muted-foreground">
                Seasonal journey through the oldest ruins. Celebrate what survived. Honor what didn't.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
