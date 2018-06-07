import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { ShowpostlistComponent } from './showpostlist/showpostlist.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostComponent } from './post/post.component';

import { PostService } from './services/post.service';



const appRoutes: Routes = [
  { path: '', component: ShowpostlistComponent },
  { path: 'posts', component: ShowpostlistComponent},
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    ShowpostlistComponent,
    PostlistComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})

export class AppModule { }
