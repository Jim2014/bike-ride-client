<<<<<<< HEAD
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CallbackComponent } from './callback/callback.component';
import { ClubsComponent } from './clubs/clubs.component';
import { ClubProfileComponent } from './club-profile/club-profile.component';
import { LiveridesComponent } from './liverides/liverides.component';
import { MessageComponent } from './message/message.component';
=======
import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {CallbackComponent} from './callback/callback.component';
import {ClubsComponent} from './clubs/clubs.component';
import {LiveridesComponent} from './liverides/liverides.component';
import {MessageComponent} from './message/message.component';
import {MycanactivateGuard} from "./mycanactivate.guard";
>>>>>>> 0164e4cd029e27c33e906fce1621285907f6bd39

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [MycanactivateGuard]},
  {path: 'callback', component: CallbackComponent},
  // { path: 'callback', redirectTo: 'profile' },
<<<<<<< HEAD
  { path: 'clubs', component: ClubsComponent },
  { path: 'clubprofile', component: ClubProfileComponent },
  { path: 'liverides', component: LiveridesComponent },
  { path: 'message', component: MessageComponent },
  { path: '**', redirectTo: '' }
=======
  {path: 'clubs', component: ClubsComponent, canActivate: [MycanactivateGuard]},
  {path: 'liverides', component: LiveridesComponent, canActivate: [MycanactivateGuard]},
  {path: 'message', component: MessageComponent, canActivate: [MycanactivateGuard]},
  {path: '**', redirectTo: ''}
>>>>>>> 0164e4cd029e27c33e906fce1621285907f6bd39
];
