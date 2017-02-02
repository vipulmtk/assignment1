import { Component,Input, OnInit,Output,EventEmitter } from '@angular/core';
import {GetVehicleListService} from '../Services/get-vehicle-list.service';


@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  jsonVehicleList:any;
  vehicleFlag : boolean;
  item:any;
  
vehicleFullList={};

  constructor(GetVehicleListSvc : GetVehicleListService) { 
    GetVehicleListSvc.getVehicleListFromApi().subscribe((result) => {console.log(this.jsonVehicleList = result)},
    error => {
      console.log(error);
    }); 
  }

  vehicleDesc(item)
{
  this.vehicleFlag=true;
  this.item=item;
};

  ngOnInit() {
  }

}
