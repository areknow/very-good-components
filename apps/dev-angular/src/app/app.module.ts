import { AlphaButtonModule } from '@alpha-components/angular/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    AlphaButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
