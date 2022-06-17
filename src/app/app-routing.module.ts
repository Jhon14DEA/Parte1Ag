import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { ListadoComponent } from './pages/listado/listado.component';

const routes: Routes = [
  {path: "pages/acercade", component: AcercadeComponent},
  {path: "pages/contactos", component: ContactosComponent},
  {path: "pages/listado", component: ListadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
