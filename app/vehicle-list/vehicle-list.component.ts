import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() columns: any[];
  @Input() data: any[];
  @Input() sort: any={};
  
  // selectedClass(columnName): string{
  //   return columnName == this.sort.column ? 'sort-' + this.sort.descending : false;
  // }
  
  changeSorting(columnName): void{
    var sort = this.sort;
    if (sort.column == columnName) {
      sort.descending = !sort.descending;
    } else {
      sort.column = columnName;
      sort.descending = false;
    }
  }
  
  convertSorting(): string{
    return this.sort.descending ? '-' + this.sort.column : this.sort.column;
  }
}

