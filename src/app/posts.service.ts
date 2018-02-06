import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllPosts() {
    return this.http.get('/api/posts')
      .map(res => res.json());
  }
  // Get all posts from the API
  getPostBasedOnID(postId) {
    return this.http.get('/api/posts/' + postId)
      .map(res => res.json());
  }

  getPostComments(postId) {
    return this.http.get(`/api/posts/${postId}/comments`)
      .map(res => res.json());
  }

  updatePost(params) {
    return this.http.put(`/api/posts/update`, params.request)
      .map(res => res.json());
  }
}