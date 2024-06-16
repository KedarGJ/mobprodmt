import { Component, OnInit } from '@angular/core';
import { mobileproduct } from '../../const/mobileData';
import { Imobile } from '../../models/mobile.interface';

@Component({
  selector: 'app-mobprod',
  templateUrl: './mobprod.component.html',
  styleUrls: ['./mobprod.component.scss']
})
export class MobprodComponent implements OnInit {
 mobileArr : Array<Imobile>  = mobileproduct
  constructor() { }

  ngOnInit(): void {
  }

}
