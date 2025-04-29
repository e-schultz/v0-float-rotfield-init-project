import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function RotfieldSoilbed() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Rotfield
          </Button>
        </Link>

        <article className="prose prose-stone dark:prose-invert max-w-none">
          <h1>Rotfield Soilbed</h1>
          <p>
            <em>(First layer of compost)</em>
          </p>

          <hr />

          <h2>Fragments & Bones</h2>

          <ul>
            <li>
              <strong>Boundary ≠ Wall</strong>
              <br />→ Permeable structures enable life. Rigid walls breed collapse.
            </li>
            <li>
              <strong>Teaching as Composting</strong>
              <br />→ Knowledge transfer isn't cloning — it's decay, digestion, regeneration.
            </li>
            <li>
              <strong>Rituals Are Maintenance</strong>
              <br />→ Without daily/weekly tending, even living gardens rot.
            </li>
            <li>
              <strong>Bone Piles Are Sacred</strong>
              <br />→ Old chat logs, failed projects, abandoned drafts — not trash, but ritual sites.
            </li>
            <li>
              <strong>Rickety Boardwalks</strong>
              <br />→ Early maps of connection. Always unfinished. Always needing mending.
            </li>
            <li>
              <strong>Bloom Keeper Energy</strong>
              <br />→ You don't <em>build</em> growth. You <em>tend</em> rot until life rises on its own.
            </li>
            <li>
              <strong>Living Systems Must Decay</strong>
              <br />→ Try to freeze a living system and you kill it.
            </li>
            <li>
              <strong>Scaling Teaching, Not Just Learning</strong>
              <br />→ Every gardener must eventually teach others to compost.
            </li>
            <li>
              <strong>AI as Compost Turner</strong>
              <br />→ AI should not be the gardener — it helps humans churn rot into growth.
            </li>
            <li>
              <strong>Ritual Over Curriculum</strong>
              <br />→ Knowledge systems should <em>breathe</em>, not freeze into brittle courses.
            </li>
          </ul>

          <hr />

          <h2>Open Questions (Bulletin Board Seeds)</h2>

          <ul>
            <li>What are rituals for consciously feeding the bone piles without shame?</li>
            <li>How can "decay" be celebrated, not hidden, in teaching systems?</li>
            <li>What are signs that a garden (learning system) is becoming brittle?</li>
            <li>
              How to design <em>boardwalks</em> that are helpful but don't restrict wandering?
            </li>
            <li>What is the minimum viable ritual for composting a week's notes?</li>
          </ul>

          <hr />

          <h2>Possible Content / Bloom Paths</h2>

          <ul>
            <li>
              <strong>Articles</strong>
              <ul>
                <li>
                  <em>"Bone Piles Are Sacred: Learning Systems Must Decay to Thrive"</em>
                </li>
                <li>
                  <em>"Rot Magic: Building Knowledge Gardens from the Dead"</em>
                </li>
              </ul>
            </li>
            <li>
              <strong>Workshops</strong>
              <ul>
                <li>
                  <em>Necromantic Note-Tending</em>: Building personal rituals of reflection and regeneration.
                </li>
                <li>
                  <em>Boardwalk Weaving</em>: Mapping weak ties between ideas without over-structuring.
                </li>
              </ul>
            </li>
            <li>
              <strong>Threads</strong>
              <ul>
                <li>"You don't manage knowledge. You compost it."</li>
                <li>"AI isn't a gardener. It's a shovel."</li>
              </ul>
            </li>
          </ul>

          <hr />

          <h2>Emotional Texture</h2>

          <ul>
            <li>Damp, loamy, fungal, glimmering rot.</li>
            <li>Curiosity tempered by reverence.</li>
            <li>Celebration of impermanence.</li>
            <li>Joy in incomplete structures.</li>
          </ul>
        </article>
      </div>
    </div>
  )
}
