import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ExampleDerivedModalComponent } from './example-derived-modal/example-derived-modal.component';

@Component({
  selector: 'app-modal-testing',
  templateUrl: './modal-testing.component.html',
  styleUrls: ['./modal-testing.component.css']
})
export class ModalTestingComponent implements OnInit {

  constructor(
    private modalRef: MatDialog
  ) 
  {

  }

  openModal() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '250px';
    this.modalRef.open(ExampleDerivedModalComponent,dialogConfig);


  }

  ngOnInit() {
  }

}
