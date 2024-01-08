import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { IBlog } from '../models/blog';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  blog: IBlog;
  blog_id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _blogService: BlogService
  ) {
    this.blog_id = this.route.snapshot.params.id;
  }
  
  ngOnInit(): void {
    console.log(this.blog_id);
    this._blogService.getBlogById(this.blog_id).subscribe((data) => {
      this.blog = data;
      if(this.blog) {
        if(this.blog._id === '-1') {
          this.errorPage();
        }
      }
      else {
        this.errorPage();
      }
    });
  }

  deleteBlog() {
    if(confirm("Are you sure to delete ?")) {
      this._blogService.deleteBlog(this.blog_id).subscribe((data) => {
        this.blog = null;
        this.router.navigate(['/blog']);
      });
    }
  }

  errorPage() {
    this.router.navigate(['/error']);
  }
}
