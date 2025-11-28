import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InterestDomain } from '../../models/user.model';

interface OnboardingData {
  // Step 1: Personal Info
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  city: string;
  bio: string;

  // Step 2: Interests
  interests: InterestDomain[];

  // Step 3: Goals
  goals: string[];
  customGoal: string;

  // Step 4: Skills
  skills: string[];
  customSkill: string;

  // Step 5: Preferences
  mentorAvailability: boolean;
  menteeStatus: boolean;
  visibility: 'public' | 'private';
  emailNotifications: boolean;
}

@Component({
  selector: 'app-onboarding',
  imports: [CommonModule, FormsModule],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.css'
})
export class OnboardingComponent implements OnInit {
  currentStep = 1;
  totalSteps = 6;

  // Expose InterestDomain enum to template
  InterestDomain = InterestDomain;

  onboardingData: OnboardingData = {
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    city: '',
    bio: '',
    interests: [],
    goals: [],
    customGoal: '',
    skills: [],
    customSkill: '',
    mentorAvailability: false,
    menteeStatus: false,
    visibility: 'public',
    emailNotifications: true
  };

  // Predefined options
  availableInterests = [
    { value: InterestDomain.ProfessionalDevelopment, label: 'Professional Development', icon: '💼' },
    { value: InterestDomain.NetworkingCollaboration, label: 'Networking & Collaboration', icon: '🤝' },
    { value: InterestDomain.EquityInclusion, label: 'Equity & Inclusion', icon: '⚖️' },
    { value: InterestDomain.EventsResources, label: 'Events & Resources', icon: '📚' },
    { value: InterestDomain.PersonalDevelopment, label: 'Personal Development', icon: '🌱' }
  ];

  predefinedGoals = [
    'Transition to leadership role',
    'Start my own business',
    'Expand professional network',
    'Learn new technical skills',
    'Mentor other professionals',
    'Improve work-life balance'
  ];

  predefinedSkills = [
    'Leadership',
    'Project Management',
    'Public Speaking',
    'Marketing',
    'Software Development',
    'Data Analysis',
    'Design',
    'Entrepreneurship'
  ];

  countries = [
    'Romania',
    'Serbia',
    'Bulgaria',
    'Greece',
    'Albania',
    'North Macedonia',
    'Bosnia and Herzegovina',
    'Croatia',
    'Slovenia',
    'Montenegro'
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Initialize with mock data if needed
  }

  nextStep(): void {
    if (this.canProceed()) {
      if (this.currentStep < this.totalSteps) {
        this.currentStep++;
      } else {
        this.completeOnboarding();
      }
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  skipStep(): void {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  canProceed(): boolean {
    switch (this.currentStep) {
      case 1:
        return !!(this.onboardingData.firstName && this.onboardingData.lastName && this.onboardingData.email);
      case 2:
        return this.onboardingData.interests.length > 0;
      case 3:
        return this.onboardingData.goals.length > 0;
      case 4:
        return this.onboardingData.skills.length > 0;
      default:
        return true;
    }
  }

  toggleInterest(interest: InterestDomain): void {
    const index = this.onboardingData.interests.indexOf(interest);
    if (index > -1) {
      this.onboardingData.interests.splice(index, 1);
    } else {
      this.onboardingData.interests.push(interest);
    }
  }

  isInterestSelected(interest: InterestDomain): boolean {
    return this.onboardingData.interests.includes(interest);
  }

  toggleGoal(goal: string): void {
    const index = this.onboardingData.goals.indexOf(goal);
    if (index > -1) {
      this.onboardingData.goals.splice(index, 1);
    } else {
      this.onboardingData.goals.push(goal);
    }
  }

  isGoalSelected(goal: string): boolean {
    return this.onboardingData.goals.includes(goal);
  }

  addCustomGoal(): void {
    if (this.onboardingData.customGoal.trim()) {
      this.onboardingData.goals.push(this.onboardingData.customGoal.trim());
      this.onboardingData.customGoal = '';
    }
  }

  removeGoal(goal: string): void {
    const index = this.onboardingData.goals.indexOf(goal);
    if (index > -1) {
      this.onboardingData.goals.splice(index, 1);
    }
  }

  toggleSkill(skill: string): void {
    const index = this.onboardingData.skills.indexOf(skill);
    if (index > -1) {
      this.onboardingData.skills.splice(index, 1);
    } else {
      this.onboardingData.skills.push(skill);
    }
  }

  isSkillSelected(skill: string): boolean {
    return this.onboardingData.skills.includes(skill);
  }

  addCustomSkill(): void {
    if (this.onboardingData.customSkill.trim()) {
      this.onboardingData.skills.push(this.onboardingData.customSkill.trim());
      this.onboardingData.customSkill = '';
    }
  }

  removeSkill(skill: string): void {
    const index = this.onboardingData.skills.indexOf(skill);
    if (index > -1) {
      this.onboardingData.skills.splice(index, 1);
    }
  }

  completeOnboarding(): void {
    console.log('Onboarding completed with data:', this.onboardingData);
    // Here you would normally save the data to the backend
    // For now, we'll just redirect to the home page
    this.router.navigate(['/']);
  }

  getProgressPercentage(): number {
    return Math.round((this.currentStep / this.totalSteps) * 100);
  }

  getInterestLabel(interest: InterestDomain): string {
    return this.availableInterests.find(i => i.value === interest)?.label || '';
  }
}
