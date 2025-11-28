export enum FlagReason {
  Inappropriate = 'inappropriate',
  Spam = 'spam',
  Harassment = 'harassment',
  FalseInformation = 'false_information',
  Other = 'other'
}

export enum FlagStatus {
  Pending = 'pending',
  UnderReview = 'under_review',
  Resolved = 'resolved',
  Dismissed = 'dismissed'
}

export interface Flag {
  id: string;
  reporterId: string;
  contentType: 'user' | 'content' | 'event' | 'comment';
  contentId: string;
  reason: FlagReason;
  description: string;
  status: FlagStatus;
  moderatorId?: string;
  moderatorNotes?: string;
  createdAt: Date;
  resolvedAt?: Date;
}
