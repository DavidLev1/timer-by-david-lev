import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { CountDownComponent } from './count-down/count-down.component';
import { PipesPipe } from './pipes.pipe';
import { PadTo2DigitsPipe } from './pipes/pad-to2-digits.pipe';


const appRoutes: Routes = [
  { path: '', component: TimerComponent},
  { path: 'count-down', component: CountDownComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    CountDownComponent,
    PipesPipe,
    PadTo2DigitsPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
