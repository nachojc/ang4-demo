import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  templateUrl: './content.component.html',
  styleUrls:['./content.component.scss']
})
export class ContentComponent implements OnInit{
  id: number;
  title:string = "Listado de noticias";
  hideAdd:boolean=false;


  constructor(private route: Router) {
    route.events.subscribe((val)=>{
      this.hideAdd=false;
      // if (val.url=== "/main/edit"){
      //   this.hideAdd=true;
      //   this.title = 'Nueva noticia';
      // } else if(val.url === '/main') {
      //   this.title = "Listado de noticias";
      // }
    })
  }

  ngOnInit() {
    this.id=1;
  }
  
 }