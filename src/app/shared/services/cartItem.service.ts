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

    //Liefert das cartItem array
    findAll(): CartItem[] {
        return this.cartItems;
    }

    //Fügt ein cartItem dem Warenkorb hinzu
    addToCart(cow: Cow, gewicht: number, fleshPiece: string, price: number, amount: number){
        this.cartItems.push(new CartItem(this.idCounter, cow.name, cow.hof, gewicht, cow.sex, price, amount, fleshPiece))
        this.idCounter+=1;
    }

    //Methode, um die Anzahl eines einzelnen cartItems zu erhöhen
    incrementAmountOfCartItem(position: number){
        this.cartItems.forEach(cartItem => {
            if(cartItem.id == position){
                this.cartItems[this.getSelectedIndex(cartItem)].amount++;
            }
        })
    }

    //Methode, um die Anzahl eines einzelnen cartItems zu verringern
    decrementAmountOfCartItem(position: number){
        this.cartItems.forEach(cartItem => {
            if(cartItem.id == position){
                if(this.cartItems[this.getSelectedIndex(cartItem)].amount > 0){
                    this.cartItems[this.getSelectedIndex(cartItem)].amount--;
                }
            }
        })
    }

    //Methode, um ein cartItem aus dem Warenkorb zu entfernen
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

    //Methode, um die Gesamtsumme zu berechnen
    calculatePriceSum(): string{
        var total = 0;
        this.cartItems.forEach(cartItem => {
            total = total + (cartItem.price * cartItem.amount);
        })

        return "" + total + " €";

    }

    //Methode, um den index eines bestimmten cartItems in der cartItemList
    //zu erhalten
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
