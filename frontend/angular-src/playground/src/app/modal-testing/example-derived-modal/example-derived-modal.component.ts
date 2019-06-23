import { Component, OnInit, Injector } from '@angular/core';
import { BaseModal } from 'src/BaseModal';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-example-derived-modal',
  templateUrl: './example-derived-modal.component.html',
  styleUrls: ['./example-derived-modal.component.css']
})
export class ExampleDerivedModalComponent extends BaseModal<ExampleDerivedModalComponent> implements OnInit {

  constructor(inj:Injector,dialogRef: MatDialogRef<ExampleDerivedModalComponent>) {
    super(inj,dialogRef);
    this.http.post("/api/login",{username:"test",password:"test2"}).toPromise().then(
        (res)=>
        {
          console.log(res);

        },
        (err)=>
        {
          console.log("error logging in");
        }
    );
  }

  ngOnInit() {
  }

}
