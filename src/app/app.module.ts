import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LottieAnimationViewModule } from 'lottie-angular2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypewriterComponent } from './components/typewriter/typewriter.component';

@NgModule({
  declarations: [
    AppComponent,
    TypewriterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieAnimationViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
