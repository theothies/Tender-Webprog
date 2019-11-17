import { Component, OnInit , OnDestroy} from '@angular/core';
import { CartItem, Cow } from '../../shared/models';
import { CartItemService } from '../../shared/services'
import { CartItemComponent } from 'src/app/components/misc/cartItem/cartItem.component';


@Component({
  selector: 'app-cartpage',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartComponent{
  cartItemList: CartItem[] = [];
  service: any;


  constructor(private readonly cartItemService: CartItemService) { }

  //Methode, um die cartItems zu erhalten
  getItems(): CartItem[]{
    return this.cartItemList;
  }

  //Hier wird die cartItemList aus dem cartItemService immer wieder geupdated,
  //um genau zu sein alle 1500ms.
  ngOnInit(){
    this.service = this.cartItemService.findAll();
    this.cartItemService.findAll().forEach(cartItem=>{
      this.cartItemList.push(new CartItem(cartItem.id, cartItem.name, cartItem.origin,
        cartItem.weight, cartItem.sex, cartItem.price, cartItem.amount, cartItem.fleshPiece))
    })
    setInterval(() => {
      this.cartItemList = [];
      this.cartItemService.findAll().forEach(cartItem=>{
      this.cartItemList.push(new CartItem(cartItem.id, cartItem.name, cartItem.origin,
        cartItem.weight, cartItem.sex, cartItem.price, cartItem.amount, cartItem.fleshPiece))
    }
    )
    }, 1500);
    console.log(this.cartItemList);


  }



}
