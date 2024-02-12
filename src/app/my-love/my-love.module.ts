import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyLovePage } from './my-love.page';

import { Tab1PageRoutingModule } from './my-love-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule
  ],
  declarations: [MyLovePage]
})
export class MyLovePageModule {}
