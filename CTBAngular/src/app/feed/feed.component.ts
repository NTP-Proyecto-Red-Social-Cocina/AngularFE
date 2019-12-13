import { PostComponent } from './../post/post.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../servicios/users.service';
import { PostsService } from '../servicios/posts.service';
import { Post } from 'src/app/modelos/post';
import { User } from '../modelos/user';

class PostsT {
  post: Post;
  usr: User;
  constructor(post: Post, user: User) {
    this.post = post;
    this.usr = user;
  }
}

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})

export class FeedComponent implements OnInit {
  @Input() todosPosts: PostsT[] = [];
  aux: Post;
  constructor(private dialog: MatDialog, private usersService: UsersService, private postsService: PostsService) { }
  ngOnInit() {
    this.postsService.getPostUsuario().subscribe((res: any) => {
      for (let i = res.length - 1; i--;) {
      this.aux = res[i];
      this.usersService.getUsuario(this.aux.user_id).subscribe((rest: any) => {
       this.todosPosts.push(new PostsT(res[i], rest));
      console.log(rest);
    }, err => {
      console.log(err);
    });   
      }
      console.log(this.todosPosts);
    }, err => {
      console.log(err);
    });
  }

  openDialog(data) {
    this.dialog.open(PostComponent, {
      data: {
        postE: data
      }
    });
  }


}
