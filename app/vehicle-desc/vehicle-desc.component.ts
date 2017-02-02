import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-vehicle-desc',
  templateUrl: './vehicle-desc.component.html',
  styleUrls: ['./vehicle-desc.component.css']
})
export class VehicleDescComponent implements OnInit {

  constructor() { }


  @ Input() vehicleDataDesc:any = {};

  ngOnInit() {
  }

}
