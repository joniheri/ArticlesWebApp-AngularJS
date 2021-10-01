import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Import Material UI
import { MaterialDesign } from '../material/material';

// Component Pages
import { ArticleComponent } from './article/article.component';
import { AddArticleComponent } from './add-article/add-article.component';

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
      {
        path: 'add-article',
        component: AddArticleComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    UserComponent,
    DashboardComponent,
    ArticleComponent,
    AddArticleComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), MaterialDesign],
})
export class UserModule {}
