import { Component, OnInit, Input, Inject } from '@angular/core';
import { Post } from 'src/app/modelos/post';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Input() post : Post;
  constructor( @Inject(MAT_DIALOG_DATA) public postE: any ) { }

  ngOnInit() {
    this.post = this.postE;
    console.log(this.post);
  }

  

}
