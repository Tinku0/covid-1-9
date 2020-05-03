import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CovidserviceService } from './covidservice.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule , ReactiveFormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CovidserviceService]
})
export class AppModule { }
