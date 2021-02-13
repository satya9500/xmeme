import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbThemeModule, NbFormFieldModule } from '@nebular/theme';
import { NbSidebarModule, NbLayoutModule, NbButtonModule, NbCardModule, NbInputModule, NbWindowModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule.forRoot(), // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    NbEvaIconsModule,
    NbCardModule,
    NbInputModule,
    NbWindowModule.forRoot(),
    NbFormFieldModule,
    NbIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
