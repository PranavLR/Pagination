import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaginationService } from '../../services/pagination.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() pager: any = {};
  @Output() setPage = new EventEmitter<number>();
}
