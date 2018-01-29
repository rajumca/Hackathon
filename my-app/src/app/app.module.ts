import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SpeedLimitService } from './speed-limit.service';
import { SpeedComponent } from './speed/speed.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SpeedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SpeedLimitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
