import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { ContentComponent }    from './content.component';
import { PostListComponent } from './list/post.list.component';

import { PostEditComponent } from './edit/post.edit.component';

import {ContentRoutingModule } from './content.routing-module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ContentRoutingModule
  ],
  declarations: [
    ContentComponent,
    PostListComponent,
    PostEditComponent   
  ],
  providers: [ ]
})
export class ContentModule {}
