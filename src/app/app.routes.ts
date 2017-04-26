
import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {CallbackComponent} from './callback/callback.component';
import {ClubsComponent} from './clubs/clubs.component';
import { ClubProfileComponent } from './club-profile/club-profile.component';
import {LiveridesComponent} from './liverides/liverides.component';
import {MessageComponent} from './message/message.component';
import {MycanactivateGuard} from "./mycanactivate.guard";


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [MycanactivateGuard]},
  {path: 'callback', component: CallbackComponent},
  // { path: 'callback', redirectTo: 'profile' },

  {path: 'clubs', component: ClubsComponent, canActivate: [MycanactivateGuard]},
  { path: 'clubprofile', component: ClubProfileComponent },
  {path: 'liverides', component: LiveridesComponent, canActivate: [MycanactivateGuard]},
  {path: 'message', component: MessageComponent, canActivate: [MycanactivateGuard]},
  {path: '**', redirectTo: ''}

];
