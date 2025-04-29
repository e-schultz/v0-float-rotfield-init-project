"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Bone, Sprout, Footprints } from "lucide-react"

export function QueryingRotRitual() {
  const [step, setStep] = useState(1)
  const [notes, setNotes] = useState({
    boneThoughts: "",
    emergingPatterns: "",
    nextSteps: "",
  })

  const handleInputChange = (field: keyof typeof notes, value: string) => {
    setNotes((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (step < 3) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Querying the Rot Ritual</CardTitle>
        <CardDescription>
          A gentle practice for listening to your bone piles and finding emergent patterns
        </CardDescription>
      </CardHeader>
      <CardContent>
        {step === 1 && (
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Bone className="h-5 w-5 mt-1" />
              <div>
                <h3 className="font-medium mb-2">Listen to the Bones</h3>
                <p className="text-muted-foreground mb-4">
                  Gently scan your memory of old notes, chat logs, or abandoned ideas. What fragments come to mind?
                  Don't force organization - just let them surface.
                </p>
              </div>
            </div>
            <Textarea
              placeholder="What bone fragments are calling to you today? What old ideas, notes, or conversations feel like they have energy?"
              className="min-h-[150px]"
              value={notes.boneThoughts}
              onChange={(e) => handleInputChange("boneThoughts", e.target.value)}
            />
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Sprout className="h-5 w-5 mt-1" />
              <div>
                <h3 className="font-medium mb-2">Notice Emerging Patterns</h3>
                <p className="text-muted-foreground mb-4">
                  What patterns or connections are starting to form? What themes keep recurring? What feels alive in the
                  compost?
                </p>
              </div>
            </div>
            <Textarea
              placeholder="What patterns or themes do you notice emerging from these bone fragments?"
              className="min-h-[150px]"
              value={notes.emergingPatterns}
              onChange={(e) => handleInputChange("emergingPatterns", e.target.value)}
            />
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Footprints className="h-5 w-5 mt-1" />
              <div>
                <h3 className="font-medium mb-2">Lay a Boardwalk</h3>
                <p className="text-muted-foreground mb-4">
                  What's the smallest next step to connect these ideas? Not a grand plan - just a rickety boardwalk to
                  help you traverse this part of the swamp.
                </p>
              </div>
            </div>
            <Textarea
              placeholder="What small boardwalk could you build to connect these ideas? What's a tiny next step?"
              className="min-h-[150px]"
              value={notes.nextSteps}
              onChange={(e) => handleInputChange("nextSteps", e.target.value)}
            />
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={prevStep} disabled={step === 1}>
          Previous
        </Button>
        <div className="text-sm text-muted-foreground">Step {step} of 3</div>
        <Button onClick={nextStep} disabled={step === 3}>
          Next
        </Button>
      </CardFooter>
    </Card>
  )
}
