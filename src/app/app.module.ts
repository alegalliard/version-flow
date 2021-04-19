import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ChipStoreComponent } from './shared/chip-store/chip-store.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    ChipStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
