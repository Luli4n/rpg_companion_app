import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ElementsManagementComponent } from './elements-management/elements-management.component';
import { UserPanelComponent } from './user-panel/user-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    ElementsManagementComponent,
    UserPanelComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: UserPanelComponent },
      { path: 'manage.elements', component: ElementsManagementComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
