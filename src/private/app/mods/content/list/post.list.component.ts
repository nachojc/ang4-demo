import { Component } from '@angular/core';


@Component({
  selector: 'post-list',
  template: `
    <div class="cards-container">
       <md-card *ngFor="let post of posts">
  
       <md-icon md-list-avatar class="icon-post md-36">book</md-icon>
      
       <div>
        <md-card-title>{{post.title}}</md-card-title>
       <md-card-subtitle> {{post.date | date}} </md-card-subtitle>
       </div>
        
      </md-card>
    </div>
    `,
  styleUrls: ['./post.list.component.scss']
})
export class PostListComponent { 
    posts: any = [
      {
        id: '',
        title:'Liberbank comienza a operar con oficinas franquiciadas',
        date: new Date('1/1/17'),
        text: '',
        files: []           
      },
      {
        id: '',
        title:'Liberbank presenta el producto Prestamo Ahora Tú',
        date: new Date('1/2/16'),
        text: '',
        files: []
      },
      {
        id: '',
        title:'Liberbank presenta su nueva aplicación móvil',
        date: new Date('10/2/16'),
        text: '',
        files: []
      }
    ]

}