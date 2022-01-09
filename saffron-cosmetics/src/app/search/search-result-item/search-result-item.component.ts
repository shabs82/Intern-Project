import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import {WishlistService} from "../../wishlist/shared/wishlist.service";

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss'],
})
export class SearchResultItemComponent implements OnInit {
  constructor(public searchService: SearchService) {}

  ngOnInit(): void {}
}
