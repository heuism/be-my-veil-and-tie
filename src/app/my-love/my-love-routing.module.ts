import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyLovePage } from './my-love.page';

const routes: Routes = [
  {
    path: '',
    component: MyLovePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
