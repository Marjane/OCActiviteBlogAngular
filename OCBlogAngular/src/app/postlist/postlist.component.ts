import {Component, Input, OnInit} from '@angular/core';
import { Post } from '../models/Post.model';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {
  @Input() posts: Array<Post>;

  constructor() { }

  ngOnInit() {}
}
