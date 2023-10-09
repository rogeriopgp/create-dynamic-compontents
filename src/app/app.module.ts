import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DynamicCompComponent } from './dynamic-comp/dynamic-comp.component';
import { RouteRoutingModule } from './route-routing.module';
import { ContainerDynamicCompComponent } from './container-dynamic-comp/container-dynamic-comp.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicCompComponent,
    ContainerDynamicCompComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouteRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
