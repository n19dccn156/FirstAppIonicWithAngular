import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabbarComponent } from './tabbar/tabbar.component';
import { IonicModule } from '@ionic/angular';

const COMPONENTS = [
    TabbarComponent
];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
