import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Post } from '../models/Post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-showpostlist',
  templateUrl: './showpostlist.component.html',
  styleUrls: ['./showpostlist.component.scss']
})
export class ShowpostlistComponent implements OnInit, OnDestroy {
  posts: Post[];
  postsSubscription: Subscription;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postsSubscription = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.showPostsSubject();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
