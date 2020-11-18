import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './../../../core/models/product.model';

import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  // metodo GET para hacer peticiones get al servidor
  getAllProducts() {
    return this.http.get<Product[]>(`${environment.url_api}/products/`);
  }

  // metodo GET recibe el ID del producto y lo busca en la lista
  getProduct(id: string) {
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }

  // metodo POST para crear productos
  createProduct (product: Product) {
    return this.http.post(`${environment.url_api}/products/`, product);
  }

  // metodo PUT para actualizar productos
  updateProduct (id: string, changes: Partial<Product>) {
    return this.http.put(`${environment.url_api}/products/${id}`, changes);
  }

  // metodo DELETE para eliminar productos
  deleteProduct (id: string) {
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }

}
