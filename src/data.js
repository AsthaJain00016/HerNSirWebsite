export const BUSINESS = {
  name: "Her 'N' Sir",
  phone: '7535003636',
  whatsapp: 'https://api.whatsapp.com/send?phone=917535003636',
  address: 'HR Tower, near Ballupur Chowk, Ram Vihar, Ballupur, Dehradun, Uttarakhand 248001',
  mapsLink: 'https://maps.app.goo.gl/M8BjWLoxz1XJw4AU6',
  hours: '9:30 am to 8:30 pm',
  rating: 4.9,
  reviews: 553,
  email: 'hello@hernsir.in',
  instagram: 'https://instagram.com',
}

export const STATS = [
  { value: 5000, suffix: '+', label: 'Happy Clients' },
  { value: 4.9, suffix: '★', label: 'Google Rating', decimals: 1 },
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '+', label: 'Bridal Makeovers' },
]

export const SERVICES = [
  { title: 'Hair Cut & Styling', desc: 'Precision cuts tailored to your face, lifestyle & personality.', img: 'https://images.pexels.com/photos/3993454/pexels-photo-3993454.jpeg', icon: 'Scissors' },
  { title: 'Hair Spa & Treatment', desc: 'Deep nourishing rituals that revive dull, damaged hair.', img: 'https://images.pexels.com/photos/3993455/pexels-photo-3993455.jpeg', icon: 'Sparkles' },
  { title: 'Hair Coloring & Balayage', desc: 'Dimensional color, global tones & sun-kissed balayage.', img: 'https://images.pexels.com/photos/3993452/pexels-photo-3993452.jpeg', icon: 'Palette' },
  { title: 'Keratin Treatment', desc: 'Frizz-free, salon-smooth hair that lasts for months.', img: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg', icon: 'Droplet' },
  { title: 'Luxury Facials', desc: 'Glow-boosting facials with premium serums & massage.', img: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg', icon: 'Flower2' },
  { title: 'Skin Cleanup', desc: 'Detoxifying cleanups that reveal fresh, radiant skin.', img: 'https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg', icon: 'Windy' },
  { title: 'Bridal Makeup', desc: 'Signature bridal looks crafted to make you feel timeless.', img: 'https://images.pexels.com/photos/3997984/pexels-photo-3997984.jpeg', icon: 'Crown' },
  { title: 'Party Makeup', desc: 'Camera-ready glam for parties, receptions & events.', img: 'https://images.pexels.com/photos/3997992/pexels-photo-3997992.jpeg', icon: 'PartyPopper' },
  { title: 'Waxing & Threading', desc: 'Smooth, precise hair removal with gentle premium wax.', img: 'https://images.pexels.com/photos/3997987/pexels-photo-3997987.jpeg', icon: 'Wind' },
  { title: 'Manicure & Pedicure', desc: 'Spa-grade nail care that pampers hands & feet.', img: 'https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg', icon: 'Hand' },
  { title: 'Nail Art & Extensions', desc: 'Acrylic nails, gel art & bespoke nail couture.', img: 'https://images.pexels.com/photos/3997390/pexels-photo-3997390.jpeg', icon: 'Brush' },
  { title: 'Skin Treatment', desc: 'Acne, pigmentation & glow treatments by experts.', img: 'https://images.pexels.com/photos/3997985/pexels-photo-3997985.jpeg', icon: 'Heart' },
]

export const WHY_CHOOSE = [
  { title: 'Certified Professionals', desc: 'Trained & certified stylists with years of mastery.', icon: 'BadgeCheck' },
  { title: 'Premium Products', desc: 'Only luxury, skin-safe, salon-grade products.', icon: 'Gem' },
  { title: 'Experienced Stylists', desc: 'A team trusted by 5000+ happy clients across Dehradun.', icon: 'Award' },
  { title: 'Hygienic Environment', desc: 'Sanitised tools, single-use kits & spotless stations.', icon: 'ShieldCheck' },
  { title: 'Affordable Packages', desc: 'Luxury experiences thoughtfully priced for everyone.', icon: 'Tag' },
  { title: 'Personalized Consultation', desc: 'Every service begins with a one-on-one style consult.', icon: 'HeartHandshake' },
]

export const PACKAGES = [
  {
    name: 'Bridal Package',
    price: '15,999',
    period: 'onwards',
    desc: 'The complete bridal couture experience for your big day.',
    features: ['Bridal makeup & hair', 'Pre-bridal skin prep', 'Mehendi-day look', 'Reception look', 'Saree/drape styling', 'Touch-up kit'],
    recommended: false,
    icon: 'Crown',
  },
  {
    name: 'Party Makeup',
    price: '2,499',
    period: 'per session',
    desc: 'Red-carpet glam for parties, cocktails & celebrations.',
    features: ['HD party makeup', 'Hair styling', 'False lashes', 'Dewy or matte finish', 'Highlight & contour', 'On-location option'],
    recommended: true,
    icon: 'PartyPopper',
  },
  {
    name: 'Hair Care Package',
    price: '3,999',
    period: 'per session',
    desc: 'A restorative ritual for healthy, luminous hair.',
    features: ['Keratin / smoothening', 'Hair spa ritual', 'Scalp detox', 'Hair cut & style', 'Color refresh', 'Home-care plan'],
    recommended: false,
    icon: 'Sparkles',
  },
  {
    name: 'Monthly Membership',
    price: '6,999',
    period: 'per month',
    desc: 'Your everyday glow-up, on a recurring luxury plan.',
    features: ['2 facials / month', '1 hair spa', 'Mani + pedi', 'Unlimited threading', '10% off all services', 'Priority booking'],
    recommended: false,
    icon: 'Star',
  },
]

export const GALLERY = [
  { src: 'https://images.pexels.com/photos/3993454/pexels-photo-3993454.jpeg', cat: 'Hair', span: 'row-span-2' },
  { src: 'https://images.pexels.com/photos/3997984/pexels-photo-3997984.jpeg', cat: 'Bridal', span: '' },
  { src: 'https://images.pexels.com/photos/3997992/pexels-photo-3997992.jpeg', cat: 'Makeup', span: '' },
  { src: 'https://images.pexels.com/photos/3997390/pexels-photo-3997390.jpeg', cat: 'Nails', span: 'row-span-2' },
  { src: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg', cat: 'Skin Care', span: '' },
  { src: 'https://images.pexels.com/photos/3993452/pexels-photo-3993452.jpeg', cat: 'Hair', span: '' },
  { src: 'https://images.pexels.com/photos/3997985/pexels-photo-3997985.jpeg', cat: 'Skin Care', span: '' },
  { src: 'https://images.pexels.com/photos/3997987/pexels-photo-3997987.jpeg', cat: 'Makeup', span: '' },
  { src: 'https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg', cat: 'Nails', span: '' },
  { src: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg', cat: 'Hair', span: 'row-span-2' },
  { src: 'https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg', cat: 'Skin Care', span: '' },
  { src: 'https://images.pexels.com/photos/3993455/pexels-photo-3993455.jpeg', cat: 'Hair', span: '' },
]

export const TESTIMONIALS = [
  {
    name: 'Naira',
    meta: '3 reviews · 17 photos · 3 months ago',
    rating: 5,
    text: "Had a really great experience at this salon! The staff was polite and professional, and they made sure I was comfortable throughout. The service was neat and exactly how I wanted it — you can tell they pay attention to detail. The place was clean, well-maintained, and had a nice, relaxing vibe. Definitely coming back again. Highly recommend!",
    img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
  },
  {
    name: 'Pragati Arya',
    meta: '11 reviews · 7 months ago',
    rating: 5,
    text: "I always have a great experience in Her 'N' Sir salon. Rehana is very professional at her work. The service is excellent every time. The team makes you feel pampered and the results are always better than expected. My go-to salon in Dehradun without a doubt.",
    img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
  },
  {
    name: 'Aanya Verma',
    meta: 'Verified client · 2 months ago',
    rating: 5,
    text: "Got my bridal makeup done here and I felt like a princess. The team understood exactly what I wanted and the look lasted through tears, dances and endless photos. Worth every rupee. Thank you Her 'N' Sir for making my day unforgettable.",
    img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
  },
  {
    name: 'Riya Sharma',
    meta: 'Verified client · 1 month ago',
    rating: 5,
    text: "The keratin treatment transformed my frizzy hair completely. Smooth, shiny and manageable for the first time in years. The ambience is luxurious and the staff genuinely cares. Easily the best salon experience I've had in Dehradun.",
    img: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg',
  },
]

export const TEAM = [
  { name: 'Rehana', role: 'Senior Bridal Artist', exp: '12+ yrs', spec: 'Bridal Makeup & Hair', img: 'https://images.pexels.com/photos/3992616/pexels-photo-3992616.jpeg' },
  { name: 'Afzhal', role: 'Master Stylist', exp: '10+ yrs', spec: 'Hair Color & Keratin', img: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg' },
  { name: 'Sana', role: 'Skin Specialist', exp: '8+ yrs', spec: 'Facials & Skin Care', img: 'https://images.pexels.com/photos/3992623/pexels-photo-3992623.jpeg' },
  { name: 'Meera', role: 'Nail Artist', exp: '6+ yrs', spec: 'Nail Art & Extensions', img: 'https://images.pexels.com/photos/3992652/pexels-photo-3992652.jpeg' },
]

export const FAQS = [
  { q: 'Do I need to book an appointment in advance?', a: "Yes, we recommend booking at least 2–3 days in advance, especially for bridal services and weekends. You can book via the form on this page, call us directly, or message us on WhatsApp." },
  { q: 'Do you offer home / on-location bridal services?', a: 'Absolutely. Our bridal team travels across Dehradun and nearby regions for weddings and events. On-location charges depend on distance and the number of looks. Mention this while booking.' },
  { q: 'Which products do you use?', a: 'We use only premium, salon-grade, skin-safe brands — including MAC, Kryolan, Schwarzkopf, L\'Oréal Professional and O3+. Product safety and hygiene are non-negotiable for us.' },
  { q: 'Are your tools and stations sanitised?', a: 'Yes. All tools are sanitised between every client, single-use kits are used for threading and waxing, and stations are cleaned after each service.' },
  { q: 'Can I get a patch test before a facial or hair color?', a: 'We highly recommend patch tests for first-time color or advanced facial clients. It is complimentary and can be done 24 hours before your appointment.' },
  { q: 'Do you have membership or package discounts?', a: 'Yes — our Monthly Membership and curated packages offer significant savings. See the Packages section above, or contact us for a customised plan.' },
  { q: 'What are your payment options?', a: 'We accept cash, UPI, all major debit/credit cards and popular digital wallets. For bridal packages, a 50% advance confirms your date.' },
]

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why' },
  { label: 'Packages', href: '#packages' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Team', href: '#team' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]
