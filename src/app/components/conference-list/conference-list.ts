import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenceListService } from '../../services/conference-list.service';
import { Conference } from '../../models/conference';

@Component({
  selector: 'app-conference-list',
  imports: [CommonModule],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  conferences = signal<Conference[]>([]);
  searchTerm = signal('');

  constructor(private conferenceListService: ConferenceListService) {
    this.conferences.set(this.conferenceListService.getConferences());
  }

  onSearchChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchTerm.set(value);
    this.conferences.set(this.conferenceListService.getFilteredConferences(value));
  }

  register(conferenceId: number): void {
    this.conferenceListService.incrementParticipants(conferenceId);
    this.conferences.set(this.conferenceListService.getFilteredConferences(this.searchTerm()));
  }

  getButtonClass(conference: Conference): string {
    const placesLeft = conference.maxParticipants - conference.nbParticipants;
    if (placesLeft === 0) return 'btn-red';
    if (placesLeft < 10) return 'btn-orange';
    return 'btn-green';
  }

  isConferenceFull(conference: Conference): boolean {
    return conference.nbParticipants >= conference.maxParticipants;
  }
}
