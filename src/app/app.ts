import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Navbar } from './components/navbar/navbar';
import { Profile } from './components/profile/profile';
import { Friends } from './components/friends/friends';
import { Notifications } from './components/notifications/notifications';
import { ConferenceList } from './components/conference-list/conference-list';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Navbar, Profile, Friends, Notifications, ConferenceList, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('platformConf');
}
