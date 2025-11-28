import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../services/mock-data.service';
import { Content, ContentType } from '../../models/content.model';

@Component({
  selector: 'app-resources',
  imports: [CommonModule],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css'
})
export class ResourcesComponent implements OnInit {
  allContent: Content[] = [];
  filteredContent: Content[] = [];
  selectedFilter: string = 'all';

  // Expose enum to template
  ContentType = ContentType;

  constructor(private mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.loadResources();
  }

  loadResources(): void {
    this.mockDataService.getContent().subscribe(content => {
      this.allContent = content;
      this.filteredContent = content;
    });
  }

  filterContent(filter: string): void {
    this.selectedFilter = filter;
    if (filter === 'all') {
      this.filteredContent = this.allContent;
    } else {
      this.filteredContent = this.allContent.filter(c => (c.type as string) === filter);
    }
  }

  likeContent(contentId: string): void {
    console.log('Liking content:', contentId);
    // Here you would send like to backend
  }

  getContentTypeLabel(type: ContentType): string {
    const labels: Record<ContentType, string> = {
      [ContentType.Article]: 'Articol',
      [ContentType.Guide]: 'Ghid',
      [ContentType.Video]: 'Video',
      [ContentType.Podcast]: 'Podcast',
      [ContentType.Resource]: 'Resursă'
    };
    return labels[type];
  }

  getContentTypeIcon(type: ContentType): string {
    const icons: Record<ContentType, string> = {
      [ContentType.Article]: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      [ContentType.Guide]: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
      [ContentType.Video]: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
      [ContentType.Podcast]: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z',
      [ContentType.Resource]: 'M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z'
    };
    return icons[type];
  }
}
