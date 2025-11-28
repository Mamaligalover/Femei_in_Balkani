export enum UserRole {
  Visitor = 'visitor',
  Member = 'member',
  Mentor = 'mentor',
  Moderator = 'moderator',
  EventOrganizer = 'event_organizer',
  Admin = 'admin'
}

export enum InterestDomain {
  ProfessionalDevelopment = 'professional_development',
  NetworkingCollaboration = 'networking_collaboration',
  EquityInclusion = 'equity_inclusion',
  EventsResources = 'events_resources',
  PersonalDevelopment = 'personal_development'
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  profilePicture?: string;
  bio?: string;
  country: string;
  city?: string;
  skills: string[];
  interests: InterestDomain[];
  goals?: string[];
  mentorAvailability?: boolean;
  menteeStatus?: boolean;
  visibility: 'public' | 'private' | 'connections_only';
  createdAt: Date;
  updatedAt: Date;
}
