import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import{UsersService} from './servicios/users.service';
import{PostsService} from './servicios/posts.service';
import{ComentariosService} from './servicios/comentarios.service';
import{CalificacionsService} from './servicios/calificacions.service';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UsersService,PostsService,ComentariosService,CalificacionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
