import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard }                from '../../auth-guard.service';

import { ContentComponent }    from './content.component';
import { PostListComponent } from './list/post.list.component';
import { PostEditComponent } from './edit/post.edit.component';

const contentRoutes: Routes = [
  { 
      path: '',  component: ContentComponent,
      children:[
          {path:'', component: PostListComponent},
          {path:'edit', component: PostEditComponent},
          {path:'edit/:id', component: PostEditComponent}
          
      ] 
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(contentRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContentRoutingModule { }

