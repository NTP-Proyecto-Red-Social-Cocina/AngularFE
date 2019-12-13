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
  userAux: User;
  constructor(private dialog: MatDialog, private usersService: UsersService, private postsService: PostsService) { }
  ngOnInit() {
    this.postsService.getPostUsuario().subscribe((res: any) => {
      for (let i = res.length - 1; i--;) {
        this.getUser(res[i].user_id);
        this.todosPosts.push(new PostsT(res[i], this.userAux));
      }
      console.log(this.todosPosts);
    }, err => {
      console.log(err);
    });
  }

  openDialog() {
    this.dialog.open(PostComponent);
  }

  getUser(id: number) {
    this.usersService.getUsuario(id).subscribe((res: any) => {
      this.userAux = res;
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

}
