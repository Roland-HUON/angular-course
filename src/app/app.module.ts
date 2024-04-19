import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    HeroesListComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    RouterModule.forRoot(routes)
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
