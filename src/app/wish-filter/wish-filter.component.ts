import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { FormsModule } from '@angular/forms';

const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete,
];

@Component({
  selector: 'wish-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent implements OnInit{
  @Output() filter = new EventEmitter<any>();
  constructor(){}

  ngOnInit(): void {
    this.filter.emit(filters[0]);
  }

  listFilter : any = '0';

  changeFilter(value : any){
    this.filter.emit(filters[value]);
  }
}
