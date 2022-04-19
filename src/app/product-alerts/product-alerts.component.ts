import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../products';
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent  {
  @Input() product! : Product | undefined;
  //notify here is just a name(variable)
  @Output() notify = new EventEmitter(); 
  constructor() { }

  ngOnInit(): void {
  }

}
