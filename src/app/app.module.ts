import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlmMenuComponent } from './blm-menu/blm-menu.component';
import { BlmMapComponent } from './blm-map/blm-map.component';
import { BlmEmailComponent } from './blm-email/blm-email.component';
import {FormsModule} from '@angular/forms';
import { BlmHomeComponent } from './blm-home/blm-home.component';


@NgModule({
  declarations: [
    AppComponent,
    BlmMenuComponent,
    BlmMapComponent,
    BlmEmailComponent,
    BlmHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
