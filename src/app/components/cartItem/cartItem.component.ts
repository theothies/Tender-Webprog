import { Component, Input, OnInit, Injector } from '@angular/core';
import { CartItem } from '../../../shared/models';
import { CartItemService } from '../../../shared/services';
import { Content } from '@angular/compiler/src/render3/r3_ast';

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

    }

    @Input() public cartItemList: CartItem[];

    public deleteItem(position: number){
    console.log("function called");
    this.cartItemService.deleteFromCart(position);
    }
}
