import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomePageComponent} from './pages/home-page/home-page.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {PageDefaultComponent} from './pages/page-default/page-default.component';
import {ObservatoryComponent} from './pages/home-page/observatory/observatory.component';
import {SpaceObjectsListComponent} from './pages/home-page/space-objects-list/space-objects-list.component';
import {GalaxyComponent} from './pages/home-page/observatory/galaxy/galaxy.component';
import {SpaceSystemComponent} from './pages/home-page/observatory/galaxy/space-system/space-system.component';
import {ModifySpaceObjectComponent} from './pages/home-page/space-objects-list/modify-space-object/modify-space-object.component';

export const routes: Routes = [
    {path: '', component: PageDefaultComponent},
    {path: 'home', component: HomePageComponent},
    /*  {
        path: 'observatory',
        component: ObservatoryComponent,
        children: [
          {
            path: 'galaxy/:id',
            component: GalaxyComponent,
            children: [
              {
                path: 'system/:id',
                component: SpaceSystemComponent
              }
            ]
          },
        ]
      },*/
    {path: 'observatory', component: ObservatoryComponent},
    {path: 'observatory/galaxy/:id', component: GalaxyComponent},
    {path: 'observatory/galaxy/:id/system/:id', component: SpaceSystemComponent},
    {path: 'space-objects-list', component: SpaceObjectsListComponent},
    {path: 'space-objects-list/:type/:id/:action', component: ModifySpaceObjectComponent},
    {path: 'space-objects-list/:new', component: ModifySpaceObjectComponent},
    {path: '**', component: PageNotFoundComponent}
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

