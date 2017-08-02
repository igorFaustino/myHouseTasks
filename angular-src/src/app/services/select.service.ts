import { Injectable } from '@angular/core';

@Injectable()
export class SelectService {

  constructor() { }

  setSelectOp(value){
  	localStorage.setItem('list', value);
  }

  getSelectOp(){
  	return localStorage.getItem('list');
  }

  cleanSelect(){
  	localStorage.removeItem('list');
  }
}
