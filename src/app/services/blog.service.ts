import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IBlog } from "../models/blog";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private url = "https://blog-backend-bejg.onrender.com/";
  public urls = {
    getBlogs: this.url + 'blog',
    getBlogsByUser: this.url + 'blog/get/user/',
    getBlogById: this.url + 'blog/get/',
    createBlog: this.url + 'blog/create/',
    deleteBlog: this.url + 'blog/delete/',
    updateBlog: this.url + 'blog/update/',
  };

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getBlogs(): Observable<IBlog[]> {
    return this.http.get<IBlog[]>(this.urls.getBlogs);
  }

  getBlogsByUser(user: string): Observable<IBlog[]> {
    return this.http.get<IBlog[]>(this.urls.getBlogsByUser + user);
  }

  getBlogById(id: string): Observable<IBlog> {
    return this.http.get<IBlog>(this.urls.getBlogById + id);
  }

  deleteBlog(id: string): Observable<IBlog> {
    return this.http.delete<IBlog>(this.urls.deleteBlog + id);
  }

  public createBlog(data): Observable<IBlog> {
    return this.http.post<IBlog>(this.urls.createBlog, data);
  }

  public updateBlog(data): Observable<IBlog> {
    return this.http.put<IBlog>(this.urls.updateBlog + data._id, data);
  }
}
