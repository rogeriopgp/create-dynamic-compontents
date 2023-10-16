import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormExampleComponent } from './form-example/form-example.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'form', component: FormExampleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
