export type GameFilter = 'all' | 'genshin' | 'wuthering';

export type ServiceCategory = 'endgame' | 'exploration' | 'maintenance' | 'farming' | 'events';

export interface PilotService {
  id: string;
  game: 'genshin' | 'wuthering';
  category: ServiceCategory;
  title: string;
  price: number;
  unit: string;
  turnaround: string;
  description: string;
  features: string[];
  requirements: string;
  image: string;
  badge?: string;
}

export interface SecurityGuarantee {
  id: string;
  title: string;
  summary: string;
  detail: string;
}

export interface ClientVouch {
  id: string;
  game: 'genshin' | 'wuthering';
  clientName: string;
  discordTag: string;
  serviceRendered: string;
  rating: number;
  review: string;
  timestamp: string;
  proofBadge: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface BookingFormState {
  game: 'genshin' | 'wuthering';
  server: string;
  serviceId: string;
  uid: string;
  discordContact: string;
  clientEmail: string;
  streamOption: boolean;
  vpnLocation: string;
  notes: string;
}
