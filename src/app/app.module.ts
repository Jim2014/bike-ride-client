import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';

import {ROUTES} from './app.routes';

import {AuthService} from './auth/auth.service';
import {ProfileComponent} from './profile/profile.component';
import {CallbackComponent} from './callback/callback.component';
import {ClubsComponent} from './clubs/clubs.component';
import {LiveridesComponent} from './liverides/liverides.component';
import {MessageComponent} from './message/message.component';
import { ProfileService } from './profile.service';
import { WindowRef } from './WindowRef';
import { LiveridesService } from './liverides.service';
import { ClubsService } from './clubs.service';
import { MessageService } from './message.service';
import { ClubProfileComponent } from './club-profile/club-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    CallbackComponent,
    ClubsComponent,
    LiveridesComponent,
    MessageComponent,
    ClubProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    
  ],
  providers: [AuthService, ProfileService,WindowRef,LiveridesService,
  MessageService,ProfileService, ClubsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
