import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User, UserRole, InterestDomain } from '../models/user.model';
import { Event, EventType, EventFormat } from '../models/event.model';
import { Content, ContentType, ContentStatus } from '../models/content.model';
import { MentorshipPair, MentorshipStatus } from '../models/mentorship.model';
import { Recommendation, RecommendationType } from '../models/recommendation.model';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  private mockUsers: User[] = [
    {
      id: '1',
      email: 'elena.popescu@example.com',
      firstName: 'Elena',
      lastName: 'Popescu',
      role: UserRole.Mentor,
      profilePicture: 'https://i.pravatar.cc/150?img=1',
      bio: 'Leadership and professional development expert with 15 years of experience in tech.',
      country: 'Romania',
      city: 'Bucharest',
      skills: ['Leadership', 'Management', 'AI & ML', 'Public Speaking'],
      interests: [InterestDomain.ProfessionalDevelopment, InterestDomain.NetworkingCollaboration],
      goals: ['Mentoring young professionals', 'Community development'],
      mentorAvailability: true,
      menteeStatus: false,
      visibility: 'public',
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-11-20')
    },
    {
      id: '2',
      email: 'ana.kovac@example.com',
      firstName: 'Ana',
      lastName: 'Kovač',
      role: UserRole.Member,
      profilePicture: 'https://i.pravatar.cc/150?img=5',
      bio: 'Software engineer passionate about technology and innovation.',
      country: 'Serbia',
      city: 'Belgrade',
      skills: ['Python', 'React', 'Cloud Computing'],
      interests: [InterestDomain.ProfessionalDevelopment, InterestDomain.PersonalDevelopment],
      goals: ['Transition to leadership role', 'International networking'],
      mentorAvailability: false,
      menteeStatus: true,
      visibility: 'public',
      createdAt: new Date('2024-03-10'),
      updatedAt: new Date('2024-11-25')
    },
    {
      id: '3',
      email: 'maria.dimitrov@example.com',
      firstName: 'Maria',
      lastName: 'Dimitrov',
      role: UserRole.Mentor,
      profilePicture: 'https://i.pravatar.cc/150?img=9',
      bio: 'Entrepreneur focused on sustainability and social innovation.',
      country: 'Bulgaria',
      city: 'Sofia',
      skills: ['Entrepreneurship', 'Sustainability', 'Business Development'],
      interests: [InterestDomain.ProfessionalDevelopment, InterestDomain.EquityInclusion],
      goals: ['Supporting women entrepreneurs', 'Social impact projects'],
      mentorAvailability: true,
      menteeStatus: false,
      visibility: 'public',
      createdAt: new Date('2024-02-20'),
      updatedAt: new Date('2024-11-22')
    },
    {
      id: '4',
      email: 'ioanna.papadopoulos@example.com',
      firstName: 'Ioanna',
      lastName: 'Papadopoulos',
      role: UserRole.EventOrganizer,
      profilePicture: 'https://i.pravatar.cc/150?img=10',
      bio: 'Tech event organizer and women\'s community coordinator.',
      country: 'Greece',
      city: 'Athens',
      skills: ['Event Management', 'Community Building', 'Marketing'],
      interests: [InterestDomain.NetworkingCollaboration, InterestDomain.EventsResources],
      mentorAvailability: false,
      menteeStatus: false,
      visibility: 'public',
      createdAt: new Date('2024-04-05'),
      updatedAt: new Date('2024-11-26')
    }
  ];

  private mockEvents: Event[] = [
    {
      id: 'e1',
      title: 'Women in Tech Summit 2025',
      description: 'Conference dedicated to women in technology with international speakers and networking sessions.',
      type: EventType.Conference,
      format: EventFormat.Hybrid,
      organizerId: '4',
      startDate: new Date('2025-02-15T09:00:00'),
      endDate: new Date('2025-02-15T18:00:00'),
      location: 'Bucharest, Romania',
      onlineLink: 'https://meet.example.com/wit2025',
      maxParticipants: 200,
      currentParticipants: 87,
      isPublic: true,
      tags: ['tech', 'leadership', 'networking'],
      coverImage: 'https://picsum.photos/800/400?random=1',
      createdAt: new Date('2024-11-01'),
      updatedAt: new Date('2024-11-20')
    },
    {
      id: 'e2',
      title: 'Leadership & Career Growth Workshop',
      description: 'Interactive workshop on developing leadership skills and career planning.',
      type: EventType.Workshop,
      format: EventFormat.Online,
      organizerId: '1',
      startDate: new Date('2025-01-20T14:00:00'),
      endDate: new Date('2025-01-20T17:00:00'),
      onlineLink: 'https://zoom.us/j/example123',
      maxParticipants: 50,
      currentParticipants: 32,
      isPublic: true,
      tags: ['leadership', 'career', 'professional-development'],
      coverImage: 'https://picsum.photos/800/400?random=2',
      createdAt: new Date('2024-11-10'),
      updatedAt: new Date('2024-11-25')
    },
    {
      id: 'e3',
      title: 'Networking Evening - Balkan Women Professionals',
      description: 'Networking evening for professionals from the Balkans region.',
      type: EventType.Networking,
      format: EventFormat.Offline,
      organizerId: '4',
      startDate: new Date('2025-01-30T18:00:00'),
      endDate: new Date('2025-01-30T21:00:00'),
      location: 'Sofia, Bulgaria',
      maxParticipants: 80,
      currentParticipants: 45,
      isPublic: true,
      tags: ['networking', 'community', 'balkans'],
      coverImage: 'https://picsum.photos/800/400?random=3',
      createdAt: new Date('2024-11-15'),
      updatedAt: new Date('2024-11-26')
    }
  ];

  private mockContent: Content[] = [
    {
      id: 'c1',
      title: 'Complete guide to salary negotiation',
      description: 'Strategies and techniques for successful negotiation of salary and benefits.',
      type: ContentType.Guide,
      authorId: '1',
      content: 'Detailed content about negotiation techniques...',
      tags: ['career', 'salary', 'negotiation'],
      coverImage: 'https://picsum.photos/600/400?random=10',
      status: ContentStatus.Published,
      views: 1243,
      likes: 89,
      createdAt: new Date('2024-10-10'),
      updatedAt: new Date('2024-10-15'),
      publishedAt: new Date('2024-10-15')
    },
    {
      id: 'c2',
      title: 'How to build a strong personal brand',
      description: 'Practical tips for developing your professional presence online and offline.',
      type: ContentType.Article,
      authorId: '3',
      content: 'Personal branding is essential in the digital age...',
      tags: ['branding', 'career', 'social-media'],
      coverImage: 'https://picsum.photos/600/400?random=11',
      status: ContentStatus.Published,
      views: 892,
      likes: 67,
      createdAt: new Date('2024-11-01'),
      updatedAt: new Date('2024-11-05'),
      publishedAt: new Date('2024-11-05')
    },
    {
      id: 'c3',
      title: 'Podcast: Success Stories - Women in Entrepreneurship',
      description: 'Inspirational discussions with successful women entrepreneurs from the Balkans.',
      type: ContentType.Podcast,
      authorId: '3',
      content: 'Link to podcast episodes...',
      tags: ['entrepreneurship', 'success-stories', 'inspiration'],
      coverImage: 'https://picsum.photos/600/400?random=12',
      status: ContentStatus.Published,
      views: 654,
      likes: 45,
      createdAt: new Date('2024-11-10'),
      updatedAt: new Date('2024-11-12'),
      publishedAt: new Date('2024-11-12')
    }
  ];

  private mockMentorshipPairs: MentorshipPair[] = [
    {
      id: 'm1',
      mentorId: '1',
      menteeId: '2',
      status: MentorshipStatus.Active,
      goals: ['Developing leadership skills', 'Career planning'],
      startDate: new Date('2024-09-01'),
      matchScore: 0.92,
      matchReason: 'You share common interests in tech leadership and both have experience in AI/ML',
      feedback: [
        {
          rating: 5,
          comment: 'Very useful sessions, Elena is an excellent mentor!',
          date: new Date('2024-10-15')
        }
      ],
      createdAt: new Date('2024-08-20'),
      updatedAt: new Date('2024-11-20')
    },
    {
      id: 'm2',
      mentorId: '3',
      menteeId: '2',
      status: MentorshipStatus.Matched,
      goals: ['Transition to entrepreneurship', 'Networking'],
      matchScore: 0.85,
      matchReason: 'Maria has experience in sustainable entrepreneurship, an area of interest for Ana',
      createdAt: new Date('2024-11-15'),
      updatedAt: new Date('2024-11-20')
    }
  ];

  private mockRecommendations: Recommendation[] = [
    {
      id: 'r1',
      userId: '2',
      type: RecommendationType.Event,
      targetId: 'e1',
      score: 0.95,
      reason: 'The event aligns with your interests in technology and leadership',
      isViewed: false,
      isActedUpon: false,
      createdAt: new Date()
    },
    {
      id: 'r2',
      userId: '2',
      type: RecommendationType.Content,
      targetId: 'c1',
      score: 0.88,
      reason: 'This guide can help you with career planning',
      isViewed: true,
      isActedUpon: false,
      createdAt: new Date()
    },
    {
      id: 'r3',
      userId: '2',
      type: RecommendationType.User,
      targetId: '4',
      score: 0.82,
      reason: 'Ioanna organizes events in your area of interest',
      isViewed: false,
      isActedUpon: false,
      createdAt: new Date()
    }
  ];

  getUsers(): Observable<User[]> {
    return of(this.mockUsers);
  }

  getCurrentUser(): Observable<User> {
    return of(this.mockUsers[1]); // Ana Kovač
  }

  getEvents(): Observable<Event[]> {
    return of(this.mockEvents);
  }

  getContent(): Observable<Content[]> {
    return of(this.mockContent);
  }

  getMentorships(): Observable<MentorshipPair[]> {
    return of(this.mockMentorshipPairs);
  }

  getRecommendations(userId: string): Observable<Recommendation[]> {
    return of(this.mockRecommendations.filter(r => r.userId === userId));
  }

  getUserById(id: string): Observable<User | undefined> {
    return of(this.mockUsers.find(u => u.id === id));
  }

  getEventById(id: string): Observable<Event | undefined> {
    return of(this.mockEvents.find(e => e.id === id));
  }
}
