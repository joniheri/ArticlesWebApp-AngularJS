import { Component, Inject, OnInit } from '@angular/core';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  constructor() // @Inject(MAT_DIALOG_DATA) public data: any // public dialogRef: MatDialogRef<AddProductComponent>,
  {}

  ngOnInit(): void {}

  // saveData() {
  //   this.dialogRef.close(this.data);
  // }
}
