export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; title: string; text: string };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  date: string; // e.g. "May 2026"
  readTime: number; // minutes
  image: string; // path under /public
  imageAlt: string;
  body: ArticleBlock[];
  related?: string[]; // slugs
};

export const ARTICLE_CATEGORIES = [
  "About Chiropractic Care",
  "Common Conditions Treated",
  "Health & Wellness",
  "Therapies & Techniques",
  "Newsletter Library",
  "Wellness4Kids",
] as const;

export type ArticleCategory = (typeof ARTICLE_CATEGORIES)[number];

const IMG = {
  back: "/images/articles/man-with-back-pain-sits-on-tiny-fence--714830.png",
  asianBack: "/images/articles/asian-woman-struggles-with-back-pain--713054.png",
  neck: "/images/articles/woman-suffers-from-chronic-neck-pain--714856.png",
  shoulder: "/images/articles/woman-has-shoulder-pain--718290.png",
  knee: "/images/articles/running-man-clutches-his-painful-knee--716941.png",
  ankle: "/images/articles/woman-holds-her-painful-ankle--716960.png",
  exercises: "/images/articles/woman-does-her-therapeutic-exercises--718292.png",
  stretch: "/images/articles/woman-stretches-on-a-track-field--720902.png",
  active: "/images/articles/woman-wearing-sneakers-stands-on-boulder--713132.png",
  couple: "/images/articles/old-couple-being-happy-together--720365.png",
};

