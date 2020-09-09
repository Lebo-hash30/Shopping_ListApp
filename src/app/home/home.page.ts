import { Component } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Enteritem ;


  list :any  =[] ;

  

  title ="Shopping List" ;
  
  constructor() {}

  addList(){

    let item = {
      Enteritem: this.Enteritem ,

  }

  this.list.push(item)  
console.log(item)
console.log(item.Enteritem)
    console.log(this.list)


  }

  deleteList(i){

    
    this.list.splice( i, 1)

    console.log(this.list)

  } 

  updateUser(){
    let user = {
      Enteritem: this.Enteritem,
    

    
  }
  this.list.splice(0, 1)
    console.log(this.list)
    this.list.push(user);
}
}
