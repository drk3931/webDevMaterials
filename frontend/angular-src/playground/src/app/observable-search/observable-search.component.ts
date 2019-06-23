import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from 'src/globals';
import { ObservableFactoryService } from 'src/observable-factory.service';




@Component({
  selector: 'app-observable-search',
  templateUrl: './observable-search.component.html',
  styleUrls: ['./observable-search.component.css']
})
export class ObservableSearchComponent implements OnInit {



  private searchResults: any;



  constructor(private http: HttpClient, private globals:Globals, private observableFactory: ObservableFactoryService) {



  }


  getSearchResults(): String {
    return JSON.stringify(this.searchResults);
  }

  setSearchResults(): void {

    
    this.http.post("/api/candidateFilter", { searchSkills: "".split(",") })
      .toPromise().then(
        (res) => {
          this.searchResults = res;


        },
        (err) => {
          this.searchResults = err;
        }
      );

  }


  @ViewChild('searchBox' ) private searchBar: ElementRef;
  
  ngOnInit() {


    this.observableFactory.getDebounceObs(this.searchBar).subscribe(
      (res)=>
      {
          console.log()
          this.http.post("/api/candidateFilter", {searchSkills:String(this.searchBar.nativeElement.value).split(",") }).toPromise().then(
            (res)=>
            {

                this.searchResults = res;

            },
            (err)=>
            {
              console.log("FAILED TO CONNECT TO /candidateFilter ROUTE");
            }
    
          )

      }
    )

    

    

  }




  onSubmit() {



  }

}
