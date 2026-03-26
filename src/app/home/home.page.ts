import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  IonContent, IonHeader, IonToolbar, IonTitle,
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonToolbar, IonTitle,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
    IonButton,
    RouterLink
  ]
})
export class HomePage {}