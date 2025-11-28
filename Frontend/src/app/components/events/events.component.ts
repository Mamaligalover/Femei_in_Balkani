import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../services/mock-data.service';
import { Event, EventType, EventFormat } from '../../models/event.model';

@Component({
  selector: 'app-events',
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent implements OnInit {
  allEvents: Event[] = [];
  filteredEvents: Event[] = [];
  selectedFilter: string = 'all';

  // Expose enums to template
  EventType = EventType;
  EventFormat = EventFormat;

  constructor(private mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.mockDataService.getEvents().subscribe(events => {
      this.allEvents = events;
      this.filteredEvents = events;
    });
  }

  filterEvents(filter: string): void {
    this.selectedFilter = filter;
    if (filter === 'all') {
      this.filteredEvents = this.allEvents;
    } else {
      this.filteredEvents = this.allEvents.filter(e =>
        (e.type as string) === filter || (e.format as string) === filter
      );
    }
  }

  registerForEvent(eventId: string): void {
    console.log('Registering for event:', eventId);
    // Here you would send registration to backend
  }

  getEventTypeLabel(type: EventType): string {
    const labels: Record<EventType, string> = {
      [EventType.Webinar]: 'Webinar',
      [EventType.Workshop]: 'Workshop',
      [EventType.Conference]: 'Conferință',
      [EventType.Networking]: 'Networking',
      [EventType.MentorSession]: 'Sesiune Mentorat'
    };
    return labels[type];
  }

  getEventFormatLabel(format: EventFormat): string {
    const labels: Record<EventFormat, string> = {
      [EventFormat.Online]: 'Online',
      [EventFormat.Offline]: 'Fizic',
      [EventFormat.Hybrid]: 'Hibrid'
    };
    return labels[format];
  }
}
