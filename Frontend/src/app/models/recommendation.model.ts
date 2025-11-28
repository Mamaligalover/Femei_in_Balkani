export enum RecommendationType {
  User = 'user',
  Event = 'event',
  Content = 'content',
  MentorMatch = 'mentor_match'
}

export interface Recommendation {
  id: string;
  userId: string;
  type: RecommendationType;
  targetId: string;
  score: number;
  reason: string;
  isViewed: boolean;
  isActedUpon: boolean;
  createdAt: Date;
}
