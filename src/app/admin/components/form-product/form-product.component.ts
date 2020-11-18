import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

import { MyValidators } from './../../../Utils/validators';
import { ProductsService } from './../../../core/services/products/products.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;
  image$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private angularFireStorage: AngularFireStorage
    ) { 

    this.buildForm();
  }

  ngOnInit(): void {
  }

  saveProduct (event: Event) {
    event.preventDefault();  //Para evitar cargar la pagina al enviar el formulario
    if (this.form.valid) {
      const product = this.form.value;
      this.productsService.createProduct(product)
      .subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['./admin/products']);
      });
    } 
  }

  uploadFile (event) {
    const file = event.target.files[0];
    const name = event.target.files[0].name;
    const fileRef = this.angularFireStorage.ref(name);
    const task = this.angularFireStorage.upload(name, file);

    task.snapshotChanges()
    .pipe(
      finalize(() => {
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe(url => {
          console.log(url)
          this.form.get('image').setValue(url);
        });
      })
    )
    .subscribe();
  }

  private buildForm () {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]]
    });
  }

  // Para evitar colocar varias veces form.get('price') en el formulario
  get priceField () {
    return this.form.get('price');
  }

}
