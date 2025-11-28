import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MockDataService } from '../../services/mock-data.service';
import { User } from '../../models/user.model';
import { Event } from '../../models/event.model';
import { Content } from '../../models/content.model';
import { Recommendation } from '../../models/recommendation.model';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  currentUser: User | null = null;
  recommendations: Recommendation[] = [];
  upcomingEvents: Event[] = [];
  featuredContent: Content[] = [];
  recommendedUsers: User[] = [];

  constructor(private mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.mockDataService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
      if (user) {
        this.mockDataService.getRecommendations(user.id).subscribe(recs => {
          this.recommendations = recs;
        });
      }
    });

    this.mockDataService.getEvents().subscribe(events => {
      this.upcomingEvents = events.slice(0, 3);
    });

    this.mockDataService.getContent().subscribe(content => {
      this.featuredContent = content.slice(0, 3);
    });

    this.mockDataService.getUsers().subscribe(users => {
      this.recommendedUsers = users.slice(0, 3);
    });
  }
}
