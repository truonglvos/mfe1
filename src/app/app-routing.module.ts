import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TComponent } from './components/t.component';

const routes: Routes = [
  {
    path: '',
    component: TComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
