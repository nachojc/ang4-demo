import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  template: `
    <form class="liber-news-form">
      <section>
        <md-icon>chrome_reader_mode</md-icon>
        <div class="right-side">
          <h3>Noticia</h3>
          <md-input-container>
            <input md-input placeholder="Título de noticia">    
          </md-input-container>
          <md-input-container>
            <input md-input placeholder="Cuerpo de la noticia">   
          </md-input-container>
        </div>
      </section>
      <section>
      <md-icon>attachment</md-icon>
        <div>
          <h3>Archivos adjuntos</h3>
          <button md-button color="accent">
            ADJUNTAR ARCHIVO
          </button>
        </div>
      </section>

      <div class="bottom-bar">
          <button md-button>CANCELAR</button>
          <button md-raised-button color="accent">PUBLICAR</button>
      </div>
    </form>
  `,
  styleUrls: ['./post.edit.component.scss']
})
export class PostEditComponent implements OnInit, OnDestroy{
  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; 
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

 }