import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../core/models/product.model';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor( private productsService: ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  // metodo que al hacer click agregar el producto al carrito y mostrar su id
  clickProduct(id: number) {
    console.log(`product ${id}`);
  }

  fetchProducts () {
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = products;
    });

  }

}
