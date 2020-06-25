import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormParentComponent } from './form-parent/form-parent.component';
import { FormChildComponent } from './form-child/form-child.component';

const routes: Routes = [
  {
    path : '', 
    redirectTo : '/form-parent',
    pathMatch : 'full'
  },
  {
    path : 'form-parent',
    component : FormParentComponent,
    children : [
      {
      path : 'form-child',
      component : FormChildComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  FormParentComponent,
  FormChildComponent
]