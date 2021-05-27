import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimaryFormComponent } from './Complete-Form/primary-form/primary-form.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule } from '@angular/forms';
import { ControlCampComponent } from './Complete-Form/control-camp/control-camp.component';
import { StateAndCityService } from './Complete-Form/state-and-city.service';
import { TableComponent } from './Complete-Form/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryFormComponent,
    ControlCampComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    }),
  ],
  providers: [StateAndCityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
