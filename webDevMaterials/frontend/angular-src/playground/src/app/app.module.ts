import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ObservableSearchComponent } from './observable-search/observable-search.component';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { Globals } from 'src/globals';
import { ObservableFactoryService} from 'src/observable-factory.service';
import { UserService } from './user.service';
import { ModalTestingComponent } from './modal-testing/modal-testing.component';
import { ExampleDerivedModalComponent } from './modal-testing/example-derived-modal/example-derived-modal.component';
import { BaseModal } from '../BaseModal';
import { MaterialModule } from 'src/material/material.module';

const appRoutes=
[
  {
    path:'',component:ModalTestingComponent,
  },
  {
    path:'search',component:ObservableSearchComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ObservableSearchComponent,
    ModalTestingComponent,
    ExampleDerivedModalComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing:false
      }
    )
  ],
  exports:[
      RouterModule
  ],
  providers: [Globals,ObservableFactoryService,UserService,BaseModal],
  bootstrap: [AppComponent],
  entryComponents:[
    ExampleDerivedModalComponent
  ]
})
export class AppModule { }
