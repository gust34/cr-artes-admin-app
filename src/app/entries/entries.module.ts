import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EntriesPage } from './entries.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { EntriesPageRoutingModule } from './entries-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    EntriesPageRoutingModule
  ],
  declarations: [EntriesPage]
})
export class EntriesPageModule {}
