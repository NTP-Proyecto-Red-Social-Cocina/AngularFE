import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RecetaFormComponent } from '../receta-form/receta-form.component';
import { PostComponent } from '../../post/post.component';
import { MatDialog } from '@angular/material';
import { User } from '../../modelos/user';
import { UsersService } from '../../servicios/users.service';
import { PostsService } from '../../servicios/posts.service';
import { Post } from 'src/app/modelos/post';


@Component({
  selector: 'app-lista-recetas',
  templateUrl: './lista-recetas.component.html',
  styleUrls: ['./lista-recetas.component.css']
})

export class ListaRecetasComponent implements OnInit {
  @Input() usuario: User;
  @Input() posts: Post[];
  @Input() id = 69;
  constructor(private modalService: NgbModal, private dialog: MatDialog,
              private usersService: UsersService, private postsService: PostsService) { }

  ngOnInit() {
    this.usersService.getUsuario(this.id).subscribe((res: any) => {
      this.usuario = res;
      console.log(this.usuario);
    }, err => {
      console.log(err);
    });

    this.postsService.getPostUsuario().subscribe((res: any) => {
      this.posts = res;
      console.log(this.posts);
      for (let i = this.posts.length - 1; i--;) {
        if (this.posts[i].user_id !== this.id) { this.posts.splice(i, 1); }
      }
    }, err => {
      console.log(err);
    });
  }

  clickAddReceta() {
    const modal = this.modalService.open(RecetaFormComponent);
  }

  openDialog() {
    this.dialog.open(PostComponent);
  }

}
