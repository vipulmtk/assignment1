import {Injectable}  from  '@angular/core';
import {Http}  from  '@angular/http';
import {Observable}  from  'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GetVehicleListService {

 constructor(public httpSvc:Http){}

      getVehicleListFromApi():Observable<any>{
return this.httpSvc.get("./vehicleApi/vehicleList.json")
.map((response)=>response.json())
.catch((error)=>Observable.throw(error.json()))
    }

}

