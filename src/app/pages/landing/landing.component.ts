import {Component, inject} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {IonContent, IonHeader, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {RouterOutlet} from '@angular/router';
import {TranslocoService} from '@jsverse/transloco';
import {LandingFooterComponent} from './landing-footer/landing-footer.component';
import {LogoComponent} from '../../components/logo/logo.component';
import {AnnouncementBannerComponent} from '../../components/announcement-banner/announcement-banner.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    RouterOutlet,
    LandingFooterComponent,
    LogoComponent,
    AnnouncementBannerComponent,
  ],
})
export class LandingComponent {
  private mediaMatcher = inject(MediaMatcher);
  isMobile = this.mediaMatcher.matchMedia('(max-width: 768px)');

  // TODO: remove this when i18n is supported
  private transloco = inject(TranslocoService);
  lastActiveLang = this.transloco.getActiveLang();

  ionViewWillEnter() {
    this.transloco.setActiveLang('en');
  }

  ionViewWillLeave() {
    this.transloco.setActiveLang(this.lastActiveLang);
  }
}
