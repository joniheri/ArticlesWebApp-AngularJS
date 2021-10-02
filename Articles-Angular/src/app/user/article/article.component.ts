import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
// import { ApiService } from 'src/app/services/api.service';
// import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  dataArticleArray: any = [];
  dataResponseArticle: any = {};
  dataArticleAPI: any = [];
  dataBooksAPI: any = [];

  constructor(public api: ApiService) {
    this.getDataArticleArray();
    this.getArticlesAPI();
    this.getBooks();
  }

  ngOnInit(): void {}

  getArticlesAPI() {
    this.api.getArticles().subscribe((Response) => {
      // console.log('DataArticle: ', Response);
      this.dataResponseArticle = Response;
      // console.log('DataArticleData: ', this.dataArticleAPI);
      this.dataArticleAPI = this.dataResponseArticle.data;
    });
  }

  getBooks() {
    this.api.getBooks().subscribe((Response) => {
      // console.log('DataBooks: ', Response);
      this.dataBooksAPI = Response;
    });
  }

  getDataArticleArray() {
    this.dataArticleArray = [
      {
        position: 1,
        title: 'Agnular1',
        name: 'Hydrogen',
        date: '01-01-2021',
      },
      {
        position: 2,
        title: 'Agnular2',
        name: 'Helium',
        date: '02-01-2021',
      },
      {
        position: 3,
        title: 'Agnular3',
        name: 'Lithium',
        date: '03-01-2021',
      },
      {
        position: 4,
        title: 'Agnular4',
        name: 'Beryllium',
        date: '04-01-2021',
      },
      {
        position: 5,
        title: 'Agnular5',
        name: 'Boron',
        date: '05-01-2021',
      },
      {
        position: 6,
        title: 'Agnular6',
        name: 'Carbon',
        date: '06-01-2021',
      },
      {
        position: 7,
        title: 'Agnular7',
        name: 'Nitrogen',
        date: '05-01-2021',
      },
      {
        position: 8,
        title: 'Agnular8',
        name: 'Oxygen',
        date: '04-01-2021',
      },
      {
        position: 9,
        title: 'Agnular9',
        name: 'Fluorine',
        date: '07-01-2021',
      },
      {
        position: 10,
        title: 'Agnular10',
        name: 'Neon',
        date: '04-01-2021',
      },
    ];
  }
}
