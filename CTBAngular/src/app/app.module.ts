import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{UsersService} from './servicios/users.service';
import{PostsService} from './servicios/posts.service';
import{ComentariosService} from './servicios/comentarios.service';
import{CalificacionsService} from './servicios/calificacions.service';
import {MatDialogModule} from "@angular/material";
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostComponent } from './post/post.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    PostComponent,
    NavbarComponent,
  ],
  entryComponents:[PostComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [UsersService,PostsService,ComentariosService,CalificacionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
