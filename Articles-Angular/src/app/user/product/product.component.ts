import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
// import { MatDialog } from '@angular/material/dialog';
// import { DetailProductComponent } from '../detail-product/detail-product.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  // DeclarationVariable
  title: any;
  dataProduct: any = {};
  dataProductArray1: any = [];
  dataProductArray2: any = [];
  // EndDeclarationVariable

  constructor(public api: ApiService) {
    this.title = 'Data Product';

    this.dataProduct = {
      id: '1',
      title: 'Jeruk Manis',
      inputDate: '01-01-2021',
      price: '1 Dollar/kg',
    };

    this.dataProductArray1 = [
      {
        id: '1',
        title: 'Jeruk Manis',
        inputDate: '01-01-2021',
        price: '1 Dollar/kg',
      },
      {
        id: '2',
        title: 'Anggur',
        inputDate: '01-01-2021',
        price: '1 Dollar/kg',
      },
      {
        id: '3',
        title: 'Apple',
        inputDate: '01-01-2021',
        price: '1 Dollar/kg',
      },
      {
        id: '5',
        title: 'Mangga',
        inputDate: '01-01-2021',
        price: '1 Dollar/kg',
      },
      {
        id: '6',
        title: 'Jambu Biji',
        inputDate: '01-01-2021',
        price: '1 Dollar/kg',
      },
    ];

    this.getProductArray();
  }

  ngOnInit(): void {}

  getProductArray() {
    this.dataProductArray2 = [
      {
        id: '1',
        title: 'Jeruk Manis',
        inputDate: '01-01-2021',
        price: '1 Dollar/kg',
      },
      {
        id: '2',
        title: 'Anggur',
        inputDate: '01-01-2021',
        price: '1 Dollar/kg',
      },
      {
        id: '3',
        title: 'Apple',
        inputDate: '01-01-2021',
        price: '1 Dollar/kg',
      },
      {
        id: '5',
        title: 'Mangga',
        inputDate: '01-01-2021',
        price: '1 Dollar/kg',
      },
      {
        id: '6',
        title: 'Jambu Biji',
        inputDate: '01-01-2021',
        price: '1 Dollar/kg',
      },
    ];
  }

  deleteProduct() {
    var conf = confirm('Delete item?');
    if (conf) this.dataProductArray2.splice(1);
  }
}
