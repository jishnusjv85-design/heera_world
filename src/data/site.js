const m = (name) => `/media/${name}`

export const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Meet The Team', to: '/management' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Ammaveedu', to: '/ammaveedu' },
  { label: 'Contact Us', to: '/contact-us' },
  { label: 'Donations', to: '/donations' },
]

export const CONTACT = {
  headOffice: ['Nandini Milk Building, 1st Floor,', 'Othukkungal, Manoor, Ponnala P.O.,', '676528, Malappuram District, Kerala'],
  regionalOffice: 'Motherhood Home, Ulliyeri, Kannur, Koyilandy – Edathil Kunnathara (P.O.) 673620, Kozhikode District, Kerala',
  phones: ['73568 52891', '9495353773', '0496-2080739 (Landline)', '9072931936'],
  hours: ['Monday – Saturday', '9:00 AM – 6:00 PM'],
  facebook: 'https://www.facebook.com/share/p/1H47zMPxnC/',
  instagram: 'https://www.instagram.com/heera_worldfoundation',
  copyright: '© 2026 Heera World Foundation. All rights reserved. | Registered under NGO Darpan, Govt. of India',
  tagline: 'Building a more humane and equitable Kerala for all beings.',
}

export const SECTOR_MARQUEE = [
  'ANIMAL WELFARE',
  'EDUCATION & LITERACY',
  'HEALTH & FAMILY WELFARE',
  "WOMEN'S EMPOWERMENT",
  'RURAL DEVELOPMENT',
  'DISASTER MANAGEMENT',
  'VOCATIONAL TRAINING',
  'ENVIRONMENTAL PROTECTION',
]

export const DISTRICTS = [
  'Kasaragod', 'Kannur', 'Wayanad', 'Kozhikode', 'Malappuram', 'Palakkad', 'Thrissur',
  'Ernakulam', 'Idukki', 'Kottayam', 'Alappuzha', 'Pathanamthitta', 'Kollam', 'Thiruvananthapuram',
]

export const HERO_IMAGE = 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1800&q=85'

export const HOME = {
  whoWeAre: {
    eyebrow: 'WHO WE ARE',
    title: ['Building a Compassionate', 'Kerala, Together'],
    text: 'Heera World Foundation is committed to social welfare, human dignity and community service. Through Motherhood Home, located at Aanavaathil, Ulliyeri, Kerala, we aim to support elderly people who need care and protection while developing suitable accommodation for senior citizens and retired couples.',
    cards: [
      { title: 'Senior Citizen Welfare', text: 'Supporting elderly people who need care, protection, and assistance by promoting their dignity, security, and well-being. We aim to create a caring and supportive environment where senior citizens can feel safe, respected, and valued.' },
      { title: 'Health & Well-being', text: 'Promoting health awareness and helping senior citizens access appropriate medical support when needed. We aim to encourage healthy living, improve well-being, and support elderly people in receiving the care and assistance they deserve.' },
      { title: 'Community Service', text: 'Encouraging compassion, volunteer participation, and social responsibility through community welfare activities. We work to build meaningful partnerships with individuals and organizations to support senior citizens and create a more caring and inclusive society.' },
    ],
  },
  focus: {
    eyebrow: 'OUR FOCUS AREAS',
    title: 'Care & Compassion',
    text: 'Our commitment to senior citizen welfare, healthcare awareness, and community service — building a caring and dignified future for elderly people.',
    items: [
      { num: '01', title: 'Care for Elderly People', text: 'Supporting senior citizens who lack adequate care, protection, or a reliable support system.' },
      { num: '02', title: 'Senior Living Facilities', text: 'Developing suitable accommodation and care facilities for retired individuals and couples seeking a peaceful life.' },
      { num: '03', title: 'Health Awareness', text: 'Organizing health awareness programmes that promote healthy living and the well-being of senior citizens.' },
      { num: '04', title: 'Ayurveda Medical Camps', text: 'Conducting Ayurveda medical camps with relevant healthcare professionals and institutions to promote health awareness.' },
      { num: '05', title: 'Palliative Care Awareness', text: 'Raising awareness about palliative care and support for people living with serious or long-term illnesses and their families.' },
      { num: '06', title: 'Medical Care Assistance', text: 'Helping senior citizens access hospital treatment and identify appropriate healthcare support when required.' },
      { num: '07', title: 'Environmental Protection', text: 'Promoting environmental awareness, tree planting, and community participation to protect nature for future generations.' },
      { num: '08', title: 'Community Partnerships', text: 'Encouraging volunteer participation and collaboration with individuals, organizations, and socially responsible companies.' },
    ],
  },
  mission: {
    eyebrow: 'OUR MISSION',
    title: 'Creating a Safe & Supportive Home',
    lead: 'Dedicated to the care, protection, and dignity of senior citizens.',
    subtitle: 'Motherhood Home – A Place of Care and Dignity',
    paragraphs: [
      'Motherhood Home is a senior citizen welfare initiative of Heera World Foundation. We aim to support elderly people who need care and protection while developing suitable accommodation for retired individuals and couples seeking a peaceful and secure life.',
      'Our long-term vision is to establish our own premises and develop Motherhood Home into a comprehensive Senior Care Center.',
    ],
    points: [
      'Promoting dignity and security for senior citizens.',
      'Developing suitable living and care facilities.',
      'Supporting access to appropriate healthcare.',
      'Expanding senior citizen welfare services sustainably.',
    ],
    image: m('WhatsApp-Image-2026-09-11-at-11.58.32-AM.jpeg'),
  },
  futureVision: {
    eyebrow: 'OUR FUTURE VISION',
    title: 'Building a Comprehensive Senior Care Center',
    text: 'Motherhood Home currently operates in a rented building. Our long-term goal is to establish our own premises and develop the facilities needed to support more senior citizens.',
  },
  longTerm: {
    eyebrow: 'OUR LONG-TERM GOAL',
    title: 'A Better Future Through Care & Dignity',
    text: 'We aspire to develop Motherhood Home into a comprehensive Senior Care Center that can serve more elderly people and provide suitable support according to their needs.',
    kicker: 'COMPASSION • CARE • PROTECTION',
    prioritiesTitle: 'Our Development Priorities',
    priorities: [
      { num: '01', title: 'Permanent Building', text: 'Establishing a dedicated, permanent building for Motherhood Home.' },
      { num: '02', title: 'Senior Citizen Accommodation', text: 'Developing suitable accommodation for senior citizens.' },
      { num: '03', title: 'Essential Living Facilities', text: 'Improving essential facilities that support daily living.' },
      { num: '04', title: 'Health-Related Support', text: 'Developing facilities to support the health-related needs of senior citizens.' },
      { num: '05', title: 'Expanding Welfare Activities', text: 'Expanding senior citizen welfare activities in phases and sustainably.' },
    ],
    closing: 'With the support of individuals, charitable organizations, and corporate partners, we aim to build a sustainable future for senior citizen welfare.',
  },
  impact: {
    stat: '14',
    statLabel: 'KERALA DISTRICTS',
    eyebrow: 'OUR ACHIEVEMENTS',
    title: ['Creating Lasting Impact', 'Across Kerala'],
    text: 'From Kasaragod to Thiruvananthapuram, our programs touch lives in every corner of the state — building sustainable change one community at a time.',
    items: [
      'Welfare programs for women, children, elderly, and differently-abled',
      'Healthcare centers established in underserved rural areas',
      'Sustainable projects addressing hunger and environmental protection',
      'Self-help groups empowered for economic independence',
      'Stray animal rescue and rehabilitation across all districts',
      'Vocational training and skill development for marginalized youth',
    ],
  },
  coverage: {
    eyebrow: 'OPERATIONAL REACH',
    title: ['Present Across All 14 Districts', 'of Kerala'],
    text: 'Our extensive network ensures no community is left behind — with active operations spanning from the northern tip to the southern coast.',
  },
  join: {
    eyebrow: 'JOIN THE MISSION',
    title: ['Every Act of Compassion', 'Creates a Ripple of Hope'],
    text: 'Whether through donations, volunteering, or spreading awareness — your support fuels our mission to create a more humane and equitable Kerala for all beings.',
  },
}

