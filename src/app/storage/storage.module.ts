import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoragePage } from './storage.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { StoragePageRoutingModule } from './storage-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    StoragePageRoutingModule
  ],
  declarations: [StoragePage]
})
export class StoragePageModule {}
