import { Component, Input, OnInit, Injector } from '@angular/core';
import { CartItem, CartItemService } from '@shared';

@Component({
  selector: 'app-cart',
  templateUrl: './cartItem.component.html',
  styleUrls: ['./cartItem.component.scss'],
})

export class CartItemComponent  {

    private cartItemService: any;


    constructor(private injector: Injector) {

    }

    ngOnInit(){
      this.cartItemService = this.injector.get(CartItemService);
      this.getTotal();
    }

    //cartItemList von der cart-page übergeben
    @Input() public cartItemList: CartItem[];

    //Methode, um ein cartItem aus dem Warenkorb zu entfernen
    public deleteItem(position: number){
    console.log("function called");
    this.cartItemService.deleteFromCart(position);
    }

    //Methode, um die Anzahl zu erhöhen
    public incrementAmount(position: number){
    console.log("amount + function called");
    this.cartItemService.incrementAmountOfCartItem(position);
    }

    //Methode, um die Anzahl zu verringern
    public decrementAmount(position: number){
    console.log("amount - function called");
    this.cartItemService.decrementAmountOfCartItem(position);
    }

    //Methode, um die Gesamtsumme zu erhalten
    public getTotal(){
    var output = document.getElementById('totalOutput');
    setInterval(()=>{
    output.innerHTML = this.cartItemService.calculatePriceSum(),1500
  });
    }
}
