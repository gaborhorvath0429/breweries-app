import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Brewery } from 'src/app/models/brewery.model';
import { BreweryService } from 'src/app/services/brewery.service';
import { getItems } from 'src/app/store/brewery/breweryActions';
import { selectItems } from 'src/app/store/brewery/breweryReducers';

@Component({
  selector: 'app-breweries-list',
  templateUrl: './breweries-list.component.html',
  styleUrls: ['./breweries-list.component.css']
})
export class BreweriesListComponent implements OnInit {

  breweries$: Observable<Brewery[]>;

  constructor(
    private breweryService: BreweryService,
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getItems());
    this.breweries$ = this.store.pipe(select(selectItems));
  }

  // page = 1;
  // pageSize = 10;
  // collectionSize = this.breweries$.
  // breweries: Brewery[];




  // refreshBreweries() {
  //    this.breweries = this.breweries$
  //     .map((brewery, i) => ({id: i + 1, ...brewery}))
  //     .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  // }

  previousPage() {

  }

  nextPage() {
    
  }

}
