import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ControlButtonsComponent } from './control-buttons/control-buttons.component';
import { ProductComponent } from './product/product.component';
import {appFetchDataService} from './Services/appFetch-data.service';
import {GetVehicleListService} from './Services/get-vehicle-list.service';
import { ModifyoptionsComponent } from './modifyoptions/modifyoptions.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleDescComponent } from './vehicle-desc/vehicle-desc.component';
import { OrderByPipe } from './order-by.pipe';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleOrderPipe } from './vehicle-order.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ControlButtonsComponent,
    ProductComponent,
    ModifyoptionsComponent,
    VehicleComponent,
    VehicleDescComponent,
    OrderByPipe,
    VehicleOrderPipe,
    VehicleListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [appFetchDataService,GetVehicleListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
