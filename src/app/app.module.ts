import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DynamicCompComponent } from './dynamic-comp/dynamic-comp.component';
import { RouteRoutingModule } from './route-routing.module';
import { HomeComponent } from './home/home.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from '@angular/material/tooltip';
import { ElementsDynamicCompComponent } from './elements-dynamic-comp/elements-dynamic-comp.component';
import { DynamicCompDeleteButtonComponent } from './dynamic-comp-delete-button/dynamic-comp-delete-button.component';


@NgModule({
  declarations: [
    AppComponent,
    DynamicCompComponent,
    HomeComponent,
    FormExampleComponent,
    ElementsDynamicCompComponent,
    DynamicCompDeleteButtonComponent
  ],
  imports: [
    BrowserModule,
    RouteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
