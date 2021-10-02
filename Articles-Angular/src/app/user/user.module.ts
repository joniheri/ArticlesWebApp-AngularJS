import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Import Material UI
import { MaterialDesign } from '../material/material';

// Component Pages
import { ArticleComponent } from './article/article.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { DetailProductComponent } from './detail-product/detail-product.component';

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
      {
        path: 'product',
        component: ProductComponent,
      },
      {
        path: 'add-product',
        component: AddProductComponent,
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
    ProductComponent,
    AddProductComponent,
    DetailProductComponent,
    DetailArticleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    FormsModule,
  ],
})
export class UserModule {}
