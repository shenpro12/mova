import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DetailAnimeModalPage } from './detail-anime-modal/detail-anime-modal.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, FontAwesomeModule],
  exports: [DetailAnimeModalPage],
  declarations: [DetailAnimeModalPage],
})
export class ComponentsModule {}
