import { Component, OnInit, inject } from '@angular/core';
import { PaginationService } from './pagination/services/pagination.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private allItems!: any[];
  pager: any = {};
  pagedItems!: any[];
  selectedItem: string = 'Item 1';
  limit: number = 10

  pagerService = inject(PaginationService)
  
  ngOnInit(): void {
    this.pagerService.getData().subscribe((data: any) => {
      this.allItems = data;
      this.setPage(1);
    })
  }

  setPage(page: number) {
    if (this.pager) {
      if (page < 1 || page > this.pager.totalPages) return
    }

    this.pager = this.pagerService.getPager( this.allItems?.length, page, this.limit );
    this.pager.pages = this.pager.pages.slice(
      this.pager.pages.length - 5,
      this.pager.pages.length
    );

    this.pagedItems = this.allItems?.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );
  }

  setItem(item: any) {
    this.selectedItem = item.name;
  }

}
