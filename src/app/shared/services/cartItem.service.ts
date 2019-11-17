import { Injectable } from '@angular/core';
import { CartItem, Cow } from '../models';

@Injectable()
export class CartItemService {

    private cartItems: CartItem[] = [];
    private cartItem: CartItem;
    private spareCartItems: CartItem[] = [];
    private idCounter: number = 0;

    constructor() {

    }

    findAll(): CartItem[] {
        return this.cartItems;
    }

    addToCart(cow: Cow, gewicht: number, fleshPiece: string, price: number, amount: number){
        this.cartItems.push(new CartItem(this.idCounter, cow.name, cow.hof, gewicht, cow.sex, price, amount, fleshPiece))
        this.idCounter+=1;
    }

    incrementAmountOfCartItem(position: number){
        this.cartItems.forEach(cartItem => {
            if(cartItem.id == position){
                this.cartItems[this.getSelectedIndex(cartItem)].amount++;
            }
        })
    }

    decrementAmountOfCartItem(position: number){
        this.cartItems.forEach(cartItem => {
            if(cartItem.id == position){
                if(this.cartItems[this.getSelectedIndex(cartItem)].amount > 0){
                    this.cartItems[this.getSelectedIndex(cartItem)].amount--;
                }
            }
        })
    }

    deleteFromCart(position: number){
        this.cartItems.forEach(cartItem => {
            if(cartItem.id == position){
                this.cartItems[this.getSelectedIndex(cartItem)] = null;
            }
        })
        this.spareCartItems = [];
        this.cartItems.forEach(cartItem => {
            if(cartItem != null){
            this.spareCartItems.push(cartItem);
            }
        })
        this.cartItems = this.spareCartItems;
        console.log(this.cartItems);
    }

    calculatePriceSum(): String{
        var total = 0;
        this.cartItems.forEach(cartItem => {
            total = total + (cartItem.price * cartItem.amount);
        })

        return "" + total + " €";

    }

    getSelectedIndex(CartSingleItem: CartItem): number{
        var i = 0;

        while (i < this.cartItems.length) {
            if (this.cartItems[i] == CartSingleItem) {
                return i;
            }
            else {
                i = i + 1;
            }
        }

    }


}
