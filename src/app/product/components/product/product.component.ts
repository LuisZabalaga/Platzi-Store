import { Component, 
        Input, 
        Output, 
        EventEmitter, 
        OnChanges, 
        SimpleChanges, 
        OnInit, 
        DoCheck, 
        OnDestroy 
    } from '@angular/core';

import { Product } from '../../../core/models/product.model';

import { CartService } from './../../../core/services/cart.service';

// Decoradores, los componentes tienen metadata
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
}) 

// Componentes
export class ProductComponent implements OnInit, DoCheck, OnDestroy {
    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();

    // constructor que carga primero en la pagina
    constructor(
        private cartService: CartService
    ) {
        console.log('1. constructor');
    }

    // OnChanges detecta los cambios, el estado anterior y el nuevo, o actual de manera nativa
    // ngOnChanges(changes: SimpleChanges) {
    //     console.log('2. ngOnChanges');
    //     console.log(changes);
    // }

    // OnInit solo se ejecuta una vez, y es cuando el componente ya fue puesto en pantalla
    ngOnInit() {
        console.log('3. ngOnInit');
    }

    // DoCheack, tambien detecta los cambios de manera forzada, hace la deteccion automatica
    // de cambios pero lo manejamos a nuestra manera
    ngDoCheck () {
        console.log('4. ngDoCheck');
    }

    // ng solo se ejecuta cuando los elemnetos son quitados o removidos desde la interfaz
    ngOnDestroy () {
        console.log('5. ngOnDestroy');
    }

    addCart() {
        console.log('añadir al carrito');
        this.cartService.addCart(this.product);
        // this.productClicked.emit(this.product.id);
    }
}