import {Component} from '@angular/core';
import {IonToolbar, IonTitle} from '@ionic/angular/standalone';

@Component({
  selector: 'app-announcement-banner',
  standalone: true,
  imports: [IonToolbar, IonTitle],
  templateUrl: './announcement-banner.component.html',
  styleUrl: './announcement-banner.component.scss',
})
export class AnnouncementBannerComponent {}
