import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'panel',
        loadChildren: () => import('../panel/panel.module').then(m => m.PanelPageModule)
      },
      {
        path: 'entries',
        loadChildren: () => import('../entries/entries.module').then(m => m.EntriesPageModule)
      },
      {
        path: 'storage',
        loadChildren: () => import('../storage/storage.module').then(m => m.StoragePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/panel',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/panel',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
