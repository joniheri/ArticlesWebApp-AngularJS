import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  position: number;
  name: string;
  title: string;
  date: string;
  // weight: number;
  // symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
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

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  displayedColumns: string[] = [
    'position',
    'title',
    'name',
    'date',
    // 'weight',
    // 'symbol',
  ];
  dataSource = ELEMENT_DATA;
}
