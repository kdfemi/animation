import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
    .subscribe(fetchedPosts => (this.posts = fetchedPosts));
  }

}
