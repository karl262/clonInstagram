import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReelsPageRoutingModule } from './reels-routing.module';

import { ReelsPage } from './reels.page';
import {ComponentsModule} from "../dashboard/componets/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReelsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [
    ReelsPage
  ],
  exports: [

  ]
})
export class ReelsPageModule {}