export const ABOUT = {
  heroTitle: ['Building a Compassionate', 'Kerala, Together'],
  heroText: 'Heera World Foundation operates across all 14 districts of Kerala, implementing welfare programs for marginalized communities, rescuing stray animals, and creating sustainable pathways to dignity and independence.',
  story: {
    eyebrow: 'OUR STORY',
    title: 'A Comprehensive Welfare Initiative Across Kerala',
    paragraphs: [
      'Heera World Foundation is a registered NGO dedicated to comprehensive welfare across Kerala — from animal rescue to community empowerment, building a more compassionate world one initiative at a time.',
      'Our mission began with a simple belief: “Save a Dog, and You Save Human Lives.” This philosophy drives everything we do — rescuing stray animals, empowering communities, and building sustainable futures for the most vulnerable among us.',
      'From Kasaragod to Thiruvananthapuram, our programs touch lives in every corner of the state — building sustainable change one community at a time.',
    ],
    stats: [
      { value: '14', label: 'Districts Covered' },
      { value: '15+', label: 'Welfare Sectors' },
      { value: '1K+', label: 'Lives Impacted' },
      { value: '2026', label: 'Active Campaign' },
    ],
  },
  pillars: {
    eyebrow: 'WHAT WE DO',
    title: 'Our Core Pillars',
    text: 'A comprehensive welfare initiative addressing the interconnected challenges that vulnerable communities face every day.',
    items: [
      { title: 'Animal Rescue & Welfare', text: 'Converting vacant lands into safe shelters for stray animals, providing livelihood security, veterinary care, and strengthening the coexistence between humans and animals across Kerala.' },
      { title: 'Healthcare & Wellness', text: 'Establishing healthcare centers in underserved areas and conducting health awareness initiatives to ensure every community has access to quality medical care and preventive health programs.' },
      { title: 'Education & Empowerment', text: 'Launching sustainable projects addressing hunger, education, and environmental protection — empowering self-help groups and providing vocational training for economic independence.' },
    ],
  },
  sectors: {
    eyebrow: 'OUR FOCUS AREAS',
    title: 'Operational Sectors',
    text: 'A multi-sector approach to social welfare — addressing the interconnected challenges that vulnerable communities face every day.',
    items: [
      { num: '01', title: 'Disaster Management', text: 'Emergency response, relief coordination, and community resilience building.' },
      { num: '02', title: 'Education & Literacy', text: 'Access to quality education and literacy programs for underserved communities.' },
      { num: '03', title: 'Health & Family Welfare', text: 'Healthcare access, nutrition programs, and family welfare support systems.' },
      { num: '04', title: 'Women’s Empowerment', text: 'Self-help groups, skill development, and economic independence for women.' },
      { num: '05', title: 'Rural Development', text: 'Infrastructure, livelihood improvement, and poverty alleviation in rural Kerala.' },
      { num: '06', title: 'Animal Welfare', text: 'Stray animal rescue, shelter management, and human-animal coexistence programs.' },
      { num: '07', title: 'Vocational Training', text: 'Skill-building workshops and employment-linked training for youth and adults.' },
      { num: '08', title: 'Tribal Affairs', text: 'Supporting indigenous communities with rights advocacy and welfare programs.' },
    ],
  },
  achievements: {
    eyebrow: 'OUR ACHIEVEMENTS',
    title: 'Creating Lasting Impact Across Kerala',
    text: 'From Kasaragod to Thiruvananthapuram, our programs touch lives in every corner of the state.',
    items: [
      { title: 'Women & Children', text: 'Welfare programs for women, children, elderly, and differently-abled' },
      { title: 'Healthcare Access', text: 'Healthcare centers established in underserved rural areas' },
      { title: 'Sustainability', text: 'Sustainable projects addressing hunger and environmental protection' },
      { title: 'Self-Help Groups', text: 'Self-help groups empowered for economic independence' },
      { title: 'Animal Rescue', text: 'Stray animal rescue and rehabilitation across all districts' },
      { title: 'Skill Development', text: 'Vocational training and skill development for marginalized youth' },
    ],
  },
  quote: 'Compassion for all living beings is the true measure of a civilized society.',
  quoteBy: 'Foundation Motto',
  images: [
    'WhatsApp-Image-2026-03-30-at-4.11.23-PM.jpeg', 'WhatsApp-Image-2026-03-30-at-4.11.22-PM.jpeg',
    '1-1.jpeg', '2-1.jpeg', '3-1.jpeg', '4-1.jpeg', '5-1.jpeg', '6-1.jpeg', '7.jpeg', '8-1.jpeg',
    '9-1.jpeg', '10.jpeg', '11.jpeg', '12.jpeg', '13.jpeg', '14.jpeg', '15.jpeg', '16.jpeg', '17.jpeg',
  ].map(m),
}

