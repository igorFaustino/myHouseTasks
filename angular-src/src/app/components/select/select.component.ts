import { Component, OnInit } from '@angular/core';
import { SelectService } from '../../services/select.service';
import { ShoplistService } from '../../services/shoplist.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-select',
	templateUrl: './select.component.html',
	styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

	select: any;
	lists: any;

	constructor(
		private selectService: SelectService,
		private shoplistService: ShoplistService,
		private router: Router
	) { }

	ngOnInit() {
		this.select = "";
		this.setLists();
	}

	onSelectSubmit(){
		this.selectService.setSelectOp(this.select);
		this.router.navigateByUrl('/dashboard/shoplist/list');
	}

	setLists(){
		this.shoplistService.getLists().subscribe(lists => {
			this.lists = lists;
		});
	}
}
