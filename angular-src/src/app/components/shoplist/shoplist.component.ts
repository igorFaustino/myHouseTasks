import { Component, OnInit } from '@angular/core';
import { SelectService } from '../../services/select.service';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.css']
})
export class ShoplistComponent implements OnInit {

  constructor(
  	private selectService: SelectService
  ) { }

  ngOnInit() {
  }

}
