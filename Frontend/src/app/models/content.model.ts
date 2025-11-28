export enum ContentType {
  Article = 'article',
  Guide = 'guide',
  Video = 'video',
  Podcast = 'podcast',
  Resource = 'resource'
}

export enum ContentStatus {
  Draft = 'draft',
  PendingReview = 'pending_review',
  Published = 'published',
  Rejected = 'rejected',
  Archived = 'archived'
}

export interface Content {
  id: string;
  title: string;
  description: string;
  type: ContentType;
  authorId: string;
  content: string;
  tags: string[];
  coverImage?: string;
  attachments?: string[];
  status: ContentStatus;
  views: number;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
}
