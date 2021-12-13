import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Brewery } from 'src/app/models/brewery.model';
import { BreweryService } from 'src/app/services/brewery.service';
import { getOneItem } from 'src/app/store/brewery/breweryActions';
import { selectOneItem } from 'src/app/store/brewery/breweryReducers';

@Component({
  selector: 'app-brewery-details',
  templateUrl: './brewery-details.component.html',
  styleUrls: ['./brewery-details.component.css']
})
export class BreweryDetailsComponent implements OnInit {

  brewery$: Observable<Brewery>;
  breweryId: string;
  serverError = '';


  constructor(
    private breweryService: BreweryService,
    private activatedRoute: ActivatedRoute,
    private store: Store<any>

  ) { }

  ngOnInit(): void {
    // this.breweryId = parseInt(this.activatedRoute.snapshot.params.id, 10);
    // this.store.dispatch( getOneItem({id: this.breweryId}));
    // this.brewery = this.store.pipe( select(selectOneItem) );
  }


}
