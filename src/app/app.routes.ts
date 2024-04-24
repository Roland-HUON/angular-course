import {Routes, RouterModule} from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OpenCloseComponent } from './open-close/open-close.component';

export const routes : Routes = [
    {path: 'crisis-list', component: CrisisListComponent},
    {path: 'heroes-list', component: HeroesListComponent},
    {path: 'open-close', component: OpenCloseComponent},
    {path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];