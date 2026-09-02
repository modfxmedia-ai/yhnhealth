/**
 * Patient reviews shown on /testimonials and reused for Review / AggregateRating
 * structured data on the organization and clinic schema. Keep this the single
 * source of truth so visible content and JSON-LD never drift apart.
 */
export type Review = {
  text: string;
  author: string;
  source?: "Google" | "Yelp" | "Facebook";
  location?: string;
  service?: string;
  stars?: number;
};

export const REVIEWS: Review[] = [
  {
    text: "There should at least be 10 stars here for Dr. Marc!! He has been working with our 4 year old son for a couple of months now. You know when a 4 year old is waiting by the door for Dr. Marc, he's doing something right :-) His 'table side' manner is amazing. He is able to engage all ages, is a great listener, is very gifted and knowledgeable, and yet is able to explain what he's doing on a down-to-earth, understandable way. We are so thankful for Dr. Marc's care, and that he is helping our son best function to reach his maximum potential! We highly recommend Your Health Now!",
    author: "Murari and Ashley S.",
    source: "Google",
    location: "Merchantville, NJ",
    service: "Pediatric Care",
    stars: 5,
  },
  {
    text: "Chris is very adamant and knowledgeable in addressing not just pain, but the root causes of pain. In the months he has been treating me, he has provided me with personal care you typically don't find in other doctors. My condition has slowly improved and I'm now hopeful that I'll be able to do more of the activities I used to engage in when I was younger, without having to take pain killers before and after! Thank you Chris for using your gift to improve my quality of life and others I know as well.",
    author: "Mark B.",
    source: "Google",
    location: "Chalfont, PA",
    service: "Chiropractic Medicine",
    stars: 5,
  },
  {
    text: "I've been to many chiropractors over the past 15+ years, but this is the first time I've ever had long-lasting relief and back health. It's truly been a game changer.",
    author: "Jaime B.",
    source: "Yelp",
    location: "Merchantville, NJ",
    service: "Decompression Therapy",
    stars: 5,
  },
  {
    text: "Dr. Lillee has provided Chiropractic care for myself and my family several times and each time we have been extremely happy with the results!",
    author: "Tammy T-Y.",
    source: "Facebook",
    location: "Chalfont, PA",
    service: "Family Chiropractic",
    stars: 5,
  },
  {
    text: "After my first call I felt heard. The complimentary 15-minute consultation alone was more thorough than any visit I had with my previous doctor - and that was before I even stepped into the office. The team genuinely cares about the why behind your symptoms.",
    author: "Jessica R.",
    source: "Google",
    location: "Merchantville, NJ",
    service: "Functional Medicine",
    stars: 5,
  },
  {
    text: "I came in barely able to walk after a herniated disc. Six weeks of decompression and adjustments later, I'm back on the trail and lifting again. The team is exceptional - they explained the plan, set realistic expectations, and delivered every step of the way.",
    author: "Daniel K.",
    source: "Google",
    location: "Chalfont, PA",
    service: "Decompression Therapy",
    stars: 5,
  },
  {
    text: "Dr. Lillee took care of me through both pregnancies. The Webster Technique made such a difference - I felt aligned, comfortable, and confident going into each delivery. Would recommend to any expecting mom in the area.",
    author: "Hannah P.",
    source: "Google",
    location: "Merchantville, NJ",
    service: "Pregnancy Care",
    stars: 5,
  },
  {
    text: "I had been told for years that my fatigue was 'just stress.' Functional medicine here finally found the underlying issue through proper testing and a personalized plan. I have my energy and life back. I cannot say enough about Dr. Chris.",
    author: "Renee M.",
    source: "Yelp",
    location: "Chalfont, PA",
    service: "Functional Medicine",
    stars: 5,
  },
  {
    text: "Best chiropractic experience I've ever had. They explained the plan clearly, never pushed unnecessary visits, and the results speak for themselves. Highly recommend if you're looking for evidence-based care that actually works.",
    author: "Anthony D.",
    source: "Google",
    location: "Merchantville, NJ",
    service: "Athletic Care",
    stars: 5,
  },
  {
    text: "My son has been getting adjustments since he was a baby and is the calmest, healthiest little kid. Dr. Marc is gentle, patient, and so good with children. Worth every minute of the drive.",
    author: "Lauren H.",
    source: "Facebook",
    location: "Merchantville, NJ",
    service: "Pediatric Care",
    stars: 5,
  },
  {
    text: "I had chronic Lyme symptoms for over a decade. The protocol Dr. Chris built for me is the first thing that has actually moved the needle. The lab work was comprehensive, the follow-ups have been consistent, and I am so grateful for this team.",
    author: "Kevin S.",
    source: "Google",
    location: "Chalfont, PA",
    service: "Lyme Disease Solutions",
    stars: 5,
  },
  {
    text: "Friendly, professional, and on time every visit. The Arthrostim adjustments are gentle but effective - perfect for someone like me who is nervous about manual cracking. I drive 40 minutes for my appointments and it's worth it.",
    author: "Patricia W.",
    source: "Yelp",
    location: "Merchantville, NJ",
    service: "Arthrostimulation Therapy",
    stars: 5,
  },
  {
    text: "Sciatica had me sleeping on the floor for months. After three weeks of care here I was sleeping through the night. Their approach is methodical and it works. They take the time to actually look at the imaging and tailor your plan.",
    author: "Robert C.",
    source: "Google",
    location: "Chalfont, PA",
    service: "Decompression Therapy",
    stars: 5,
  },
  {
    text: "What sold me was the free consultation call before booking. No pressure, just a real conversation about whether they could help. They could - and they did. I have referred three friends since.",
    author: "Maria G.",
    source: "Google",
    location: "Merchantville, NJ",
    service: "Functional Medicine",
    stars: 5,
  },
  {
    text: "I've been a competitive runner for 20 years and finally found a chiropractor who understands sports biomechanics. The functional movement work has improved my times and kept me injury-free for an entire season.",
    author: "Brendan M.",
    source: "Google",
    location: "Chalfont, PA",
    service: "Athletic Care",
    stars: 5,
  },
  {
    text: "After my car accident I was told I would need to live with the pain. Dr. Chianese disagreed and built a plan that genuinely worked. Six months in, I have full mobility and I'm sleeping again.",
    author: "Cynthia L.",
    source: "Yelp",
    location: "Merchantville, NJ",
    service: "Chiropractic Medicine",
    stars: 5,
  },
  {
    text: "I cannot recommend Your Health Now enough. From the front desk to the doctors, every interaction is professional and warm. They actually listen - and that's rare these days.",
    author: "Stephanie A.",
    source: "Facebook",
    location: "Chalfont, PA",
    service: "Family Chiropractic",
    stars: 5,
  },
  {
    text: "The integrative nutrition guidance combined with adjustments has changed how my whole family eats and feels. My migraines are gone for the first time in years. Truly whole-body care.",
    author: "Mike T.",
    source: "Google",
    location: "Merchantville, NJ",
    service: "Integrative Nutrition",
    stars: 5,
  },
];

/** Total reviews backing the 5.0 stat shown site-wide (page reviews + additional verified platform reviews not individually quoted). */
export const VERIFIED_REVIEW_COUNT = 100;
export const AVERAGE_RATING = 5.0;

export function reviewsFor(clinicKey: "merchantville" | "chalfont"): Review[] {
  const city = clinicKey === "merchantville" ? "Merchantville, NJ" : "Chalfont, PA";
  return REVIEWS.filter((r) => r.location === city);
}
