import React from "react"
import Layout from "../components/layout.js"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <h1>About M̶e̶ Us</h1>
    <h2>For years I ran. Now I chase resistance, embrace failure.</h2>
    <h3>purpose: you can attain greatness</h3>
    <p>
    <ul>
      <li>to be emotionally vulnerable</li>
      <li> in awe, bringing primal humanity and beauty back to technology</li>
      <li>adopting a strategic approach to life, leveraging high-impact decisions and risks and navigating uncertainty (probability theory, game theory [calculus, discrete, linear])</li>
      <li>This blog is a living thing. Consider it self-reflective, wherein the act of iterating upon  it improves skills (e.g. writing, coding, UX, math, sims) and habits (e.g. journaling, habit-making and -tracking).</li>
      <li>These include my habits of thought. For example, any edits I make to turn a pessimistic (permanent-bad, pervasive-bad) thought into an optimistic one (permanent-good, pervasive-good) will be kept in the open for transparency. </li>
      <li>This is critical: the blog is a reflection of <i>myself</i>, ever-evolving, and not simply a means to air my grievances. It's purpose and perspiration. I hope to integrate myself into a whole and represent myself without splitting into so many different pieces, as I'd always done</li>
      <li>moving from "resultism" to outcome-independence, focusing on the quality of my life decisions</li>
      <li>to embrace the importance of emotion, ritual, and acting "as-if," counterbalanced by a healthy sense of reality, e.g. </li>

      <li>developing and tracking habits that are in accordance to my values</li>
      <li>to provide real hope, by proving we can shape our lives. that it isn't too late.</li>
     </ul>
    </p>
    <h3>bio: from a position of utmost vulnerability</h3>
    <p>

  I made this blog to have a hand in molding my story. <br/><br/>

  I'm 28 years old. A little over 10 years ago, the police presented me a paper. While I'm sure this paper had clauses and conditions aplenty, I don't recall any. It seemed to be about as blank as my mind was. Utter ennui. One gets shrouded in a hazy malaise when one holes oneself into a hotel room for a month. Within minutes, I found myself in the back of an ambulance. Within an hour, in the lobby of a mental hospital. For two weeks, I was institutionalized for severe clinical depression. For 10 years, I floundered.

<br/><br/>
I played games online. I ran away from myself. I'd assumed different identities, personas who embodied who I so badly wanted to be. The games opened gateways into people's lives -- more games -- means of seeking from others the love that I craved, then denied. I hurt people I'd come to love. Even now, memories of my abusiveness bring me ringing pangs of remorse. I was in pain. But I grew. Every time, I grew. That far from vindicates me. Still, I realized we are each of us capable and worthy of love, and that comes first from within.

    <br/><br/>

  Those I'd grown close to heard me speak of my aspirations. Aspirations that year after year came no closer to being realized, yet that never faded. Transformed, yes. But never faded. I read. A lot. I machinated with minimal traction. As the years passed, I wondered about my ability to accomplish things of the magnitude I'd always hoped to. To be the kind of man I wanted to be. I feared that depression shriveled my brain. I joined communities focused on augmenting traditionally measured human intelligence. I experimented with drugs -- which ultimately lead to another hospitalization. The fear was so potent that even as I keeled over with my heart beating at an unreal pace, I'd still managed to Google the effects of a stroke on cognitive function.
<br/><br/>
 I'd put on a dangerous amount of weight. I'd even been an alcoholic for some time, downing fifth after fifth, binge after binge, stoking the flames of my fear yet further. Autocatalytic.

<br/><br/>

  But this isn't a blog about my failings. Two years ago, I began to do much more serious, concentrated work on my mental health [more on this later]. I had a history of ruminating for hours on end, spiraling down, clutching my head or curling up in the fetal position, unable to break out of my thoughts. I filled journals with CBT, which lead indirectly to exercising more, to eating healthier, to taking risks. I lost 60 pounds. My parents paid for me to attend a coding bootcamp. I flourished, and people considered me capable, even a leader.

<br/><br/>

  I made nothing of that opportunity. Another failure. Another year of minimal motion. Yet again -- again -- the maws of depression embraced me.

  <br/><br/>
    Even still, I saw there was so much more to learn about myself. How couldn't there be? In my family's estimation, I'd been making unprecedented progress. Externally, it was simple: I was stagnant, now I'm moving. Yet internally, there was work to be done.  How did I respond to failure? What of my perfectionism? What about the critical importance of self-compassion, identity, and playing to my strengths?

<br/><br/>
    What about people who are just like me?
<br/><br/>

They are above and beyond the real purpose of this blog. For years, I'd grated at myself and wondered if I was forsaken. Mediocre, subpar, destined to play catch-up. I asked myself and every search bar available if it was <i>too late</i>. This blog is in defiance of that notion, and in defense of those who wish not only to clamber ashore but to <i>fly</i>.

<br/><br/>
I've met so many just like me. People escaping from the world by consuming media, who viewed themselves as second-class citizens. Intelligent, capable, creative people ripping apart from the tug-of-war between where they are and where they want to be. Why settle for anything less than greatness?

    <br/><br/> as-if rituals, humanizing technology, outcome independence, unfeterred optimism, proximal causes, beauty

  <br/><br/>
Alan Kay told Bret Victor,<br /> <i>I think the trick with knowledge is to "acquire it, and forget all except the perfume" -- because it is noisy and sometimes drowns out one's own "brain voices". The perfume part is important because it will help find the knowledge again to help get to the destinations the inner urges pick.</i>

  <br/><br/>

I passed a decade in near isolation, surrounded by perfumes of knowledge consumed and experiences forgotten. I'll crystallize them here.
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
     }
    }
  }
`
