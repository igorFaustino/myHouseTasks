import { Component, OnInit } from '@angular/core';
import { SelectService } from '../../services/select.service';
import { ShoplistService } from '../../services/shoplist.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	
	list: {
		_id?: any,
		name?:string,
		itens?: any[]
	}

	newItem: any;
	qtd: number;
	boughtItens: number;

	constructor(
		private selectService: SelectService,
		private shoplistService: ShoplistService,
		private router: Router,
		private flashMessagesServices: FlashMessagesService
	) { }

	ngOnInit() {
		this.list = {};
		this.newItem = null;
		this.qtd = null;
		// load list
		if(this.selectService.getSelectOp() != "" && this.selectService.getSelectOp() != undefined){
			this.shoplistService.getList(this.selectService.getSelectOp()).subscribe(list => {
				this.list = list;
				this.setBoughtItens(list);
			});
		} else { // if list don't exists create a new list
			var count = 0;
			this.shoplistService.getLists().subscribe(lists => {
				for (var i = lists.length - 1; i >= 0; i--) {
					if(lists[i].name){
						if(lists[i].name.indexOf('new list') == 0){
							count++;
						}
					}
				}

				if(count == 0){
					var newName = "new list";
				} else {
					var newName = 'new list(' + count + ')';
				}

				let newList = {
					name: newName,
					itens: []
				}

				this.shoplistService.addList(newList).subscribe(msg => {
					if(msg.success){
						this.list = msg.shopList;
					} else {
						this.flashMessagesServices.show('Algo de errado não esta certo!\nPor favor tente de novo', {classes: ['alert', 'alert-danger', 'text-center']});
						this.selectService.cleanSelect();
						this.router.navigateByUrl('/dashboard/shoplist');
					}
				});
			});
		}
	}

	setBoughtItens(list) {
		this.boughtItens = 0;
		for (var task = list.itens.length - 1; task >= 0; task--) {
			if(list.itens[task].isBought){
				this.boughtItens++;
			}
		}
	}

	onNameImput(){
		this.shoplistService.updateList(this.list).subscribe();
	}

	addItem(){
		if (!this.newItem || !this.qtd) {
			return false;
		}

		for (var i = this.list.itens.length - 1; i >= 0; i--) {
			if(this.list.itens[i].name == this.newItem){
				this.flashMessagesServices.show('Item já está cadastrado!', {classes: ['alert', 'alert-danger', 'text-center']});
				return false;
			}
		}

		let newItem = {
			name: this.newItem,
			isBought: false,
			qtd: this.qtd
		};
		this.list.itens.push(newItem);
		this.newItem = null;
		this.qtd = null;
		this.shoplistService.updateList(this.list).subscribe();
	}

	updateItem(name){
		var i = this.list.itens.length - 1;
		while(i > 0 && this.list.itens[i].name != name) {
			i--;
		}
		if(this.list.itens[i].name == name){
			this.list.itens[i].isBought = !this.list.itens[i].isBought;
			if (this.list.itens[i].isBought){
				this.boughtItens++;
			} else {
				this.boughtItens--;
			}
		}
		this.shoplistService.updateList(this.list).subscribe();
	}

	onQtdInput(){
		this.shoplistService.updateList(this.list).subscribe();
	}

	removeItem(name){
		this.list.itens = this.list.itens.filter(function (item) {
			return item.name != name;
		});
		this.shoplistService.updateList(this.list).subscribe();	
		this.selectService.cleanSelect();
	}

	delete(){
		this.shoplistService.deleteList(this.list._id).subscribe(msg => {
			if(msg.success){
				this.flashMessagesServices.show('Lista de compras deletada', {classes: ['alert', 'alert-success', 'text-center']});
			} else {
				this.flashMessagesServices.show('Algo de errado não esta certo!\nPor favor tente de novo', {classes: ['alert', 'alert-danger', 'text-center']});
			}
		});
		this.selectService.cleanSelect();
		this.router.navigateByUrl('/dashboard/shoplist');
	}

	unselectAll(){
		this.boughtItens = 0;
		for (var i = this.list.itens.length - 1; i >= 0; i--) {
			if(this.list.itens[i].isBought){	
				this.list.itens[i].isBought = false;
			}
		}
		this.shoplistService.updateList(this.list).subscribe();
	}

	setNewName(){
		var count = 0;
		this.shoplistService.getLists().subscribe(lists => {
			for (var i = lists.length - 1; i >= 0; i--) {
				if(lists[i].name){
					if(lists[i].name.indexOf('Nova Lista') != -1){
						count++;
					}
				}
			}

		});
	}
}
