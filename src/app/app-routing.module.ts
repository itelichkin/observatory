import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomePageComponent} from './pages/home-page/home-page.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {PageDefaultComponent} from './pages/page-default/page-default.component';
import {ObservatoryComponent} from './pages/home-page/observatory/observatory.component';
import {NewSpaceObjectComponent} from './pages/home-page/new-space-object/new-space-object.component';

export const routes: Routes = [
    {path: '', component: PageDefaultComponent},
    {path: 'home', component: HomePageComponent},
    {path: 'observatory', component: ObservatoryComponent},
    {path: 'new-space-object', component: NewSpaceObjectComponent},
    {path: '**', component: PageNotFoundComponent}
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

