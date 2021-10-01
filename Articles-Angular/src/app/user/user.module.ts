import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleComponent } from './article/article.component';

// Import Material UI
import { MaterialDesign } from '../material/material';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'article',
        component: ArticleComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [UserComponent, DashboardComponent, ArticleComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MaterialDesign],
})
export class UserModule {}
