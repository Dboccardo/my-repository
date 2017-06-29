import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(
        response => {
          this.posts = response.json();
        }, 
        error => {
          alert('Could not get the posts from the server.');
      });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.service.createPost(post)
      .subscribe(
        response => {
          post['id'] = response.json().id;
            this.posts.splice(0, 0, post);
          },
          error => {
            alert('An unexpected error occurred.');
          });
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(
        response => {
          console.log(response.json());
        },
        error => {
          alert('An unexpected error occurred.');
        });
  }

  deletePost(post) {
    this.service.deletePost(345)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: Response) => {
          if (error.status == 404)
            alert('This post has already been deleted.');
          else
            alert('An unexpected error occurred.');
        });
  }
}