export const ARTICLES: Article[] = [
  {
    slug: "morning-routine-affects-your-spine",
    title: "How Your Morning Routine Affects Your Spine",
    excerpt:
      "Could your morning routine be causing your back pain? The first 30 minutes of your day put more load on your spine than almost any other window.",
    category: "Health & Wellness",
    date: "May 2026",
    readTime: 7,
    image: IMG.back,
    imageAlt: "Man with back pain sitting on a low fence",
    body: [
      {
        type: "p",
        text: "Most people blame back pain on their workday, their workouts, or their mattress. The truth is, the first thirty minutes after you wake up are some of the most mechanically demanding minutes your spine experiences all day. After eight hours of stillness, your discs are saturated with fluid, your joints are stiff, and your stabilizing muscles are essentially offline. How you move during that window sets the tone for every other movement that follows.",
      },
      { type: "h2", text: "Why your spine is most vulnerable in the morning" },
      {
        type: "p",
        text: "Your intervertebral discs work like sponges. Overnight they absorb water and become slightly taller and more pressurized. That's why you're measurably taller in the morning than at night. The downside is those fluid-filled discs are also more sensitive to bending, twisting, and shearing forces. A movement that feels routine at noon, like reaching forward to tie your shoes, can be dramatically more provocative at 6 a.m.",
      },
      { type: "h2", text: "The five morning habits we see cause the most pain" },
      {
        type: "list",
        items: [
          "Sitting up straight from a flat-back position instead of rolling onto your side first.",
          "Bending forward to brush teeth or wash your face with locked knees.",
          "Sliding into car seats with twisted hips.",
          "Drinking very little water before coffee — disc rehydration depends on plain water.",
          "Skipping any kind of movement and going straight from bed to a desk chair.",
        ],
      },
      {
        type: "callout",
        title: "Try this 90-second reset",
        text: "Before you stand up, pull your knees to your chest one at a time, then both together. Roll onto your side. Push up with your arms while letting your legs swing down. This single change reduces morning disc strain dramatically.",
      },
      { type: "h2", text: "Build a five-minute spine-friendly start" },
      {
        type: "p",
        text: "You don't need a yoga practice to protect your back. You need a short, repeatable sequence that gets blood into your stabilizers and gentle motion into your joints before they're asked to perform. Cat-cow on hands and knees, a slow standing back extension against a wall, and a hip-hinge with one hand sliding down each thigh covers all three planes of motion in under five minutes.",
      },
      {
        type: "p",
        text: "If you've been waking up with stiffness or pain that lingers past breakfast, that's not normal — it's data. Bring it up at your next visit so we can address it before it becomes a chronic pattern.",
      },
    ],
    related: ["why-you-wake-up-stiff", "benefits-regular-chiropractic-adjustments"],
  },
  {
    slug: "why-you-wake-up-stiff",
    title: "Why You Wake Up Stiff and How to Fix It",
    excerpt:
      "Morning stiffness isn't just about getting older. It's a reliable signal that your tissues, hydration, or sleep position need adjustment.",
    category: "Common Conditions Treated",
    date: "May 2026",
    readTime: 6,
    image: IMG.neck,
    imageAlt: "Woman with chronic neck pain stretching her neck",
    body: [
      {
        type: "p",
        text: "Stiffness that fades within ten minutes of getting out of bed is typically benign. Stiffness that requires a hot shower, ibuprofen, or thirty minutes of stretching to resolve is your body asking for attention. Knowing the difference matters.",
      },
      { type: "h2", text: "The four most common drivers we screen for" },
      {
        type: "list",
        items: [
          "Sleeping position — stomach sleepers and pillow-stack sleepers see the most cervical complaints.",
          "Dehydration — connective tissue loses elasticity overnight when fluid intake is low.",
          "Inflammatory load — diet, stress, and unresolved injuries leave joints primed for stiffness.",
          "Underlying joint dysfunction — restricted segments stiffen up faster than healthy ones.",
        ],
      },
      { type: "h2", text: "How chiropractic helps" },
      {
        type: "p",
        text: "When a vertebral segment loses motion, the surrounding tissue thickens and the local muscles guard. Adjustments restore segmental motion, which lets the local tissue rehydrate and the muscles let go. Patients almost always report waking up looser within a few visits — not because adjustments are magic, but because we're addressing the actual mechanical reason the stiffness was there.",
      },
      {
        type: "callout",
        title: "Quick self-check",
        text: "Stand up first thing tomorrow and try to touch your shins. If you can't get within four inches without bouncing, your hamstrings and posterior chain are tight enough to be pulling on your low back through the night.",
      },
      { type: "h2", text: "Three changes that work for almost everyone" },
      {
        type: "p",
        text: "Drink 8 to 12 ounces of water before bed. Sleep on your side with a pillow between your knees, or on your back with a pillow under your knees. And do five minutes of slow, controlled movement before you check your phone in the morning. We can show you exactly which positions and stretches will help your case during your next visit.",
      },
    ],
    related: ["morning-routine-affects-your-spine", "benefits-regular-chiropractic-adjustments"],
  },
  {
    slug: "back-ready-for-summer",
    title: "Chiropractic Care Can Help Get Your Back Ready for Summer",
    excerpt:
      "Yard work, travel, golf, and beach days are where winter-deconditioned spines get hurt. Here's how to prep yours.",
    category: "About Chiropractic Care",
    date: "April 2026",
    readTime: 5,
    image: IMG.active,
    imageAlt: "Woman in sneakers standing on a boulder outdoors",
    body: [
      {
        type: "p",
        text: "Every spring our clinics see a predictable spike in low back, shoulder, and elbow injuries. The cause is rarely a single dramatic event — it's the cumulative effect of moving from a sedentary winter into a high-volume summer in the span of a weekend.",
      },
      { type: "h2", text: "Where most summer back injuries actually happen" },
      {
        type: "list",
        items: [
          "First yard cleanup of the season — repetitive bending and twisting.",
          "Loading and unloading vehicles for travel.",
          "Returning to golf, tennis, or pickleball without a ramp-up.",
          "Carrying kids and gear at the beach.",
          "Long drives without movement breaks.",
        ],
      },
      { type: "h2", text: "What pre-season chiropractic actually does" },
      {
        type: "p",
        text: "We assess where your spine and pelvis are restricted, restore motion in the segments that are stuck, and prescribe two or three specific exercises that address your individual asymmetries. Patients often describe it as preventive maintenance — exactly the kind of thing you'd want on your car before a long trip.",
      },
      {
        type: "callout",
        title: "The 10% rule",
        text: "Whatever activity you're returning to, increase volume by no more than 10% per week. Your tendons and ligaments adapt slower than your muscles, and that gap is where injuries hide.",
      },
    ],
    related: ["microtrauma-before-injury", "benefits-regular-chiropractic-adjustments"],
  },
  {
    slug: "microtrauma-before-injury",
    title: "How Your Chiropractor Addresses Microtrauma Before Injury",
    excerpt:
      "Most pain isn't caused by one big event. It's the accumulation of small, repeated stresses your body never got to recover from.",
    category: "Common Conditions Treated",
    date: "April 2026",
    readTime: 6,
    image: IMG.shoulder,
    imageAlt: "Woman holding her painful shoulder",
    body: [
      {
        type: "p",
        text: "Microtrauma is the medical term for small tissue damage that falls below the threshold of pain. Picked up alone, it heals. Repeated daily without recovery — sitting in the same posture, swinging a golf club the same way, scrolling on your phone — it accumulates into something you do feel.",
      },
      { type: "h2", text: "How we identify the pattern early" },
      {
        type: "p",
        text: "During an exam we look for joints that have lost their normal motion, muscles that have started compensating, and tissue tone changes that hint at chronic load. These findings show up weeks or months before pain does. That's the window where care is fastest and cheapest.",
      },
      { type: "h2", text: "What treatment looks like at this stage" },
      {
        type: "list",
        items: [
          "Targeted adjustments to restore segmental motion.",
          "Soft tissue work on the overworking muscles (ART, IASTM, percussion).",
          "Two or three corrective exercises specific to your imbalance.",
          "A short ergonomic review of the activity that's loading you.",
        ],
      },
      {
        type: "callout",
        title: "Don't wait for pain",
        text: "If you've noticed something feels 'off' for more than two weeks — a clicking shoulder, a heavy leg, a tight hip — that's the time to come in. Pain is the last symptom to arrive and the first one we'd rather you never reach.",
      },
    ],
    related: ["disc-conditions-chiropractor", "back-ready-for-summer"],
  },
  {
    slug: "chiropractic-care-stress-levels",
    title: "How Chiropractic Care May Improve Your Stress Levels",
    excerpt:
      "The link between spinal mechanics, the autonomic nervous system, and your felt sense of stress is more direct than most people realize.",
    category: "Health & Wellness",
    date: "March 2026",
    readTime: 7,
    image: IMG.exercises,
    imageAlt: "Woman doing therapeutic exercises on a mat",
    body: [
      {
        type: "p",
        text: "Stress is usually framed as a mental phenomenon, but it lives in your body. Tense traps, a clenched jaw, shallow breathing, a tight low back — these aren't side effects of stress, they are stress, and they create a feedback loop that keeps the nervous system in a guarded state.",
      },
      { type: "h2", text: "The autonomic nervous system, simplified" },
      {
        type: "p",
        text: "Your sympathetic nervous system handles 'go' (alert, fight, flight). Your parasympathetic system handles 'rest, digest, recover.' Modern life biases most adults toward sympathetic dominance. Adjustments to the cervical and upper thoracic spine can help shift that balance because so many of the regulatory pathways pass through that region.",
      },
      { type: "h2", text: "What our patients usually notice" },
      {
        type: "list",
        items: [
          "Easier, deeper breathing within minutes of an adjustment.",
          "Lower resting tension in the shoulders and jaw.",
          "Better sleep quality on the night of treatment.",
          "More resilience to a stressful day, not the absence of stress.",
        ],
      },
      {
        type: "quote",
        text: "I didn't realize how clenched I'd been until I felt what un-clenched actually feels like.",
        cite: "Patient feedback we hear constantly",
      },
      { type: "h2", text: "What you can do today" },
      {
        type: "p",
        text: "Try a four-second inhale, six-second exhale, repeated for two minutes. Lengthening the exhale is one of the fastest ways to nudge the nervous system toward parasympathetic. Pair it with a few thoracic extensions over a foam roller and you've given yourself a meaningful stress reset in under five minutes.",
      },
    ],
    related: ["benefits-regular-chiropractic-adjustments", "morning-routine-affects-your-spine"],
  },
  {
    slug: "disc-conditions-chiropractor",
    title: "What Disc Conditions Can a Chiropractor Help With?",
    excerpt:
      "Bulges, herniations, degeneration — most disc conditions respond well to conservative care. Here's what we treat and how.",
    category: "Common Conditions Treated",
    date: "March 2026",
    readTime: 8,
    image: IMG.asianBack,
    imageAlt: "Woman struggling with back pain",
    body: [
      {
        type: "p",
        text: "When patients hear 'disc problem,' they often picture surgery. The reality is that the vast majority of disc-related pain resolves with conservative care — chiropractic adjustments, decompression therapy, targeted exercise, and time. Surgery is the last 5% of the conversation, not the first.",
      },
      { type: "h2", text: "Conditions we routinely manage" },
      {
        type: "list",
        items: [
          "Disc bulges — outer fibers bulging without rupture.",
          "Disc herniations — inner nucleus material extruding through the outer wall.",
          "Degenerative disc disease — gradual height and hydration loss with age.",
          "Annular tears — small fissures in the disc wall.",
          "Sciatica from disc-related nerve root irritation.",
        ],
      },
      { type: "h2", text: "The treatment approach" },
      {
        type: "p",
        text: "Care typically blends gentle, specific adjustments above and below the affected segment, decompression therapy to reduce intradiscal pressure, neuromuscular retraining of the deep stabilizers, and progressive loading. We screen carefully for red flags and refer out when imaging or specialist input is warranted.",
      },
      {
        type: "callout",
        title: "Imaging isn't always the answer",
        text: "Studies show that a significant percentage of pain-free adults have disc abnormalities on MRI. The image describes the structure; your symptoms and exam describe the problem. We treat the patient, not the picture.",
      },
    ],
    related: ["microtrauma-before-injury", "decompression-therapy-explained"],
  },
  {
    slug: "benefits-regular-chiropractic-adjustments",
    title: "The Benefits of Regular Chiropractic Adjustments",
    excerpt:
      "Beyond pain relief, consistent care supports posture, mobility, sleep, and the resilience to handle the demands of daily life.",
    category: "About Chiropractic Care",
    date: "February 2026",
    readTime: 6,
    image: IMG.couple,
    imageAlt: "Older couple being happy together outdoors",
    body: [
      {
        type: "p",
        text: "Most people come in for pain. They stay, when they stay, because they notice everything else gets a little better too — they breathe deeper, sleep harder, move more freely, and bounce back from life faster. Regular chiropractic isn't about chasing symptoms; it's about keeping the system running well.",
      },
      { type: "h2", text: "What 'regular' actually means" },
      {
        type: "p",
        text: "There's no universal cadence. Some patients do well at four to six week check-ins; others come in monthly for the first few months and taper. We base the schedule on your exam findings, your goals, and how your body is responding — not on a generic plan.",
      },
      { type: "h2", text: "What you might notice" },
      {
        type: "list",
        items: [
          "More consistent posture throughout the day.",
          "Less stiffness in the morning and after long meetings.",
          "Easier recovery from workouts.",
          "Better sleep quality.",
          "Fewer headaches and tension flares.",
          "More confidence to stay active as you age.",
        ],
      },
    ],
    related: ["chiropractic-care-stress-levels", "chiropractic-across-all-ages"],
  },
  {
    slug: "chiropractic-across-all-ages",
    title: "The Benefits of Chiropractic Care Across All Ages",
    excerpt:
      "From newborns to active 80-year-olds, the technique changes but the principle stays the same: a body that moves well feels well.",
    category: "Wellness4Kids",
    date: "February 2026",
    readTime: 6,
    image: IMG.couple,
    imageAlt: "Older couple smiling together",
    body: [
      {
        type: "p",
        text: "One of the most common questions we get is whether chiropractic is safe across the lifespan. The answer is yes — when the technique is matched to the patient. The adjustment used on a six-week-old is nothing like the adjustment used on a college lacrosse player, and neither resembles what a 75-year-old with osteoporosis would receive.",
      },
      { type: "h2", text: "Through the lifespan" },
      { type: "h3", text: "Infants and toddlers" },
      {
        type: "p",
        text: "Birth — even a smooth one — places real mechanical demand on a baby's spine. Gentle techniques (we're talking the pressure you'd use to test a ripe tomato) can address feeding asymmetries, restricted neck rotation, and reflux contributors.",
      },
      { type: "h3", text: "Children and teens" },
      {
        type: "p",
        text: "Backpacks, devices, and sports load young spines hard. Care here is part adjustment, part posture coaching, part movement screen — catching issues before they become adult problems.",
      },
      { type: "h3", text: "Adults" },
      {
        type: "p",
        text: "The classic mix: desk work, parenting, weekend warrior injuries, and old injuries that never quite resolved. Care here is about restoring capacity and preventing the slow drift into chronic pain.",
      },
      { type: "h3", text: "Older adults" },
      {
        type: "p",
        text: "Mobility is independence. Low-force techniques, mobility-focused care, and gait support keep older patients doing the things they love. We're proud of the number of patients we see in their 70s and 80s who are more active than people decades younger.",
      },
    ],
    related: ["benefits-regular-chiropractic-adjustments", "pediatric-care-benefits"],
  },
  {
    slug: "chiropractic-and-physical-therapy",
    title: "Top Benefits of Combining Chiropractic Care and Physical Therapy",
    excerpt:
      "Chiropractic restores joint motion. Physical therapy builds the strength to keep it. Together, they finish the job.",
    category: "Therapies & Techniques",
    date: "January 2026",
    readTime: 7,
    image: IMG.exercises,
    imageAlt: "Woman doing rehab exercises",
    body: [
      {
        type: "p",
        text: "Chiropractic and physical therapy aren't competing approaches — they're complementary. Chiropractic addresses the mechanical restrictions in your joints. Physical therapy builds the strength, endurance, and motor control to maintain those gains. The combination consistently produces faster, more durable outcomes than either alone.",
      },
      { type: "h2", text: "Why the combination works" },
      {
        type: "list",
        items: [
          "Adjustments unlock motion that strength work then locks in.",
          "Soft tissue therapy reduces guarding so retraining can actually take.",
          "Targeted strength corrects the underlying loading pattern.",
          "Education turns short-term relief into long-term self-management.",
        ],
      },
      { type: "h2", text: "What an integrated session looks like at YHN" },
      {
        type: "p",
        text: "We commonly pair an adjustment with ART or IASTM, then layer in two or three corrective exercises. Patients leave with movement that feels different and a clear understanding of what to do between visits. Progress comes faster because nothing is left half-done.",
      },
    ],
    related: ["benefits-regular-chiropractic-adjustments", "decompression-therapy-explained"],
  },
  {
    slug: "decompression-therapy-explained",
    title: "Spinal Decompression Therapy, Explained",
    excerpt:
      "A non-surgical option for disc-related pain that creates negative pressure inside the disc, drawing herniated material back in.",
    category: "Therapies & Techniques",
    date: "January 2026",
    readTime: 6,
    image: IMG.back,
    imageAlt: "Person with back pain",
    body: [
      {
        type: "p",
        text: "Decompression therapy is a specialized form of motorized traction. The table is computer-controlled and applies and releases tension in cycles, creating intermittent negative pressure inside the targeted disc. That negative pressure encourages disc material to retract, nutrients to flow back in, and irritated nerves to settle.",
      },
      { type: "h2", text: "Who decompression helps most" },
      {
        type: "list",
        items: [
          "Disc herniations and bulges with associated leg or arm symptoms.",
          "Sciatica that hasn't responded to standard care.",
          "Degenerative disc disease with chronic stiffness.",
          "Facet joint pain from chronic compressive load.",
        ],
      },
      { type: "h2", text: "What a session feels like" },
      {
        type: "p",
        text: "You're fully clothed, lying down, comfortable. The pull is gentle and rhythmic — most patients find it deeply relaxing and many doze off. A typical course runs 12 to 20 sessions, paired with adjustments and progressive exercise.",
      },
      {
        type: "callout",
        title: "Not everyone is a candidate",
        text: "Recent fractures, severe osteoporosis, certain post-surgical patients, and a few specific conditions rule out decompression. We screen carefully during your initial visit.",
      },
    ],
    related: ["disc-conditions-chiropractor", "chiropractic-and-physical-therapy"],
  },
  {
    slug: "what-is-art-active-release",
    title: "What is ART? Active Release Technique, Explained",
    excerpt:
      "A hands-on soft tissue technique that breaks up adhesions in muscle, tendon, fascia, and nerve — with movement.",
    category: "Therapies & Techniques",
    date: "December 2025",
    readTime: 5,
    image: IMG.shoulder,
    imageAlt: "Woman with shoulder pain",
    body: [
      {
        type: "p",
        text: "ART (Active Release Technique) is one of the most precise soft-tissue tools in our toolkit. The provider applies tension to a specific muscle, tendon, or nerve while the patient moves the area through a defined range. The combination of focused pressure and active motion releases adhesions that traditional massage can't reach.",
      },
      { type: "h2", text: "Common conditions we treat with ART" },
      {
        type: "list",
        items: [
          "Carpal tunnel symptoms",
          "Plantar fasciitis",
          "Tennis and golfer's elbow",
          "Rotator cuff tendinopathy",
          "Hamstring and IT band tightness",
          "Sciatic nerve entrapment patterns",
        ],
      },
    ],
    related: ["iastm-explained", "chiropractic-and-physical-therapy"],
  },
  {
    slug: "iastm-explained",
    title: "What is IASTM? Instrument-Assisted Soft Tissue Mobilization",
    excerpt:
      "Specialized stainless-steel tools amplify your provider's hands and target chronic adhesions and scar tissue with precision.",
    category: "Therapies & Techniques",
    date: "December 2025",
    readTime: 5,
    image: IMG.knee,
    imageAlt: "Runner with knee pain",
    body: [
      {
        type: "p",
        text: "IASTM uses ergonomic stainless-steel instruments to detect and treat soft tissue restrictions. The tools allow the provider to feel changes in tissue that fingers can't perceive and to deliver focused mechanical force without fatiguing the hands. The result is faster, more specific work.",
      },
      { type: "h2", text: "What IASTM is good for" },
      {
        type: "list",
        items: [
          "Chronic tendinopathies that have stalled.",
          "Post-surgical scar tissue.",
          "IT band and shin splint patterns.",
          "Stubborn fascial restrictions.",
        ],
      },
      { type: "h2", text: "What to expect after a session" },
      {
        type: "p",
        text: "Mild redness or pinpoint bruising in the treated area is normal and resolves within a few days. We typically pair IASTM with corrective exercise the same visit so the freed-up tissue gets retrained immediately.",
      },
    ],
    related: ["what-is-art-active-release", "chiropractic-and-physical-therapy"],
  },
  {
    slug: "pediatric-care-benefits",
    title: "When Chiropractic Care Makes Sense for Kids",
    excerpt:
      "Backpacks, sports, screens, growth spurts — kids' spines deal with a lot. Here's how gentle pediatric care helps.",
    category: "Wellness4Kids",
    date: "November 2025",
    readTime: 6,
    image: IMG.exercises,
    imageAlt: "Child-sized rehab exercise demonstration",
    body: [
      {
        type: "p",
        text: "Pediatric chiropractic uses gentle, low-force techniques that look almost nothing like adult adjustments. The pressure used on an infant is the kind you'd use to test a ripe tomato. As kids grow, the technique grows with them, but it stays well below adult force levels until adolescence.",
      },
      { type: "h2", text: "Common reasons parents bring their kids in" },
      {
        type: "list",
        items: [
          "Sports injuries — soccer, gymnastics, hockey, lacrosse.",
          "Postural complaints from heavy backpacks and screen use.",
          "Growth-related stiffness.",
          "Recurrent headaches.",
          "General wellness check-ins for active families.",
        ],
      },
      {
        type: "callout",
        title: "Safety first, always",
        text: "Pediatric care should be delivered by a chiropractor with specific training and gentle technique. We'll always explain what we're doing, why, and answer every question you have.",
      },
    ],
    related: ["chiropractic-across-all-ages", "athletic-care-young-athletes"],
  },
  {
    slug: "athletic-care-young-athletes",
    title: "Caring for the Young Athlete",
    excerpt:
      "Year-round single-sport specialization, growing bones, and adult-level training volumes — young athletes need different care.",
    category: "Wellness4Kids",
    date: "November 2025",
    readTime: 6,
    image: IMG.knee,
    imageAlt: "Young runner with knee pain",
    body: [
      {
        type: "p",
        text: "The athletes we see today are training harder, earlier, and on more specialized schedules than any previous generation. That has produced a generation of teenagers with the chronic injury patterns we used to see in adults. The good news: these patterns respond beautifully to early, well-coached care.",
      },
      { type: "h2", text: "What we focus on with young athletes" },
      {
        type: "list",
        items: [
          "Restoring full mobility — most growth-related issues start as restriction.",
          "Building hip and core strength to protect the low back.",
          "Coaching landing mechanics and deceleration to lower ACL risk.",
          "Recovery education — sleep, hydration, fueling.",
          "A clear return-to-play protocol when injuries occur.",
        ],
      },
    ],
    related: ["pediatric-care-benefits", "chiropractic-and-physical-therapy"],
  },
  {
    slug: "headaches-chiropractic",
    title: "When Chiropractic Helps Your Headaches",
    excerpt:
      "Tension and cervicogenic headaches are among the most consistently treatable conditions in our practice.",
    category: "Common Conditions Treated",
    date: "October 2025",
    readTime: 7,
    image: IMG.neck,
    imageAlt: "Woman with neck pain",
    body: [
      {
        type: "p",
        text: "Not every headache is a chiropractic headache, but a meaningful percentage are. Cervicogenic headaches (originating from the neck) and tension headaches (driven by upper trap and suboccipital tightness) often resolve with care that addresses the underlying mechanics.",
      },
      { type: "h2", text: "How we approach it" },
      {
        type: "list",
        items: [
          "Careful exam to rule out red flags and confirm cervicogenic pattern.",
          "Specific upper cervical and upper thoracic adjustments.",
          "Soft tissue work on the suboccipitals and upper traps.",
          "Posture and ergonomic coaching for desk/screen workers.",
          "Sleep position and pillow recommendations.",
        ],
      },
      {
        type: "callout",
        title: "When to seek immediate care instead",
        text: "Sudden severe headache, headache with neurological changes, headache after head trauma, or headache with fever are reasons to skip our office and head to urgent care or the ER.",
      },
    ],
    related: ["chiropractic-care-stress-levels", "ergonomics-desk-workers"],
  },
  {
    slug: "ergonomics-desk-workers",
    title: "Desk Ergonomics That Actually Help Your Back",
    excerpt:
      "Most ergonomic advice is generic. Here's the short list that consistently changes outcomes for our desk-bound patients.",
    category: "Health & Wellness",
    date: "October 2025",
    readTime: 6,
    image: IMG.back,
    imageAlt: "Person with desk-related back pain",
    body: [
      {
        type: "p",
        text: "If you spend most of your day at a desk, your setup is doing more for or against your back than any single workout you'll do this week. The fix doesn't require an expensive chair — it requires a few specific adjustments to what you already have.",
      },
      { type: "h2", text: "The non-negotiables" },
      {
        type: "list",
        items: [
          "Top of the monitor at eye level — books or a monitor arm fix this fast.",
          "Elbows at roughly 90° with shoulders relaxed.",
          "Feet flat on the floor or a footrest — knees at 90°.",
          "Phone off the desk and out of arm's reach during deep work.",
          "Stand or change position every 30 minutes — set a timer if needed.",
        ],
      },
      { type: "h2", text: "The three movements that offset desk work" },
      {
        type: "p",
        text: "Wall-supported thoracic extensions, glute bridges, and a slow controlled standing back-bend, done two or three times a day, undo a remarkable amount of the postural drift desk work creates. Two minutes total. We'll show you the exact form during your visit.",
      },
    ],
    related: ["headaches-chiropractic", "morning-routine-affects-your-spine"],
  },
  {
    slug: "sciatica-explained",
    title: "Sciatica: What It Is and What Actually Helps",
    excerpt:
      "Sciatica is a symptom, not a diagnosis. Knowing the source determines the right treatment.",
    category: "Common Conditions Treated",
    date: "September 2025",
    readTime: 7,
    image: IMG.asianBack,
    imageAlt: "Woman holding her low back in pain",
    body: [
      {
        type: "p",
        text: "Sciatica describes pain, numbness, or tingling that travels down the back of the leg along the sciatic nerve. It's a symptom that can be caused by a disc herniation, piriformis muscle compression, joint dysfunction, or several other things. Effective treatment depends entirely on identifying which.",
      },
      { type: "h2", text: "Our diagnostic process" },
      {
        type: "p",
        text: "A careful neurological and orthopedic exam usually identifies the source. Imaging is reserved for cases that don't respond to conservative care or where red flags are present. The exam findings — not just the symptoms — drive the treatment plan.",
      },
      { type: "h2", text: "What care typically looks like" },
      {
        type: "list",
        items: [
          "Adjustments to the lumbar and SI region to restore motion.",
          "Decompression therapy when disc involvement is confirmed.",
          "Soft tissue work for piriformis or hamstring entrapment.",
          "Specific neural mobilization exercises.",
          "Progressive loading once symptoms are calming.",
        ],
      },
    ],
    related: ["disc-conditions-chiropractor", "decompression-therapy-explained"],
  },
  {
    slug: "running-injuries-prevention",
    title: "Why Runners Get Hurt — and How to Stay Healthy",
    excerpt:
      "Most running injuries aren't caused by running. They're caused by what runners aren't doing the rest of the week.",
    category: "Therapies & Techniques",
    date: "September 2025",
    readTime: 7,
    image: IMG.knee,
    imageAlt: "Runner clutching painful knee",
    body: [
      {
        type: "p",
        text: "Running is a single-plane, repetitive activity that demands strong stabilizers in all three planes. Runners who only run end up with the predictable injury list: IT band, knee, plantar, hip flexor, low back. The fix is rarely less running. It's usually different supporting work.",
      },
      { type: "h2", text: "The four supporting buckets" },
      {
        type: "list",
        items: [
          "Hip and glute strength — single-leg work, lateral chain.",
          "Calf and foot capacity — slow heavy raises, often missed.",
          "Hip mobility — front and back of the hip.",
          "Core that resists rotation, not just bends and crunches.",
        ],
      },
      { type: "h2", text: "When to come in" },
      {
        type: "p",
        text: "Pain that lasts more than a week, that changes your gait, or that gets worse mid-run is your signal. The earlier we look, the smaller the fix usually is.",
      },
    ],
    related: ["athletic-care-young-athletes", "ankle-sprain-recovery"],
  },
  {
    slug: "ankle-sprain-recovery",
    title: "How to Recover From an Ankle Sprain (the Right Way)",
    excerpt:
      "Most ankle sprains never fully rehab. That's why so many people sprain the same ankle over and over.",
    category: "Common Conditions Treated",
    date: "August 2025",
    readTime: 6,
    image: IMG.ankle,
    imageAlt: "Woman holding her painful ankle",
    body: [
      {
        type: "p",
        text: "The classic ankle sprain story: you roll it, ice it, walk on it within a couple of weeks, and call it done. The problem is that most ankle sprains tear or stretch ligaments that take months to remodel — and they leave behind a balance and proprioception deficit that nobody addresses.",
      },
      { type: "h2", text: "A complete recovery looks like this" },
      {
        type: "list",
        items: [
          "Acute care — protect, elevate, control swelling, restore range.",
          "Mobility work to recover full ankle dorsiflexion.",
          "Calf and foot strength — single-leg calf raises, controlled lowering.",
          "Balance and proprioception — single-leg standing, eyes closed progressions.",
          "Sport-specific reintegration before returning to play.",
        ],
      },
      {
        type: "callout",
        title: "Why it matters",
        text: "Patients with chronic ankle instability are at significantly higher risk of knee, hip, and low back issues over time. The ankle is the foundation; if it's loose, everything above it pays.",
      },
    ],
    related: ["running-injuries-prevention", "athletic-care-young-athletes"],
  },
  {
    slug: "shoulder-impingement",
    title: "Shoulder Impingement: What's Actually Going On",
    excerpt:
      "Pain when you reach overhead is rarely 'just a shoulder problem.' It's usually a thoracic spine, scapula, and shoulder problem.",
    category: "Common Conditions Treated",
    date: "August 2025",
    readTime: 7,
    image: IMG.shoulder,
    imageAlt: "Woman with shoulder impingement pain",
    body: [
      {
        type: "p",
        text: "Most overhead pain we see at YHN traces back to a stiff thoracic spine, a poorly controlled scapula, or both. Treating only the shoulder rarely solves it. Address the whole chain and the shoulder usually quiets down within weeks.",
      },
      { type: "h2", text: "How we work through it" },
      {
        type: "list",
        items: [
          "Thoracic adjustments to restore extension and rotation.",
          "Scapular control work — wall slides, prone Y-T-W's.",
          "Rotator cuff strength once the position is right.",
          "Soft tissue work on overactive upper traps and lats.",
        ],
      },
    ],
    related: ["what-is-art-active-release", "chiropractic-and-physical-therapy"],
  },
  {
    slug: "pregnancy-chiropractic",
    title: "Chiropractic Care During Pregnancy",
    excerpt:
      "From early back discomfort to round ligament pain to pelvic positioning for delivery — pregnancy-trained chiropractic helps.",
    category: "Health & Wellness",
    date: "July 2025",
    readTime: 6,
    image: IMG.couple,
    imageAlt: "Family wellness imagery",
    body: [
      {
        type: "p",
        text: "Pregnancy reshapes a body in months. Hormonal changes loosen ligaments. The growing belly shifts the center of mass forward. The pelvis and low back take on entirely new loads. All of this is normal — and almost all of it responds well to gentle, pregnancy-specific chiropractic.",
      },
      { type: "h2", text: "Common pregnancy complaints we help with" },
      {
        type: "list",
        items: [
          "Low back and SI joint discomfort.",
          "Round ligament pain.",
          "Pubic symphysis pain.",
          "Sciatica patterns from changing pelvic mechanics.",
          "Headaches.",
        ],
      },
      { type: "h2", text: "About the Webster Technique" },
      {
        type: "p",
        text: "Webster Technique is a specific chiropractic analysis and adjustment of the sacrum and pelvic ligaments. It's used to reduce intrauterine constraint and is associated with optimal fetal positioning for delivery. We are Webster-certified and use it routinely.",
      },
    ],
    related: ["chiropractic-across-all-ages", "pediatric-care-benefits"],
  },
  {
    slug: "nutrition-and-pain",
    title: "How Nutrition Affects Chronic Pain",
    excerpt:
      "Chronic pain has a chemistry. The foods you eat either feed inflammation or feed recovery — there isn't really a neutral.",
    category: "Health & Wellness",
    date: "July 2025",
    readTime: 7,
    image: IMG.stretch,
    imageAlt: "Active woman stretching",
    body: [
      {
        type: "p",
        text: "Inflammation is the body's repair signal. Acute inflammation is helpful. Chronic, low-grade, system-wide inflammation is the soil chronic pain grows in, and it's heavily influenced by what you eat. We've watched countless patients shave 30–50% off their baseline pain just by changing their nutritional inputs — without anything else changing.",
      },
      { type: "h2", text: "The short list that consistently helps" },
      {
        type: "list",
        items: [
          "Three palm-sized servings of protein per day.",
          "Two to three handfuls of colorful vegetables.",
          "Healthy fats — olive oil, avocado, fatty fish.",
          "Less ultra-processed food and seed oils.",
          "Adequate water — bodyweight in pounds, divided in half, in ounces.",
        ],
      },
      { type: "h2", text: "When to look deeper" },
      {
        type: "p",
        text: "If you've cleaned up your nutrition and pain or fatigue is still high, that's where our functional medicine programs come in — targeted lab work, gut and hormone analysis, and a structured plan. Most patients are surprised how much further they can get.",
      },
    ],
    related: ["chiropractic-care-stress-levels", "morning-routine-affects-your-spine"],
  },
  {
    slug: "sleep-and-back-pain",
    title: "Sleep, Mattresses, and Back Pain: What Actually Matters",
    excerpt:
      "There is no one perfect mattress. There is a perfect mattress for you — and it's probably not the one in the ad.",
    category: "Health & Wellness",
    date: "June 2025",
    readTime: 6,
    image: IMG.back,
    imageAlt: "Person with back discomfort",
    body: [
      {
        type: "p",
        text: "Patients ask us about mattresses constantly. The honest answer: mattresses matter, but not as much as the marketing claims. Sleep position, pillow setup, hydration, and stress are usually larger factors. A great mattress paired with a stomach-sleeping habit is still a recipe for neck pain.",
      },
      { type: "h2", text: "What actually moves the needle" },
      {
        type: "list",
        items: [
          "Sleep on your side or back, not your stomach.",
          "Pillow that keeps your neck in line with your spine — neither propped up nor sagging.",
          "Pillow between (side) or under (back) your knees.",
          "Mattress firm enough to support, soft enough to contour. Most adults do best on medium-firm.",
          "Replace mattresses every 7–10 years — older ones develop body impressions you don't see.",
        ],
      },
    ],
    related: ["why-you-wake-up-stiff", "morning-routine-affects-your-spine"],
  },
  {
    slug: "chiropractic-myths",
    title: "Five Common Chiropractic Myths, Busted",
    excerpt:
      "Once you start, you have to keep going forever. Adjustments are dangerous. The pop is bones cracking. None of these are true.",
    category: "About Chiropractic Care",
    date: "June 2025",
    readTime: 6,
    image: IMG.couple,
    imageAlt: "Confident older couple",
    body: [
      {
        type: "p",
        text: "Even in 2026, chiropractic is one of the most misunderstood healthcare professions. Most of the misconceptions come from movies and old myths that just won't die. Here are the five we hear most often, with the actual facts.",
      },
      { type: "h3", text: "Myth: Once you start, you have to keep going forever." },
      {
        type: "p",
        text: "False. Care frequency depends on your case. Many patients use chiropractic for an acute issue and then stop. Others choose ongoing maintenance because they like how it makes them feel. The choice is yours.",
      },
      { type: "h3", text: "Myth: Adjustments are dangerous." },
      {
        type: "p",
        text: "Chiropractic is one of the safest non-surgical treatment options available. Serious complications are extraordinarily rare and we screen carefully for any conditions that warrant a different approach.",
      },
      { type: "h3", text: "Myth: The popping sound is bones cracking." },
      {
        type: "p",
        text: "It's a release of gas (mostly nitrogen) from inside the joint capsule, similar to opening a soda. Nothing is breaking, and the sound itself is not the goal — restored motion is.",
      },
      { type: "h3", text: "Myth: Chiropractic is just for back pain." },
      {
        type: "p",
        text: "We treat necks, shoulders, hips, knees, ankles, headaches, and far more. Anywhere there's a joint, there's the potential for restricted motion that responds to care.",
      },
      { type: "h3", text: "Myth: Chiropractic isn't 'real' science." },
      {
        type: "p",
        text: "There's a robust and growing body of research supporting chiropractic for low back pain, neck pain, headaches, and more. Many major insurers, the U.S. military, and the VA all cover chiropractic care.",
      },
    ],
    related: ["benefits-regular-chiropractic-adjustments", "chiropractic-care-stress-levels"],
  },
  {
    slug: "what-to-expect-first-visit",
    title: "What to Expect on Your First Visit",
    excerpt:
      "Walk in nervous, walk out informed. Here's exactly how your first appointment at YHN goes.",
    category: "About Chiropractic Care",
    date: "May 2025",
    readTime: 5,
    image: IMG.exercises,
    imageAlt: "Patient consultation imagery",
    body: [
      {
        type: "p",
        text: "First visits set the tone for everything after. Ours are designed to give you clarity — about what's going on, why, and what your options are. You should leave with a clear plan, even if that plan ends up being 'this isn't a chiropractic case, here's where to go.'",
      },
      { type: "h2", text: "The walk-through" },
      {
        type: "list",
        items: [
          "Brief paperwork — most of it submitted online before you arrive.",
          "A focused conversation about your history and goals.",
          "A thorough physical exam — orthopedic, neurological, postural.",
          "Imaging or referrals if indicated (we don't image just to image).",
          "A clear explanation of findings and a recommended plan.",
          "Treatment that day if appropriate, or scheduling if a multi-step workup is needed.",
        ],
      },
      {
        type: "callout",
        title: "What to wear",
        text: "Comfortable clothing you can move in. Athletic wear is great. We'll let you know if anything specific is needed before treatment.",
      },
    ],
    related: ["benefits-regular-chiropractic-adjustments", "chiropractic-myths"],
  },
];

export const ARTICLE_BY_SLUG: Record<string, Article> = ARTICLES.reduce(
  (acc, a) => {
    acc[a.slug] = a;
    return acc;
  },
  {} as Record<string, Article>,
);

export function getRelated(slug: string, limit = 3): Article[] {
  const a = ARTICLE_BY_SLUG[slug];
  if (!a) return [];
  const fromList = (a.related ?? [])
    .map((s) => ARTICLE_BY_SLUG[s])
    .filter((x): x is Article => Boolean(x));
  if (fromList.length >= limit) return fromList.slice(0, limit);
  const fillers = ARTICLES.filter(
    (x) => x.slug !== slug && !fromList.some((r) => r.slug === x.slug) && x.category === a.category,
  ).slice(0, limit - fromList.length);
  return [...fromList, ...fillers].slice(0, limit);
}
