import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClipsRoutingModule} from './clips-routing.module';
import {ClipCardComponent} from './components/clip-card/clip-card.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    ClipCardComponent
  ],
  exports: [
    ClipCardComponent
  ],
  imports: [
    CommonModule,
    ClipsRoutingModule,
    SharedModule
  ]
})
export class ClipsModule {
}