export const MANAGEMENT = [
  { name: 'MOHAMED FASAL AMBALI', role: 'MANAGING DIRECTOR', image: m('managing-director.jpg') },
  { name: 'SHARMIDAS THIRUMANGALATH', role: 'DIRECTOR', image: m('Untitled-design-66.webp') },
  { name: 'MOHAMMED ISSUDHEEN VAKKAYIL', role: 'WORKING CHAIRMAN', image: m('Untitled-design-63.webp') },
  { name: 'VALAPPIL RAJESH KUMAR', role: 'DIRECTOR', image: m('text.webp') },
  { name: 'MOHANAN THANNIKUZHIYIL', role: 'DIRECTOR', image: m('Untitled-design-64.webp') },
  { name: 'DINESAN V P GURUDEV', role: 'PRESIDENT', image: m('Untitled-design-2026-08-28T112726.028.jpg') },
  { name: 'CHANDRANMANNATH', role: 'SECRETARY', image: m('Untitled-design-2026-08-28T112709.072.jpg') },
]

export const GALLERY = [
  'Untitled-design-2026-08-29T114123.601.jpg', 'Untitled-design-1-1.jpg', 'Untitled-design-2026-08-29T113721.857.jpg',
  'WhatsApp-Image-2026-03-28-at-10.34.59-AM-1.jpeg', 'WhatsApp-Image-2026-03-28-at-10.35.00-AM-2.jpeg',
  'WhatsApp-Image-2026-03-28-at-10.35.01-AM-1.jpeg', 'WhatsApp-Image-2026-03-28-at-10.35.01-AM-2.jpeg',
  'WhatsApp-Image-2026-03-28-at-10.35.02-AM-1.jpeg', 'WhatsApp-Image-2026-03-28-at-10.35.03-AM-2.jpeg',
  'WhatsApp-Image-2026-03-28-at-10.35.24-AM.jpeg',
  'WhatsApp-Image-2026-03-30-at-1.44.46-PM-1.jpeg', 'WhatsApp-Image-2026-03-30-at-1.44.46-PM-2.jpeg',
  'WhatsApp-Image-2026-03-30-at-1.44.47-PM.jpeg', 'WhatsApp-Image-2026-03-30-at-1.44.48-PM-2.jpeg',
  'WhatsApp-Image-2026-03-30-at-1.44.50-PM-3.jpeg', 'WhatsApp-Image-2026-03-30-at-1.44.52-PM-2.jpeg',
  'WhatsApp-Image-2026-03-30-at-1.44.53-PM-2.jpeg', 'WhatsApp-Image-2026-03-30-at-1.44.54-PM-1.jpeg',
  'WhatsApp-Image-2026-03-30-at-1.44.57-PM.jpeg',
  'WhatsApp-Image-2026-03-25-at-7.14.16-AM.jpeg', 'WhatsApp-Image-2026-03-25-at-7.14.17-AM-1.jpeg',
  'WhatsApp-Image-2026-03-25-at-7.14.17-AM-3.jpeg', 'WhatsApp-Image-2026-03-25-at-7.14.17-AM.jpeg',
  'WhatsApp-Image-2026-03-25-at-11.34.12-AM-2.jpeg', '21.jpeg',
].map(m)

