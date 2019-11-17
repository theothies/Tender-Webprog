import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CowService, CartItemService, Cow } from '@shared';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit {
    activatedRoute: ActivatedRoute;
    cow: Cow;
    id: string;
    serviceSub: any;

    constructor(private route: ActivatedRoute,
         private readonly cowservice: CowService,
          private readonly cartItemService: CartItemService){

    }

    ngOnInit(): void{
        this.id = this.route.snapshot.paramMap.get('id');
            
        this.serviceSub = this.cowservice.getCow(this.id).subscribe((cow) =>{
            this.cow = cow;
        });
        console.log(this.serviceSub);

    }
    public onSubmit(form: NgForm): void {
        const gewicht = form.value.gewicht;
        const amount = form.value.amount;
        const fleshPiece = form.value.fleshPiece;
        this.cartItemService.addToCart(this.cow,gewicht,fleshPiece,(this.cow.price*gewicht/100),amount);
       }

    ngOnDestroy(){
        this.serviceSub.unsubscribe();
      }
}