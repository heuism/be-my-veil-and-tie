import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { TabsGuard } from './tabs-guard/tabs.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'my-love',
        loadChildren: () =>
          import('../my-love/my-love.module').then((m) => m.MyLovePageModule),
      },
      {
        path: 'about-me',
        canActivate: [TabsGuard],
        loadChildren: () =>
          import('../about-me/about-me.module').then(
            (m) => m.AboutMePageModule
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/my-love',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/my-love',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
