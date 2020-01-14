import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContaPageComponent } from './conta/conta-page/conta-page.component';
import { HistoricoPageComponent } from './historico/historico-page/historico-page.component';
import { MenuPageComponent } from './menu/menu-page/menu-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'conta', component: ContaPageComponent },
  { path: 'historico', component: HistoricoPageComponent },
  { path: 'menu', component: MenuPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
