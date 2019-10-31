import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{UsersService} from './servicios/users.service';
import{PostsService} from './servicios/posts.service';
import{ComentariosService} from './servicios/comentarios.service';
import{CalificacionsService} from './servicios/calificacions.service';

import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import { ListaRecetasComponent } from './recetas/lista-recetas/lista-recetas.component';
import { RecetaFormComponent } from './recetas/receta-form/receta-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ListaRecetasComponent,
    RecetaFormComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [UsersService,PostsService,ComentariosService,CalificacionsService],
  bootstrap: [AppComponent],
  entryComponents: [RecetaFormComponent]
})
export class AppModule { }
