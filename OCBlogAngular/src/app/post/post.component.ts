import {Component, Input, OnInit} from '@angular/core';
import { Post } from '../models/Post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  @Input() index : number;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  getLike() {
    this.postService.getLike(this.index);
  }

  getDislike() {
    this.postService.getDislike(this.index);
  }

}
