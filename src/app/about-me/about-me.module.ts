import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutMePage } from './about-me.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AboutMeRoutingModule } from './about-me-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AboutMeRoutingModule
  ],
  declarations: [AboutMePage]
})
export class AboutMePageModule {}
