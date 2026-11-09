import { PilotService, SecurityGuarantee, ClientVouch, FAQItem } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_piloting_gaming_1794201732200.jpg';
export const GENSHIN_ABYSS_IMAGE = '/src/assets/images/service_genshin_abyss_1794201732511.jpg';
export const WUTHERING_TOWER_IMAGE = '/src/assets/images/service_wuthering_tower_1794201733442.jpg';
export const EXPLORATION_MAP_IMAGE = '/src/assets/images/service_exploration_map_1794201733212.jpg';

export const SERVICES: PilotService[] = [
  // Genshin Impact Services
  {
    id: 'gi-abyss-36',
    game: 'genshin',
    category: 'endgame',
    title: 'Spiral Abyss 36★ Full Clear (Floors 9–12)',
    price: 8,
    unit: 'per reset',
    turnaround: '1–2 hours',
    description: 'Guaranteed 36/36 stars clear on the current Spiral Abyss cycle. Optimal team comps, proper elemental rotations, and chamber strategy.',
    features: [
      'Floors 9, 10, 11, and 12 with full 9★ each',
      'Free private Discord live stream or recorded VOD proof',
      'Zero artifact tampering or unnecessary resource spending',
      'Full 600 Primogems + Domain Reliquaries secured'
    ],
    requirements: 'Adventure Rank 50+ with 2 functional combat teams.',
    image: GENSHIN_ABYSS_IMAGE,
    badge: 'Most Popular'
  },
  {
    id: 'gi-theater',
    game: 'genshin',
    category: 'endgame',
    title: 'Imaginarium Theater Master Mode (8/8 Acts)',
    price: 10,
    unit: 'per cycle',
    turnaround: '1–2 hours',
    description: 'Full completion of Visionary/Master mode with all 8 Act Bosses defeated and all star challenges earned.',
    features: [
      'Strategic support character borrowing & cast allocation',
      'Full Primogem, Toy Medal, and Key of Echo rewards',
      'Customized battle boons optimization'
    ],
    requirements: 'Eligible character roster matching current elemental season.',
    image: GENSHIN_ABYSS_IMAGE
  },
  {
    id: 'gi-exploration-100',
    game: 'genshin',
    category: 'exploration',
    title: '100% Region Map Exploration & All Oculi',
    price: 18,
    unit: 'per zone',
    turnaround: '24–48 hours',
    description: 'Complete 100% map exploration badge in Natlan, Fontaine, Chenyu Vale, Sumeru, or Inazuma with every collectible gathered.',
    features: [
      'All regional Oculi (Pyroculus, Hydroculus, Dendroculus)',
      'All Common, Exquisite, Precious, and Luxurious chests',
      'Time-trial challenges, Seelies, and Shrines of Depths',
      'Huge Primogem cache and Sigil shop maxing'
    ],
    requirements: 'Archon quest access to the specified region.',
    image: EXPLORATION_MAP_IMAGE,
    badge: 'High Value'
  },
  {
    id: 'gi-monthly-care',
    game: 'genshin',
    category: 'maintenance',
    title: '30-Day Daily Commission & Resin Burn Pass',
    price: 25,
    unit: 'per month',
    turnaround: 'Daily execution',
    description: 'Never waste another Original Resin or miss a daily commission. Managed precisely during your designated rest hours.',
    features: [
      '4 Daily Commissions + Katherine reward claim (60 Primogems/day)',
      '160–200 Original Resin condensed or farmed according to your instructions',
      'Expeditions dispatched & Realm Currency claimed',
      'Battle Pass weekly maxing guarantee'
    ],
    requirements: 'Any Adventure Rank. Specify your desired artifact or talent domain.',
    image: HERO_IMAGE
  },
  {
    id: 'gi-character-farm',
    game: 'genshin',
    category: 'farming',
    title: 'Character Ascension 1–90 & Talent Materials',
    price: 14,
    unit: 'per character',
    turnaround: '24 hours',
    description: 'Fast-track your newly pulled 5-star character to maximum combat viability with complete material gathering.',
    features: [
      '168 Regional Local Specialties hand-gathered',
      '46 World Boss drops farmed with your natural resin',
      'Talent books farmed for 9/9/9 combat readiness',
      'Mob drop extinction routes executed'
    ],
    requirements: 'Sufficient resin/fragile resin or scheduled multi-day run.',
    image: GENSHIN_ABYSS_IMAGE
  },

  // Wuthering Waves Services
  {
    id: 'wuwa-tower-30',
    game: 'wuthering',
    category: 'endgame',
    title: 'Tower of Adversity Hazard Zone (30/30 Crests)',
    price: 9,
    unit: 'per reset',
    turnaround: '1–3 hours',
    description: 'Guaranteed 30/30 Crests clear on Hazard Zone (Stable, Experiment, and Hazard Towers). Precision parry, dodge counters, and Concerto rotations.',
    features: [
      'Full 30/30 Crests clear on Hazard Zone',
      'Mastery of Jinzhou / Black Shores meta Resonator rotations',
      '700 Astrites + Hazard Store currency guaranteed',
      'Live Discord stream or recording available'
    ],
    requirements: 'Union Level 40+ with decently equipped Resonator teams.',
    image: WUTHERING_TOWER_IMAGE,
    badge: 'Top Seller'
  },
  {
    id: 'wuwa-exploration-100',
    game: 'wuthering',
    category: 'exploration',
    title: '100% Region Exploration & Sonance Caskets',
    price: 16,
    unit: 'per area',
    turnaround: '24–48 hours',
    description: '100% map exploration rating in The Black Shores, Mt. Firmament, Central Plains, or Desoruent Highlands.',
    features: [
      'All Sonance Caskets, Windchimers & Tidal Heritages',
      'All Supply Chests, Resonance Beacons & Puzzles',
      'Trophy milestones and massive Astrite cache unlocked',
      'Relic merchants leveled to maximum'
    ],
    requirements: 'Main quest access to the requested territory.',
    image: EXPLORATION_MAP_IMAGE,
    badge: 'Popular'
  },
  {
    id: 'wuwa-monthly-care',
    game: 'wuthering',
    category: 'maintenance',
    title: '30-Day Waveplate & Daily Activity Maintenance',
    price: 24,
    unit: 'per month',
    turnaround: 'Daily execution',
    description: 'Complete daily maintenance for busy Resonators. We burn 240 Waveplates daily and complete all activity milestones.',
    features: [
      '100/100 Daily Activity points completed (60 Astrites/day)',
      '240 Waveplates spent on target Tacet Fields, Forgery, or Bosses',
      'Pioneer Podcast (Battle Pass) exp capped weekly',
      'Customized daily farm schedules based on your wish list'
    ],
    requirements: 'Any Union Level. Flexible scheduling.',
    image: HERO_IMAGE
  },
  {
    id: 'wuwa-echo-farming',
    game: 'wuthering',
    category: 'farming',
    title: 'Echo Tuning & 5-Piece Target Set Farming',
    price: 15,
    unit: 'per set',
    turnaround: '24 hours',
    description: 'Hunt and tune a competitive 5-piece Echo set with correct 4-Cost (Crit Rate / Crit DMG) and 3-Cost Elemental DMG bonuses.',
    features: [
      'Target Sonata Effect (Havoc, Glacio, Fusion, Aero, etc.)',
      'Correct Main Stats secured on all 5 slots (4-3-3-1-1 setup)',
      'Echo EXP & Tuners utilized with zero wastage',
      'High Data Bank Level 21+ route speedrun'
    ],
    requirements: 'Data Bank Level 15+ (Level 20+ recommended).',
    image: WUTHERING_TOWER_IMAGE
  },
  {
    id: 'wuwa-illusive-realm',
    game: 'wuthering',
    category: 'events',
    title: 'Depths of Illusive Realm Full Event Clear',
    price: 10,
    unit: 'per cycle',
    turnaround: '2–3 hours',
    description: 'Complete all difficulty tiers in the roguelike Illusive Realm, unlocking all shop items, Astrite rewards, and Phantom Echoes.',
    features: [
      'Full difficulty clears with maximum score multiplier',
      'All Illusive Tokens farmed & entire event shop cleared',
      'Exclusive event Phantom Echo skins secured'
    ],
    requirements: 'Union Level 25+.',
    image: WUTHERING_TOWER_IMAGE
  }
];

