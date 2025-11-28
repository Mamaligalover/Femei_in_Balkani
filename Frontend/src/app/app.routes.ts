import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MentorshipComponent } from './components/mentorship/mentorship.component';
import { EventsComponent } from './components/events/events.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { OnboardingComponent } from './components/onboarding/onboarding.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'onboarding', component: OnboardingComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'mentorship', component: MentorshipComponent },
  { path: 'events', component: EventsComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: '**', redirectTo: '' }
];
