import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cow } from '@shared'


@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit{
    activatedRoute: ActivatedRoute;
    cow: Cow;
    id: string;
    serviceSub: any;

    constructor(private route: ActivatedRoute) { 
        
    }

    ngOnInit(): void{

    }

    ngOnDestroy(): void{

    }
}