import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../services/mock-data.service';
import { User, UserRole } from '../../models/user.model';
import { MentorshipPair } from '../../models/mentorship.model';

@Component({
  selector: 'app-mentorship',
  imports: [CommonModule],
  templateUrl: './mentorship.component.html',
  styleUrl: './mentorship.component.css'
})
export class MentorshipComponent implements OnInit {
  mentors: User[] = [];
  mentorships: MentorshipPair[] = [];
  currentUser: User | null = null;
  selectedTab: 'find-mentor' | 'my-mentorships' = 'find-mentor';

  constructor(private mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.loadMentorshipData();
  }

  loadMentorshipData(): void {
    this.mockDataService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
    });

    this.mockDataService.getUsers().subscribe(users => {
      this.mentors = users.filter(u => u.role === UserRole.Mentor || u.mentorAvailability);
    });

    this.mockDataService.getMentorships().subscribe(mentorships => {
      this.mentorships = mentorships;
    });
  }

  selectTab(tab: 'find-mentor' | 'my-mentorships'): void {
    this.selectedTab = tab;
  }

  requestMentorship(mentorId: string): void {
    console.log('Requesting mentorship from:', mentorId);
    // Here you would send request to backend
  }
}
