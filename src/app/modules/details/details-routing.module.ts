import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsComponent } from './components/details/details.component';
// import { AuthGuard } from 'src/app/shared/guards/auth.guard';
// import { AuthGuard } from '../../shared/guards/auth.guard';
import { AuthGuard } from '@app/guards/auth.guard';

const routes: Routes = [
  {
    // path: 'details/:id',
    // component: DetailsComponent,
    // canActivate: [AuthGuard],
    // 'details/:id'
    // '/:id
    path: ':id',
    component: DetailsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsRoutingModule {}