export const AMMAVEEDU = {
  heroImage: m('Untitled-design-15.jpg'),
  title: 'A Home of Love, Care & Dignity',
  paragraphs: [
    'Heera World Foundation’s Mother Hood Home – Amma Veedu provides a safe and caring home for elderly mothers who have no one to depend on. We offer free accommodation, nutritious food, clothing, medical care, safety, and daily support, ensuring they live with love, dignity, and respect.',
    'To continue this service and support more mothers, we welcome donations, CSR funds, and support from kind-hearted individuals, organizations, and institutions. Even a small contribution can bring food to a mother’s table, care to her life, and hope for her tomorrow.',
  ],
  quote: '“A Helping Hand… A Shade of Hope for a Life.” ❤️',
  news: [
    { image: m('Untitled-design.jpg'), title: 'കരുതലിന്റെ കൈത്താങ്ങായി മദർഹുഡ് ഹോം', text: 'ആശ്രയം തേടിയെത്തിയ നാരായണിക്ക് ഹീര വേൾഡ് ഫൗണ്ടേഷന്റെ മദർഹുഡ് ഹോം കരുതലും സുരക്ഷയും നൽകി. ആവശ്യമായ നടപടികൾ സ്വീകരിച്ച് അവരെ അമ്മവീട്ടിൽ പ്രവേശിപ്പിക്കുകയും, ബന്ധപ്പെട്ട പഞ്ചായത്ത് പ്രതിനിധികളെയും പോലീസിനെയും വിവരമറിയിക്കുകയും ചെയ്തു. തുടർന്ന് വാർഡ് മെംബർ എത്തി ആവശ്യമായ സഹായങ്ങളും സഹകരണങ്ങളും ഉറപ്പുനൽകി.' },
    { image: m('Untitled-design-1.jpg'), title: 'ഹീര വേൾഡ് ഫൗണ്ടേഷന്റെ കൂട്ടായ്മ', text: 'എറണാകുളത്ത് ഹീര വേൾഡ് ഫൗണ്ടേഷൻ ചെയർമാൻ പവനൻ സാറുമായി നടത്തിയ കൂടിക്കാഴ്ചയിൽ ഡയറക്ടർ ടി. സി. മോഹൻകുമാറും അഡ്വൈസറി ബോർഡ് അംഗങ്ങളായ ചന്ദ്രൻ മന്നോത്ത്, ദിനേശൻ ഗുരുദേവ്, ഐ.ടി. വിഭാഗം അംഗം സനൽ വിശ്വനാഥ് എന്നിവരും പങ്കെടുത്തു. ഫൗണ്ടേഷന്റെ പ്രവർത്തനങ്ങളും ഭാവി പദ്ധതികളും സംബന്ധിച്ച് കൂടിക്കാഴ്ചയിൽ ചർച്ചകൾ നടന്നു.' },
    { image: m('two_women_848x1235_under_300kb.jpg'), title: 'കരുതലിന്റെ കരങ്ങളിലേക്ക്', text: 'ഹീര വേൾഡ് ഫൗണ്ടേഷന്റെ മദർഹുഡ് ഹോമിലേക്ക് പന്തലായനി സ്വദേശിയായ കമലയും സഹോദരിയും എത്തിച്ചേർന്നു. മദർഹുഡ് ഹോം ഇൻചാർജ് ബിജില ആവശ്യമായ നടപടിക്രമങ്ങൾ പൂർത്തിയാക്കി കമലയെ അമ്മവീട്ടിൽ പ്രവേശിപ്പിച്ചു. സുരക്ഷയും സ്നേഹവും നിറഞ്ഞ ഒരു പുതിയ ഇടം അവർക്കായി ഒരുക്കി.' },
    { image: m('Untitled-design-2.jpg'), title: 'അമ്മവീട്ടിൽ ഒരു പുതിയ വരവ്', text: 'കണ്ണൂർ ജില്ലയിലെ തില്ലങ്കേരിയിൽ നിന്നും കേരള സർവോദയ മണ്ഡലം സംസ്ഥാന പ്രസിഡന്റ് പവിത്രൻ തില്ലങ്കേരിയുടെ നിർദ്ദേശപ്രകാരം ഉണ്ണികൃഷ്ണൻ നായരും ഭാര്യ ശാന്തകുമാരിയും അമ്മവീട്ടിൽ താമസിക്കാനായി എത്തിച്ചേർന്നു. മദർഹുഡ് ഹോം ഇൻചാർജ് ബിജിലയും സൗമ്യയും ചേർന്ന് അവരെ സ്വീകരിക്കുകയും ആവശ്യമായ നടപടിക്രമങ്ങൾ പൂർത്തിയാക്കി അമ്മവീട്ടിൽ പ്രവേശനം നൽകുകയും ചെയ്തു.' },
    { image: m('Untitled-design-3.jpg'), title: 'സ്നേഹത്തിന്റെ തണലിലേക്ക്', text: 'ഹീര വേൾഡ് ഫൗണ്ടേഷൻ മദർഹുഡ് ഹോമിന്റെ ഉദ്ഘാടന ചടങ്ങിലെ മുഖ്യാതിഥിയായ കൊയിലാണ്ടി മുനിസിപ്പാലിറ്റി ചെയർമാൻ ബഹുമാന്യനായ യു. കെ. ചന്ദ്രന്റെ നിർദ്ദേശപ്രകാരം, പന്തലായനി സ്വദേശിയായ കമല കെ. വിയെ അമ്മവീട്ടിൽ താമസിപ്പിക്കുന്നതിനുള്ള സൗകര്യം ഒരുക്കി. അവരുടെ അനിയത്തി അമ്മവീട്ടിൽ എത്തിച്ച കമലയെ ഇൻചാർജ് ബിജില സ്വീകരിക്കുകയും ആവശ്യമായ നടപടികൾ പൂർത്തിയാക്കി പ്രവേശനം നൽകുകയും ചെയ്തു. സൗമ്യ, ദീപ എന്നിവരും ഈ സമയത്ത് സന്നിഹിതരായിരുന്നു.' },
    { image: m('Untitled-design-5.jpg'), title: 'അമ്മവീട്ടിനായി ഒരു സ്നേഹസമ്മാനം', text: 'ഹീര വേൾഡ് ഫൗണ്ടേഷൻ മദർഹുഡ് ഹോമിന്റെ ദൈനംദിന ആവശ്യങ്ങൾക്കായി ചന്ദ്രൻ മന്നോത്ത് ഒരു വാഹനം മദർഹുഡ് ഹോമിന് സമർപ്പിച്ചു. അതിഥിയായി എത്തിയ കീഴരിയൂർ ഗ്രാമപഞ്ചായത്ത് 9-ാം വാർഡ് മെംബർ റിഹാനത്ത് വാഹനത്തിന്റെ താക്കോൽ ഏറ്റുവാങ്ങി. മദർഹോം ഇൻചാർജ് ബിജിലയും പ്രസിഡന്റ് ദിനേശൻ ഗുരുദേവും ചടങ്ങിൽ സന്നിഹിതരായിരുന്നു.' },
    { image: m('Untitled-design-48.jpg'), title: 'പഴശ്ശിരാജ ട്രസ്റ്റ് ചെയർമാൻ ഡോ. പ്രമോദ് കുമാറിന് ആദരം', text: 'പഴശ്ശിരാജ ട്രസ് ചെയർമാൻ ഡോക്ടർ പ്രമോദ് കുമാറിനെ അമ്മവീട് പ്രസിഡണ്ട് ദിനേശൻ ഗുരുദേവ് ഷാൾ അണിയിച്ച് ആദരിക്കുന്നു' },
    { image: m('Untitled-design-49.jpg'), title: 'മുഖ്യാതിഥി യുകെ രാഘവൻ മാസ്റ്റർക്കൊപ്പം അമ്മവീട് പരിവാർ', text: 'പ്രമുഖ വ്യക്തിത്വവും മുഖ്യാതിഥിയുമായ യുകെ രാഘവൻ മാസ്റ്റർക്കൊപ്പം സ്നേഹവും ഐക്യവും പങ്കുവെച്ച് ഒത്തുചേർന്ന അമ്മവീട് പരിവാർ അംഗങ്ങൾ, സന്തോഷത്തിന്റെയും സൗഹൃദത്തിന്റെയും മനോഹര നിമിഷങ്ങൾ പങ്കിടുന്നു.' },
    { image: m('Untitled-design-50.jpg'), title: 'നാടിന്റെ ശുചിത്വത്തിനും ആരോഗ്യസംരക്ഷണത്തിനും കരുത്തായി നമ്മുടെ സ്വന്തം ഹരിതകർമ്മസേന', text: 'നമ്മുടെ സ്വന്തം ഹരിത കർമ്മ സേനാംഗങ്ങൾ സേന നമുക്ക് അതിർത്തിയിൽ ശത്രുക്കളിൽ നിന്നും രക്ഷ നൽകുമ്പോൾ ഹരിത കർമ്മ സേന നമുക്ക് സാംക്രമിക രോഗങ്ങളിൽ നിന്നും സംരക്ഷണം ഏകുന്നു' },
    { image: m('Untitled-design-51.jpg'), title: 'പപ്പൻ കണ്ണാട്ടിക്ക് ആദരവോടെ സ്നേഹാദരം', text: 'ചടങ്ങിനോടനുബന്ധിച്ച് അമ്മവീട് വൈസ് ചെയർമാൻ പപ്പൻ കണ്ണാട്ടിയെ ഷാൾ അണിയിച്ച് ആദരിക്കുന്നു. അദ്ദേഹത്തിന്റെ സാന്നിധ്യവും സംഭാവനകളും മാനിച്ച് ആദരവ് അർപ്പിച്ച ഈ നിമിഷം ചടങ്ങിന് കൂടുതൽ പ്രാധാന്യവും മനോഹാരിതയും പകരുന്നു.' },
    { image: m('Untitled-design-52.jpg'), title: 'പാലക്കാട്ടുനിന്നെത്തിയ അതിഥികൾക്കൊപ്പം അഡ്വൈസർ ബോർഡ് അംഗം രമ', text: 'പാലക്കാട്ടുനിന്ന് ചടങ്ങിൽ പങ്കെടുക്കാനെത്തിയ വിശിഷ്ടാതിഥികൾക്കൊപ്പം അമ്മവീടിന്റെ അഡ്വൈസർ ബോർഡ് അംഗം രമ സദസ്സിൽ. സൗഹൃദവും സ്നേഹവും പങ്കുവെച്ച് ഒത്തുചേർന്ന ഈ സംഗമം പരസ്പര ബന്ധങ്ങളും ഐക്യവും കൂടുതൽ ഊട്ടിയുറപ്പിക്കുന്ന മനോഹരമായ നിമിഷമായി മാറി.' },
    { image: m('Untitled-design-53.jpg'), title: 'അമ്മവീട് സെക്രട്ടറി ചന്ദ്രൻ മണ്ണോത്തിന്റെ ഹൃദ്യമായ സ്വാഗതപ്രസംഗം', text: 'ചടങ്ങിൽ പങ്കെടുത്ത വിശിഷ്ടാതിഥികളെയും സദസ്സിനെയും ഹൃദയപൂർവം സ്വാഗതം ചെയ്തുകൊണ്ട് അമ്മവീട് സെക്രട്ടറി ചന്ദ്രൻ മണ്ണോത്ത് സ്വാഗതപ്രസംഗം നിർവഹിക്കുന്നു. എല്ലാവരുടെയും സാന്നിധ്യത്തിന് നന്ദി അറിയിച്ച അദ്ദേഹം, അമ്മവീടിന്റെ പ്രവർത്തനങ്ങളുടെയും കൂട്ടായ്മയുടെയും പ്രാധാന്യം എടുത്തുപറഞ്ഞു.' },
    { image: m('Untitled-design-54.jpg'), title: 'പവിത്രൻ തില്ലങ്കേരിക്ക് അമ്മവീടിന്റെ ആദരവ്', text: 'അമ്മവീടിന്റെ ആദരസൂചകമായി പവിത്രൻ തില്ലങ്കേരിയെ സെക്രട്ടറി ചന്ദ്രൻ മണ്ണോത്ത് പൊന്നാട അണിയിച്ച് ആദരിക്കുന്നു. അദ്ദേഹത്തോടുള്ള സ്നേഹവും ബഹുമാനവും ആദരവും പ്രകടിപ്പിച്ച ഈ ചടങ്ങ് സംഗമത്തിലെ ഹൃദ്യമായ നിമിഷങ്ങളിലൊന്നായി മാറി.' },
    { image: m('Untitled-design-55.jpg'), title: 'മുഖ്യാതിഥി യുകെ രാഘവൻ മാസ്റ്റർക്കൊപ്പം അമ്മവീട് പ്രതിനിധികൾ', text: 'ചടങ്ങിന്റെ മുഖ്യാതിഥിയായ യുകെ രാഘവൻ മാസ്റ്റർക്കൊപ്പം അമ്മവീട് പ്രതിനിധികൾ ഒത്തുചേർന്ന മനോഹരമായ നിമിഷം. സ്നേഹവും സൗഹൃദവും പരസ്പര ബഹുമാനവും പങ്കുവെച്ച ഈ സംഗമം അമ്മവീട് കുടുംബത്തിന്റെ ഐക്യവും കൂട്ടായ്മയും വിളിച്ചോതുന്നു.' },
    { image: m('Untitled-design-56.jpg'), title: 'സദസ്സിനെ അഭിസംബോധന ചെയ്ത് പഴശ്ശിരാജ ട്രസ്റ്റ് ചെയർമാൻ ഡോ. പ്രമോദ് കുമാർ', text: 'ചടങ്ങിൽ സന്നിഹിതരായ വിശിഷ്ടാതിഥികളെയും സദസ്സിനെയും അഭിസംബോധന ചെയ്ത് സംസാരിക്കുന്ന പഴശ്ശിരാജ ട്രസ്റ്റ് ചെയർമാൻ ഡോ. പ്രമോദ് കുമാർ. തന്റെ പ്രസംഗത്തിലൂടെ അദ്ദേഹം ചടങ്ങിന്റെ പ്രാധാന്യവും കൂട്ടായ്മയുടെ മൂല്യങ്ങളും പങ്കുവെച്ചു.' },
    { image: m('Untitled-design-57.jpg'), title: 'അമ്മവീടിന് ഹരിതകർമ്മസേനയുടെ സ്നേഹോപഹാരം', text: 'പ്രസ്തുത ചടങ്ങിൽ ഹരിതകർമ്മസേനാംഗങ്ങൾ അമ്മവീടിന് ഉപഹാരം സമർപ്പിക്കുന്നു. അമ്മവീട് പ്രസിഡന്റ് ദിനേശ് ഗുരുദേവും സെക്രട്ടറി ചന്ദ്രൻ മണ്ണോത്തും ചേർന്ന് ഉപഹാരം ഏറ്റുവാങ്ങുന്നു.' },
    { image: m('Untitled-design-58.jpg'), title: 'ഗാന്ധിജയന്തി ദിനാഘോഷത്തിൽ അധ്യക്ഷത വഹിച്ച് അമ്മവീട് പ്രസിഡന്റ് ദിനേശൻ ഗുരുദേവ്', text: 'ഒക്ടോബർ 2 ഗാന്ധിജയന്തി ദിനത്തോടനുബന്ധിച്ച് സംഘടിപ്പിച്ച ചടങ്ങിൽ അധ്യക്ഷത വഹിച്ച് സംസാരിക്കുന്ന അമ്മവീട് പ്രസിഡന്റ് ദിനേശൻ ഗുരുദേവ്. ഗാന്ധിജിയുടെ ആശയങ്ങളുടെയും മൂല്യങ്ങളുടെയും പ്രസക്തി ഓർമിപ്പിച്ചുകൊണ്ട് അദ്ദേഹം ചടങ്ങിൽ തന്റെ സന്ദേശം പങ്കുവെച്ചു.' },
    { image: m('Untitled-design-59.jpg'), title: 'അമ്മവീട് കുടുംബത്തിന്റെ അമ്മ ചന്ദ്രി എടത്തിലിന് ആദരവ്', text: 'അമ്മവീടിന്റെ അമ്മയായ ചന്ദ്രി എടത്തിലിനെ പ്രശസ്ത ചിത്രകാരനും കവിയും പ്രഭാഷകനുമായ യുകെ രാഘവൻ മാസ്റ്റർ പൊന്നാട അണിയിച്ച് ആദരിക്കുന്നു. സ്നേഹത്തിന്റെയും ബഹുമാനത്തിന്റെയും ആദരവിന്റെയും പ്രതീകമായ ഈ നിമിഷം ചടങ്ങിന് കൂടുതൽ മാധുര്യം പകരുന്നു.' },
    { image: m('Untitled-design-60.jpg'), title: 'ഗാന്ധിജയന്തി ദിനത്തിൽ സേവനപ്രവർത്തകർക്ക് ആദരവ്', text: 'ഗാന്ധിജയന്തി ദിനത്തോടനുബന്ധിച്ച് അമ്മവീട്ടിൽ ഹരിതകർമ്മസേനാംഗങ്ങൾ, ആശാവർക്കർമാർ, പാലിയേറ്റീവ് കെയർ സിസ്റ്റർമാർ എന്നിവരെ ആദരിച്ചു. പ്രശസ്ത ചിത്രകാരനും കവിയും പ്രഭാഷകനുമായ ശ്രീ യുകെ രാഘവൻ മാസ്റ്റർ ചടങ്ങ് ഉദ്ഘാടനം ചെയ്യുകയും മുഖ്യപ്രഭാഷണം നടത്തുകയും ചെയ്തു.' },
    { image: m('Untitled-design-61.jpg'), title: 'ചടങ്ങിൽ സംസാരിച്ച് ഉള്ളിയേരി ഗ്രാമപഞ്ചായത്ത് 18-ാം വാർഡ് മെമ്പർ കൃഷ്ണൻ കൂവിൽ', text: 'ഗാന്ധിജയന്തി ദിനത്തോടനുബന്ധിച്ച് അമ്മവീട്ടിൽ സംഘടിപ്പിച്ച ചടങ്ങിൽ ഉള്ളിയേരി ഗ്രാമപഞ്ചായത്ത് 18-ാം വാർഡ് മെംബർ കൃഷ്ണൻ കൂവിൽ സദസ്സിനെ അഭിസംബോധന ചെയ്ത് സംസാരിക്കുന്നു. ചടങ്ങിന്റെ പ്രാധാന്യവും സമൂഹസേവനത്തിന്റെ മൂല്യവും പങ്കുവെച്ചുകൊണ്ട് അദ്ദേഹം തന്റെ ആശയങ്ങൾ അവതരിപ്പിച്ചു' },
    { image: m('Untitled-design-62.jpg'), title: 'അമ്മവീട്ടിലെ ആദരിക്കൽ ചടങ്ങിൽ ആശംസകൾ നേർന്ന് പപ്പൻ കണ്ണാട്ടി', text: 'അമ്മവീട്ടിൽ സംഘടിപ്പിച്ച ആദരിക്കൽ ചടങ്ങിൽ സംസ്ഥാന ഏകതാ പരിഷത്ത് കൺവീനർ പപ്പൻ കണ്ണാട്ടി ആശംസാപ്രസംഗം നടത്തുന്നു. ചടങ്ങിന്റെ പ്രാധാന്യം എടുത്തുപറഞ്ഞുകൊണ്ട് അദ്ദേഹം എല്ലാവർക്കും ആശംസകൾ നേർന്നു.' },
    { image: m('Untitled-design-63.jpg'), title: 'ആരോഗ്യപ്രവർത്തകർക്കൊപ്പം ആദരച്ചടങ്ങിൽ ഡോ. പ്രമോദ് കുമാർ', text: 'അമ്മവീട്ടിൽ സംഘടിപ്പിച്ച ആദരച്ചടങ്ങിൽ ഉള്ളിയേരി ഗ്രാമപഞ്ചായത്തിലെ ആശാവർക്കർമാരും പാലിയേറ്റീവ് കെയർ സിസ്റ്റർമാരും ആരോഗ്യവകുപ്പ് അസിസ്റ്റന്റ് ഡയറക്ടർ ഡോ. പ്രമോദ് കുമാറിനൊപ്പം പങ്കെടുക്കുന്നു. ആരോഗ്യരംഗത്തും സമൂഹസേവനത്തിലും പ്രവർത്തിക്കുന്നവരെ ആദരിച്ച ഈ ചടങ്ങ് സ്നേഹത്തിന്റെയും ഐക്യത്തിന്റെയും മനോഹരമായ നിമിഷമായി മാറി.' },
    { image: m('Untitled-design-64.jpg'), title: 'അമ്മവീട് പ്രസിഡന്റുമായി ആശയവിനിമയം നടത്തി ജനപ്രതിനിധികളും ആശാവർക്കറും', text: 'കീഴരിയൂർ ഗ്രാമപഞ്ചായത്ത് എട്ടാം വാർഡ് മെമ്പറും ആശാവർക്കറും അമ്മവീട് പ്രസിഡന്റ് ദിനേശൻ ഗുരുദേവുമായി ചർച്ച നടത്തുന്നു. ആരോഗ്യസംരക്ഷണവും സാമൂഹികക്ഷേമവും ഉൾപ്പെടെയുള്ള വിഷയങ്ങളിൽ ആശയങ്ങൾ പങ്കുവെച്ച ഈ കൂടിക്കാഴ്ച പരസ്പര സഹകരണത്തിന്റെയും കൂട്ടായ പ്രവർത്തനത്തിന്റെയും പ്രാധാന്യം വ്യക്തമാക്കുന്നു.' },
  ],
  extraImages: [
    'WhatsApp-Image-2026-09-11-at-11.58.32-AM.jpeg', 'WhatsApp-Image-1200x600.jpeg',
    'WhatsApp-Image-2026-09-11-at-11.58.33-AM-Copy.jpeg', 'Untitled-design-6-1.jpg',
    'Untitled-design-7.jpg', 'Untitled-design-8.jpg',
  ].map(m),
}

