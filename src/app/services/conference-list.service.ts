import { Injectable } from '@angular/core';
import { Conference } from '../models/conference';

@Injectable({
  providedIn: 'root'
})
export class ConferenceListService {
  private conferences: Conference[] = [
    {
      id: 1,
      title: 'Angular 21 Conference',
      description: 'Conférence sur les nouveautés d\'Angular 21',
      date: new Date('2027-11-15'),
      place: 'Tunis',
      maxParticipants: 50,
      nbParticipants: 25
    },
    {
      id: 2,
      title: 'Signals Workshop',
      description: 'Atelier sur les signaux Angular',
      date: new Date('2027-11-30'),
      place: 'Ariana',
      maxParticipants: 20,
      nbParticipants: 14
    },
    {
      id: 3,
      title: 'Web Conference',
      description: 'Conférence sur le développement web',
      date: new Date('2027-11-20'),
      place: 'Sousse',
      maxParticipants: 30,
      nbParticipants: 30
    }
  ];

  getConferences(): Conference[] {
    return this.conferences;
  }

  getFilteredConferences(searchTerm: string): Conference[] {
    if (!searchTerm) {
      return this.conferences;
    }
    const term = searchTerm.toLowerCase();
    return this.conferences.filter(conf => 
      conf.title.toLowerCase().includes(term)
    );
  }

  incrementParticipants(conferenceId: number): void {
    const conference = this.conferences.find(c => c.id === conferenceId);
    if (conference && conference.nbParticipants < conference.maxParticipants) {
      conference.nbParticipants++;
    }
  }
}
