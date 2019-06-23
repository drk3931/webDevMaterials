import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatButtonModule, 
  MatCheckboxModule, 
  MatDialogModule,
  MatCardModule,
  MatButtonToggleModule,
  MatIconModule,
  MatMenuModule,
  MatListModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,  
    MatButtonModule, 
    MatCheckboxModule, 
    MatDialogModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
  ],
  exports: [
    BrowserAnimationsModule,  
    MatButtonModule, 
    MatCheckboxModule, 
    MatDialogModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,

  ]
})
export class MaterialModule { }
