import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'platzi-store';
  
  // array de nombres
  items = ['nicolas', 'julian', 'luis', 'zabalaga'];

  power = 10;

  ngOnInit() {
    //code
  }

  // metodo para agregar items
  addItem() {
    this.items.push('Nuevo Item');
  }

  // metodo para eliminar items, con el numero de posicion en el array  
  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

}
