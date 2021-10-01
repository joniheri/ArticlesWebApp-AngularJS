import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PublicComponent } from './public/public.component';

// Import Material UI
import { MaterialDesign } from '../material/material';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [HomeComponent, PublicComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MaterialDesign],
})
export class PublicModule {}
