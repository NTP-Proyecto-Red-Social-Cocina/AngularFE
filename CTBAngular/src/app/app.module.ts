import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersService} from './servicios/users.service';
import {PostsService} from './servicios/posts.service';
import {ComentariosService} from './servicios/comentarios.service';
import {CalificacionsService} from './servicios/calificacions.service';
import {MatDialogModule} from '@angular/material';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { Page404Component } from './components/page404/page404.component';
import { AdminComponent } from './components/admin/admin.component';
import {FormsModule} from '@angular/forms';
import { FeedComponent } from './feed/feed.component';
import { PostComponent } from './post/post.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import { ListaRecetasComponent } from './recetas/lista-recetas/lista-recetas.component';
import { RecetaFormComponent } from './recetas/receta-form/receta-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



const appRoutes: Routes = [

  {path: '', redirectTo:'/feed', pathMatch: 'full' },
  {path: 'perfil', component: ListaRecetasComponent},
  {path: 'feed', component: FeedComponent},
   { path: 'home', component: HomeComponent },
  { path: 'user/login', component: LoginComponent },
  { path: 'user/register', component: RegisterComponent },
  { path: '**', component: Page404Component }

];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    Page404Component,
    AdminComponent,
    FeedComponent,
    PostComponent,
    NavbarComponent,
    ListaRecetasComponent,
    RecetaFormComponent,
  ],
  entryComponents: [
    PostComponent,
    RecetaFormComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MatDialogModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [
    UsersService,
    PostsService,
    ComentariosService,
    CalificacionsService,
    FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
