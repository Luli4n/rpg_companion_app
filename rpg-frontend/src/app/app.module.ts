import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ElementsManagementComponent } from './elements-management/elements-management.component';
import { ManagementDuringGameComponent } from './management-during-game/management-during-game.component';
import { CreatingGameTemplateComponent } from './creating-game-template/creating-game-template.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementsManagementComponent,
    ManagementDuringGameComponent,
    CreatingGameTemplateComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
