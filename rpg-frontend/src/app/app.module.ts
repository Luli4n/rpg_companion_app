import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ElementsManagementComponent } from './elements-management/elements-management.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { ManagementDuringGameComponent } from './management-during-game/management-during-game.component';
import { CreatingGameTemplateComponent } from './creating-game-template/creating-game-template.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowsingGameTemplatesComponent } from './browsing-game-templates/browsing-game-templates.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementsManagementComponent,
    UserPanelComponent,
    ManagementDuringGameComponent,
    CreatingGameTemplateComponent,
    LoginComponent,
    RegisterComponent,
    BrowsingGameTemplatesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: UserPanelComponent },
      { path: 'manage.elements', component: ElementsManagementComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
