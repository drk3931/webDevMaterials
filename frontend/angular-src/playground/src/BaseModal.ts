
import { Component, OnInit, Injectable, Injector, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ObservableFactoryService } from 'src/observable-factory.service';
import { Globals } from 'src/globals';
import { UserService } from './app/user.service';
import { MatDialogRef } from '@angular/material';


@Injectable()
export class BaseModal<T> {


    protected http: HttpClient;
    protected observableFactory: ObservableFactoryService;
    protected userService: UserService;
    protected globals: Globals;

    constructor(private injector: Injector, private dialogRef:MatDialogRef<T> ) {

        //this exists so the injector can find the class we need
        this.observableFactory = injector.get(ObservableFactoryService);
        this.userService = injector.get(UserService);
        this.globals = injector.get(Globals);
        this.http = injector.get(HttpClient);
    }

    close(closeData:any):void
    {

        this.dialogRef.close(
            closeData
        );

    }

    cancel():void
    {

        this.dialogRef.close(
        );

    }


}