import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "albuns", loadChildren: () => import("./albuns/albuns.module").then(m => m.AlbunsModule) },
  /*{ path: "airfare", loadChildren: () => import("./airfare/airfare.module").then(m => m.AirfareModule) },*/
  { path: 'index.html', loadChildren: () => import("./albuns/albuns.module").then(m => m.AlbunsModule) },
  { path: '', redirectTo: '/albuns', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
