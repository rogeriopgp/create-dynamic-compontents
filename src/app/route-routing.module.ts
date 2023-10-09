import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContainerDynamicCompComponent } from './container-dynamic-comp/container-dynamic-comp.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'container', component: ContainerDynamicCompComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