export const DONATIONS = {
  bank: [
    { label: 'Name', value: 'Heera World Foundation' },
    { label: 'Cust ID', value: '85320517' },
    { label: 'A/c No.', value: '258810020230' },
    { label: 'Ifsc Code', value: 'INDB0002170' },
    { label: 'Branch', value: 'Jos Junction.' },
  ],
  image: m('WhatsApp-Image-2026-08-29-at-2.13.59-PM.jpg'),
  companyIntro: 'HEERA WORLD FOUNDATION (CIN: U88100KL2023NPL081379) is a Private company incorporated on 11 May 2023. It is classified as Non-government company and is registered at Registrar of Companies, Ernakulam. Its authorized share capital is Rs. 1000000.00 and its paid up capital is Rs. 25000.00.',
  directors: 'Directors of HEERA WORLD FOUNDATION are MINIKUMARI BALAKRISHNAN NAIR SARASWATHYAMMA, SHARMIDAS THIRUMANGALATH, MOHAMED FASAL AMBALI, and PAVANAN SANKARANARAYANAN.',
  cinInfo: 'HEERA WORLD FOUNDATION’s Corporate Identification Number (CIN) is U88100KL2023NPL081379 and its registration number is 81379. Users may contact HEERA WORLD FOUNDATION on its Email address – . Registered address of HEERA WORLD FOUNDATION is NANDINI MILK BUILDING 1ST FLOOR OTHUKKUNGAL,MANOOR PONMALA POST MALAPPURAM DT,Tirur,Malappuram,Kerala,676528-India.',
  status: 'Current status of HEERA WORLD FOUNDATION is – Active.',
  table: [
    { label: 'CIN', value: 'U88100KL2023NPL081379' },
    { label: 'Name', value: 'HEERA WORLD FOUNDATION' },
    { label: 'Listed on Stock Exchange', value: 'Unlisted' },
    { label: 'Company Status', value: 'Active' },
    { label: 'ROC', value: 'ROC Ernakulam' },
    { label: 'Registration Number', value: '81379' },
    { label: 'Company Category', value: 'Company limited by shares' },
    { label: 'Company Sub Category', value: 'Non-government company' },
    { label: 'Class of Company', value: 'Private' },
    { label: 'Date of Incorporation', value: '2023-05-11' },
    { label: 'Age of Company', value: '3 years, 2 months, 7 days' },
    { label: 'Activity', value: 'NIC Code: / NIC Description:' },
    { label: 'Number of Members', value: '0' },
  ],
}

export const MANAGING_DIRECTOR = {
  welcome: 'Welcome to Heera World Foundation!',
  title: 'Message from the Managing Director',
  image: MANAGEMENT[0].image,
  name: MANAGEMENT[0].name,
  role: MANAGEMENT[0].role,
  paragraphs: [
    'Heera World Foundation was founded on a simple belief — that every individual deserves to live with dignity, opportunity, and hope. Through Motherhood Home (Amma Veedu) at Ulliyeri, we provide a safe and caring home for elderly mothers who have no one to depend on, offering free accommodation, nutritious food, clothing, medical care, and daily support.',
    'Our vision reaches further. We are working to build a comprehensive Senior Care Centre and to strengthen welfare for senior citizens across all 14 districts of Kerala. Every programme we run is guided by compassion, care, and protection — placing people before everything.',
    'This work is only possible because of our volunteers, donors, and well-wishers. To every hand that has helped us, thank you. Together, we can bring comfort to more lives and build a more humane and equitable Kerala for all beings.',
  ],
}

