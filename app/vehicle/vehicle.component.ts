import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { GetVehicleListService } from '../Services/get-vehicle-list.service';
import { OrderByPipe } from '../order-by.pipe';


@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  jsonVehicleList: Array<any>;
  vehicleFlag: boolean;
  item: any;


  vehicleFullList = {};

  constructor(GetVehicleListSvc: GetVehicleListService) {
    GetVehicleListSvc.getVehicleListFromApi().subscribe((result) => {
    this.jsonVehicleList = result
    },
      error => {
        console.log(error);
      });
  }

  vehicleDesc(item) {
    this.vehicleFlag = true;
    this.item = item;
  };



  ngOnInit() {
  }


  ascName() {
    this.jsonVehicleList.sort(function (a: any, b: any) {
      var textA = a.manufacturer;
      var textB = b.manufacturer;
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }
  descName() {
    this.jsonVehicleList.sort(function (a: any, b: any) {
      var textA = a.manufacturer;
      var textB = b.manufacturer;
      return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
    });
  }
  ascYear() {
    this.jsonVehicleList.sort(function (a: any, b: any) {
      var textA = a.year;
      var textB = b.year;
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }
  descYear() {
    this.jsonVehicleList.sort(function (a: any, b: any) {
      var textA = a.year;
      var textB = b.year;
      return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
    });
  }

  ascModel() {
    this.jsonVehicleList.sort(function (a: any, b: any) {
      var textA = a.model;
      var textB = b.model;
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }
  descModel() {
    this.jsonVehicleList.sort(function (a: any, b: any) {
      var textA = a.model;
      var textB = b.model;
      return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
    });
  }





}
