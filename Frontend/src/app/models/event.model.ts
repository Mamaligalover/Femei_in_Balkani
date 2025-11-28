export enum EventType {
  Webinar = 'webinar',
  Workshop = 'workshop',
  Conference = 'conference',
  Networking = 'networking',
  MentorSession = 'mentor_session'
}

export enum EventFormat {
  Online = 'online',
  Offline = 'offline',
  Hybrid = 'hybrid'
}

export interface Event {
  id: string;
  title: string;
  description: string;
  type: EventType;
  format: EventFormat;
  organizerId: string;
  startDate: Date;
  endDate: Date;
  location?: string;
  onlineLink?: string;
  maxParticipants?: number;
  currentParticipants: number;
  isPublic: boolean;
  tags: string[];
  coverImage?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface EventParticipant {
  id: string;
  eventId: string;
  userId: string;
  status: 'registered' | 'attended' | 'cancelled';
  registeredAt: Date;
}
