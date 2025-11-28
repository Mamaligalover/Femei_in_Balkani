import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../services/mock-data.service';
import { User, InterestDomain } from '../../models/user.model';
import { MentorshipPair } from '../../models/mentorship.model';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  currentUser: User | null = null;
  mentorships: MentorshipPair[] = [];
  isEditMode = false;

  constructor(private mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile(): void {
    this.mockDataService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
    });

    this.mockDataService.getMentorships().subscribe(mentorships => {
      this.mentorships = mentorships;
    });
  }

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }

  saveProfile(): void {
    this.isEditMode = false;
    // Here you would save to backend
  }

  getInterestDomainLabel(domain: InterestDomain): string {
    const labels: Record<InterestDomain, string> = {
      [InterestDomain.ProfessionalDevelopment]: 'Dezvoltare Profesională',
      [InterestDomain.NetworkingCollaboration]: 'Rețele și Colaborare',
      [InterestDomain.EquityInclusion]: 'Echitate și Incluziune',
      [InterestDomain.EventsResources]: 'Evenimente și Resurse',
      [InterestDomain.PersonalDevelopment]: 'Dezvoltare Personală'
    };
    return labels[domain] || domain;
  }
}
