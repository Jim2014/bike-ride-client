import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CallbackComponent } from './callback/callback.component';
import { ClubsComponent } from './clubs/clubs.component';
import { ClubProfileComponent } from './club-profile/club-profile.component';
import { LiveridesComponent } from './liverides/liverides.component';
import { MessageComponent } from './message/message.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'callback', component: CallbackComponent },
  // { path: 'callback', redirectTo: 'profile' },
  { path: 'clubs', component: ClubsComponent },
  { path: 'clubprofile', component: ClubProfileComponent },
  { path: 'liverides', component: LiveridesComponent },
  { path: 'message', component: MessageComponent },
  { path: '**', redirectTo: '' }
];
