export enum MentorshipStatus {
  Applied = 'applied',
  Matched = 'matched',
  Active = 'active',
  Completed = 'completed',
  Cancelled = 'cancelled'
}

export interface MentorshipPair {
  id: string;
  mentorId: string;
  menteeId: string;
  status: MentorshipStatus;
  goals: string[];
  startDate?: Date;
  endDate?: Date;
  matchScore?: number;
  matchReason?: string;
  feedback?: {
    rating: number;
    comment: string;
    date: Date;
  }[];
  createdAt: Date;
  updatedAt: Date;
}
