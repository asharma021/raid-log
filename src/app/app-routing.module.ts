import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveListComponent } from './active-list/active-list.component';
import { DoneListComponent } from './done-list/done-list.component';

const routes: Routes = [
  { path: 'active-list', component: ActiveListComponent },
  { path: 'done-list', component: DoneListComponent },
  { path: '', redirectTo: '/active-list', pathMatch: 'full' } // Default route to Active List
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
