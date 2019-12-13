import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PostsService } from '../../servicios/posts.service';
import { Post } from 'src/app/modelos/post';



@Component({
  selector: 'app-receta-form',
  templateUrl: './receta-form.component.html',
  styleUrls: ['./receta-form.component.css']
})
export class RecetaFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal, private postsService: PostsService) { }

  ngOnInit() {
  }

  saveTodo(post) {
    console.log(post);
    this.postsService.createPost(new Post(post.contenido, post.titulo,
      post.foto
      , post.video, 69));

  }


}
