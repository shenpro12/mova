import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BaseComponent } from './base/base.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, FontAwesomeModule],
  declarations: [BaseComponent],
})
export class LayoutModule {}
