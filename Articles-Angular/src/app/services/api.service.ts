import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  serverUrl: any = 'http://localhost:4001/api/v1';
  serverUrl2: any = 'http://api.sunhouse.co.id/bookstore/index.php';

  constructor(public http: HttpClient) {}

  // API-ArticleRouter
  getArticles() {
    return this.http.get(this.serverUrl + '/articles');
  }
  // End API-ArticleRouter

  getBooks() {
    return this.http.get(this.serverUrl2 + '/books');
  }
}
