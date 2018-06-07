import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Post } from '../models/Post.model';

@Injectable()
export class PostService {
  postsSubject = new Subject<Post[]>();

  private posts =[
    new Post(
      'Mon premier post',
      'Accenderat super his incitatum propositum ad nocendum aliqua mulier vilis,\n' +
      '    quae ad palatium ut poposcerat intromissa insidias ei latenter obtendi prodiderat a militibus obscurissimis.\n' +
      '    quam Constantina exultans ut in tuto iam locata mariti salute muneratam vehiculoque inpositam per regiae ianuas emisit in publicum,\n' +
      '    ut his inlecebris alios quoque ad indicanda proliceret paria vel maiora.',
      0,
      new Promise((resolve, reject) => {const date = new Date(); setTimeout(()=>{resolve(date);}, 1000);})
    ),
    new Post(
      'Mon second post',
      'Accenderat super his incitatum propositum ad nocendum aliqua mulier vilis,\n' +
      '    quae ad palatium ut poposcerat intromissa insidias ei latenter obtendi prodiderat a militibus obscurissimis.\n' +
      '    quam Constantina exultans ut in tuto iam locata mariti salute muneratam vehiculoque inpositam per regiae ianuas emisit in publicum,\n' +
      '    ut his inlecebris alios quoque ad indicanda proliceret paria vel maiora.',
      0,
      new Promise((resolve, reject) => {const date = new Date();setTimeout(()=>{resolve(date);}, 1000);})
    ),
    new Post(
      'Encore un post',
      'Accenderat super his incitatum propositum ad nocendum aliqua mulier vilis,\n' +
      '    quae ad palatium ut poposcerat intromissa insidias ei latenter obtendi prodiderat a militibus obscurissimis.\n' +
      '    quam Constantina exultans ut in tuto iam locata mariti salute muneratam vehiculoque inpositam per regiae ianuas emisit in publicum,\n' +
      '    ut his inlecebris alios quoque ad indicanda proliceret paria vel maiora.',
      0,
      new Promise((resolve, reject) => {const date = new Date();setTimeout(()=>{resolve(date);}, 1000);})
    )
  ];

  getLike(i:number){
    this.posts[i].liker++;
  }
  getDislike(i:number){
    this.posts[i].liker--;
  }
  showPostsSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  constructor() { }
}
