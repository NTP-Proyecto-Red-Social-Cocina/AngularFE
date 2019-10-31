import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{UsersService} from './servicios/users.service';
import{PostsService} from './servicios/posts.service';
import{ComentariosService} from './servicios/comentarios.service';
import{CalificacionsService} from './servicios/calificacions.service';
import {MatDialogModule} from "@angular/material";
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { PostComponent } from './post/post.component';
import { NavbarComponent } from './navbar/navbar.component';

import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import { ListaRecetasComponent } from './recetas/lista-recetas/lista-recetas.component';
import { RecetaFormComponent } from './recetas/receta-form/receta-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const appRoutes: Routes = [

  {path: '', redirectTo:'/feed', pathMatch: 'full' },
  {path: 'perfil', component: ListaRecetasComponent},
  {path: 'feed', component: FeedComponent}

];

@NgModule({
  declarations: [
    AppComponent,

    FeedComponent,
    PostComponent,
    NavbarComponent,

    ListaRecetasComponent,
    RecetaFormComponent


  ],
  entryComponents:[PostComponent,RecetaFormComponent],
  imports: [
    BrowserModule,

    BrowserAnimationsModule,
    MatDialogModule,

    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UsersService,PostsService,ComentariosService,CalificacionsService],
  bootstrap: [AppComponent],
})
export class AppModule { }
