import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CallbackComponent } from './callback/callback.component';
import { ClubsComponent } from './clubs/clubs.component';
import { LiveridesComponent } from './liverides/liverides.component';
import { MessageComponent } from './message/message.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'callback', redirectTo: '' },
  { path: 'clubs', component: ClubsComponent },
  { path: 'liverides', component: LiveridesComponent },
  { path: 'message', component: MessageComponent },
  { path: '**', redirectTo: '' }
];
