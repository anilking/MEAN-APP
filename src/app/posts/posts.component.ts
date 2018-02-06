import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  // instantiate posts to an empty array
  posts: any = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.postsService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  getPostBasedId(postId){
     // Retrieve posts from the API based on post id
     this.postsService.getPostBasedOnID(postId).subscribe(post => {
        console.log("post based on post ID", post);
      });

      this.postsService.getPostComments(postId).subscribe(post => {
          console.log("post Comments", post);
      });
      let params = {
        request: {
          id: '1',
          token: 'Anil'
        }
      }
      this.postsService.updatePost(params).subscribe(post => {
        console.log("Update Post", post);
    });

  }
}