export const facebookUrl = "https://www.facebook.com/profile.php?id=61585460704712";

export const company = {
  name: "Nook & Crevice Cleaning Ltd",
  short: "Nook & Crevice",
  tagline: "Spotless spaces, brighter days",
  phoneLabel: "Message us on Facebook",
  area: "Oldham, Chadderton, Manchester and Greater Manchester",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Our Services" },
  { href: "/why-us", label: "Why Us" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
] as const;

export type IconName =
  | "home"
  | "building"
  | "sparkle"
  | "key"
  | "spray"
  | "shield"
  | "leaf"
  | "heart"
  | "badge"
  | "diamond";

export type Service = {
  slug: string;
  title: string;
  nav: string;
  summary: string;
  image: string;
  imageAlt: string;
  icon: IconName;
  intro: string;
  includes: string[];
  suited: string[];
};

export const services: Service[] = [
  {
    slug: "home-cleaning",
    title: "Home Cleaning",
    nav: "Home cleaning",
    summary: "Regular, deep and one-off cleans to keep your home fresh and spotless.",
    image: "/images/home-cleaning.jpg",
    imageAlt: "Beige sofa with a blush cushion and a vase of pink roses in a sunlit living room",
    icon: "home",
    intro:
      "A calm, consistent clean for the home you actually live in. Weekly, fortnightly or whenever the week has got away from you.",
    includes: [
      "Kitchen surfaces, hob, sink and splashback",
      "Bathrooms, including taps, mirrors and floors",
      "Dusting of reachable surfaces, skirting and sills",
      "Vacuuming and mopping of hard floors",
      "Emptying bins and a light tidy as we go",
      "Bed changes when linen is left out for us",
    ],
    suited: ["Family homes", "Flats and apartments", "Busy households", "One-off refreshes"],
  },
  {
    slug: "commercial-cleaning",
    title: "Commercial Cleaning",
    nav: "Commercial cleaning",
    summary: "Clean, professional spaces for offices, shops and business premises.",
    image: "/images/commercial.jpg",
    imageAlt: "Bright open office with wooden desks, black chairs and plants",
    icon: "building",
    intro:
      "A workplace that looks cared for before anyone arrives. We work around opening hours for offices, shops and small business premises.",
    includes: [
      "Workstations, meeting spaces and reception",
      "Kitchen, washrooms and communal areas",
      "Floors vacuumed or mopped, bins emptied",
      "Glass, fingerprints and high-touch points",
      "After-hours or early morning visits",
      "A regular schedule you can rely on",
    ],
    suited: ["Offices", "Shops and salons", "Studios", "Small commercial units"],
  },
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    nav: "Deep cleaning",
    summary: "A thorough clean for a healthier, fresher environment.",
    image: "/images/deep-clean.jpg",
    imageAlt: "Gloved hands cleaning the glass door of a stainless steel oven",
    icon: "sparkle",
    intro:
      "For the build-up a regular clean is not meant to tackle. We slow down and work through the detail, room by room.",
    includes: [
      "Inside the oven, hob and extractor filters",
      "Descaling taps, shower screens and tiles",
      "Skirting, doors, switches and cupboard fronts",
      "Behind and under movable furniture",
      "Window tracks, sills and interior glass",
      "A top-to-bottom finish in kitchens and bathrooms",
    ],
    suited: ["Spring resets", "After guests", "Before a celebration", "Homes that need a proper restart"],
  },
  {
    slug: "end-of-tenancy-cleaning",
    title: "End of Tenancy Cleaning",
    nav: "End of tenancy",
    summary: "Move in or out with confidence.",
    image: "/images/tenancy.jpg",
    imageAlt: "Stacked cardboard moving boxes and a houseplant in a bright empty room",
    icon: "key",
    intro:
      "A careful move-out or move-in clean, aimed at the standard landlords and letting agents expect to see.",
    includes: [
      "Empty cupboards, drawers and wardrobes wiped",
      "Kitchen appliances, including the oven",
      "Bathrooms descaled and sanitised",
      "Floors, skirting and interior windows",
      "Marks on doors, switches and frames",
      "A final walk-through list you can share",
    ],
    suited: ["Tenants moving out", "Landlords between lets", "Move-in cleans", "Deposit handbacks"],
  },
  {
    slug: "specialist-cleaning",
    title: "Specialist Cleaning",
    nav: "Specialist cleaning",
    summary: "Kitchens, bathrooms, carpets, upholstery and more.",
    image: "/images/specialist.jpg",
    imageAlt: "Gloved hands polishing a chrome kitchen tap above a white sink",
    icon: "spray",
    intro:
      "Targeted work for the jobs that need more than a cloth and a quick wipe. Tell us the trouble spot and we will quote that visit on its own.",
    includes: [
      "Ovens, hobs and stainless steel",
      "Limescale-heavy bathrooms",
      "Carpet and upholstery refresh",
      "Interior glass and frames",
      "After-builders dust where the site is safe to clean",
      "One room, or a short list of problem areas",
    ],
    suited: ["Ovens and hobs", "Bathrooms", "Soft furnishings", "After light building work"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const trust = [
  {
    icon: "shield" as const,
    title: "Trusted & Insured",
    text: "Your property is in safe hands",
  },
  {
    icon: "leaf" as const,
    title: "Eco-Friendly Products",
    text: "Safe for your family & pets",
  },
  {
    icon: "sparkle" as const,
    title: "Attention to Detail",
    text: "We clean every nook & crevice",
  },
];

export const aboutPoints = [
  { icon: "heart" as const, title: "Reliable & Friendly Team", text: "The same careful standard, visit after visit." },
  { icon: "leaf" as const, title: "Eco-Friendly & Safe Products", text: "Effective on dirt, kinder on homes with children and pets." },
  { icon: "badge" as const, title: "High Standards, Every Time", text: "Checklists, not guesswork, so the details are not skipped." },
  { icon: "diamond" as const, title: "Flexible Cleaning Plans", text: "Weekly, fortnightly, monthly or a single visit." },
];

export const steps = [
  {
    n: "01",
    title: "Tell us about the space",
    text: "Rooms, condition, and how often you would like us there. A few minutes on the quote form is enough.",
  },
  {
    n: "02",
    title: "Receive a clear quote",
    text: "No obligation and no vague hourly surprise. You see the price before anyone picks up a cloth.",
  },
  {
    n: "03",
    title: "We clean, you exhale",
    text: "We bring what we need, work through the list, and leave the home or workplace ready to use.",
  },
  {
    n: "04",
    title: "You check the details",
    text: "If something was missed, say so. We would rather put it right than leave it for the next visit.",
  },
];

export const areas = [
  { name: "Oldham", note: "Family homes, terraces and rentals." },
  { name: "Chadderton", note: "Regular house cleans and move-outs." },
  { name: "Manchester", note: "Flats, offices and one-off deep cleans." },
  { name: "Royton", note: "Weekly and fortnightly home visits." },
  { name: "Failsworth", note: "Homes and small business premises." },
  { name: "Middleton", note: "End of tenancy and deep cleans." },
  { name: "Rochdale", note: "Homes within a sensible drive." },
  { name: "Ashton-under-Lyne", note: "Domestic and light commercial." },
];

export type Review = {
  quote: string;
  name: string;
  area: string;
  service: string;
};

export const reviews: Review[] = [
  {
    quote:
      "Fantastic service! The team was punctual, friendly and left my home absolutely spotless. I've never seen it so clean!",
    name: "Ayesha K.",
    area: "Oldham",
    service: "Home cleaning",
  },
  {
    quote:
      "Very professional and reliable. They pay attention to every detail and always do an amazing job at our office.",
    name: "Mohammed R.",
    area: "Manchester",
    service: "Commercial cleaning",
  },
  {
    quote:
      "Excellent end of tenancy clean. Got my full deposit back. Highly recommend Nook & Crevice!",
    name: "Sarah L.",
    area: "Chadderton",
    service: "End of tenancy",
  },
  {
    quote:
      "Booked a deep clean before family stayed. The oven and bathroom were the best they have looked in years.",
    name: "Priya S.",
    area: "Royton",
    service: "Deep cleaning",
  },
  {
    quote:
      "They work around our shop hours and the place smells fresh when we open. Consistent, which is what we needed.",
    name: "James T.",
    area: "Failsworth",
    service: "Commercial cleaning",
  },
  {
    quote:
      "Kind, careful with the dog, and they actually move the small things to dust underneath. I noticed.",
    name: "Helen M.",
    area: "Middleton",
    service: "Home cleaning",
  },
];

export const faqs = [
  {
    q: "Do I need to be home?",
    a: "No. Plenty of clients leave a key or meet us the first time and then let us in on a schedule. We will agree access before the visit.",
  },
  {
    q: "Do you bring products and equipment?",
    a: "Yes. We arrive with what the clean needs, including products chosen to be effective and suitable around families and pets. If you prefer your own products, tell us on the form.",
  },
  {
    q: "How do quotes work?",
    a: "Tell us the service, the size of the place, the postcode and the condition. We reply with a clear price before any work is booked. Nothing is confirmed until you say yes.",
  },
  {
    q: "Which areas do you cover?",
    a: "Oldham, Chadderton, Manchester and the surrounding Greater Manchester towns, including Royton, Failsworth, Middleton, Rochdale and Ashton-under-Lyne. If you are nearby, ask — we will say honestly if the journey works.",
  },
  {
    q: "Can you clean around children and pets?",
    a: "Yes. We use products selected with homes like that in mind, and we will follow any notes you leave about rooms, animals or allergies.",
  },
  {
    q: "What if I am not happy with a clean?",
    a: "Tell us while the visit is fresh and we will come back to the points that were missed. The standard is the detail, not a rush to the door.",
  },
  {
    q: "Do you offer end of tenancy cleans?",
    a: "Yes. Move-out and move-in cleans cover the checklist landlords usually look at: appliances, bathrooms, cupboards, floors and interior glass.",
  },
  {
    q: "How do I get in touch?",
    a: "Send the quote form on this site, then message the Nook & Crevice Facebook page so the team can reply there. That page is the direct line.",
  },
];

export const frequencies = ["One-off", "Weekly", "Fortnightly", "Monthly"] as const;
export const properties = ["House", "Flat", "Office", "Shop or salon", "Other"] as const;
