export enum ConnectionType {
  Follow = 'follow',
  MentorMatch = 'mentor_match',
  Collaboration = 'collaboration'
}

export enum ConnectionStatus {
  Pending = 'pending',
  Accepted = 'accepted',
  Rejected = 'rejected'
}

export interface Connection {
  id: string;
  fromUserId: string;
  toUserId: string;
  type: ConnectionType;
  status: ConnectionStatus;
  createdAt: Date;
  updatedAt: Date;
}