export const SECURITY_GUARANTEES: SecurityGuarantee[] = [
  {
    id: 'hand-played',
    title: '100% Hand-Played Guarantee',
    summary: 'Zero third-party tools, injection mods, or macro scripts.',
    detail: 'Every chamber, domain, and chest is completed through clean human mechanics on PC and official game clients. Zero risk of anti-cheat trigger.'
  },
  {
    id: 'vpn-routing',
    title: 'Regional VPN IP Matching',
    summary: 'We match your home country and city to prevent security alerts.',
    detail: 'Before logging into your account, we route through dedicated clean residential VPN nodes matching your normal login region, preventing suspicious IP location flags.'
  },
  {
    id: 'stream-option',
    title: 'Private Discord Live Stream',
    summary: 'Watch your pilot run live with full transparency.',
    detail: 'Request a private 1-on-1 Discord screen share. You can watch the entire Abyss 36★ or Tower 30-crest clear in real time, or request full VOD recordings.'
  },
  {
    id: 'credential-safety',
    title: 'Strict 2FA & Account Privacy',
    summary: 'You retain complete ownership; we never request email passwords.',
    detail: 'You approve login via one-time verification code. We never touch your linked email, payment methods, or personal data, and log out immediately upon order completion.'
  }
];

export const CLIENT_VOUCHES: ClientVouch[] = [
  {
    id: 'vouch-1',
    game: 'genshin',
    clientName: 'Alex K.',
    discordTag: 'kallum#4821',
    serviceRendered: 'Spiral Abyss 36★ (Floor 12 9/9 Stars)',
    rating: 5,
    review: 'Completed my Floor 12 in under 45 minutes! My team comps were pretty scuffed, but their rotations were insane. Watched the entire run on Discord stream. Super professional and polite.',
    timestamp: '2 days ago',
    proofBadge: 'Floor 12 36★ Verified'
  },
  {
    id: 'vouch-2',
    game: 'wuthering',
    clientName: 'Rin T.',
    discordTag: 'rin_waves#1099',
    serviceRendered: 'Tower of Adversity Hazard Zone (30/30 Crests)',
    rating: 5,
    review: 'I was stuck on Hazard Tower Floor 4 with 27 crests for a week. Handed it over, and they delivered the clean 30 crests before lunch. Even gave me tips on my Jinhsi Concerto combo!',
    timestamp: 'Yesterday',
    proofBadge: '30/30 Crests Hazard Zone'
  },
  {
    id: 'vouch-3',
    game: 'genshin',
    clientName: 'Derrick M.',
    discordTag: 'derrick_m#8802',
    serviceRendered: '100% Natlan Map Exploration + Pyroculus',
    rating: 5,
    review: 'Got all regions in Natlan to 100% and collected every single Pyroculus. Unlocked over 3,000 Primogems for my Xilonen savings. Zero artifacts or resources were touched.',
    timestamp: '3 days ago',
    proofBadge: '100% Natlan + All Oculi'
  },
  {
    id: 'vouch-4',
    game: 'wuthering',
    clientName: 'Samira H.',
    discordTag: 'samiravv#3321',
    serviceRendered: '30-Day Waveplate Caretaker Pass',
    rating: 5,
    review: 'I had an intensive business trip for 3 weeks and didn’t want to fall behind on Waveplates. They logged in every single day at the agreed time and farmed my desired Havoc echoes. 10/10 service!',
    timestamp: '5 days ago',
    proofBadge: '30-Day Monthly Pass'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'safety',
    question: 'Is my account safe from bans or suspicious activity flags?',
    answer: 'Absolutely. We play 100% by hand on clean, official PC game clients without any macros, memory injectors, or third-party automation tools. Additionally, we connect through dedicated VPN servers matching your country and city to ensure your game publisher sees a consistent location.',
    category: 'Security'
  },
  {
    id: 'login-info',
    question: 'How do you log into my account without risking my credentials?',
    answer: 'You do not need to disclose your email password. When ready to pilot, you provide your game username/password, and when the 2-Factor Authentication code arrives on your phone/email, you send the one-time code to us via Discord or live chat. You retain 100% ownership at all times.',
    category: 'Login Process'
  },
  {
    id: 'stream',
    question: 'Can I watch you pilot my account in real time?',
    answer: 'Yes! We offer free private 1-on-1 Discord screen shares for all endgame combat clears (Spiral Abyss & Tower of Adversity). You can watch live, chat with your pilot, and see every rotation in action.',
    category: 'Transparency'
  },
  {
    id: 'underleveled',
    question: 'What if my characters are under-leveled or have weak artifacts?',
    answer: 'Our pilots possess deep mechanical mastery, including optimal animation cancels, i-frame dodging, and elemental reaction synergies. If a team genuinely cannot meet DPS checks, we will review your account first and offer honest advice or team adjustments before accepting payment.',
    category: 'Gameplay'
  },
  {
    id: 'payment',
    question: 'What payment methods do you accept and how does delivery work?',
    answer: 'We accept PayPal, Wise, Ko-fi, Venmo, and major digital payments. For one-time clears, we only request payment once the schedule is locked or after proof of clear is submitted. You receive complete screenshot receipts upon completion.',
    category: 'Billing'
  }
];
