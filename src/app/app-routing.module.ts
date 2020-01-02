import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContaPageComponent } from './conta/conta-page/conta-page.component';


const routes: Routes = [
  { path: 'conta', component: ContaPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
