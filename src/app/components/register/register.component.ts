import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
    selector: 'register',
    templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit{
    public title: String;
    public user: User;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ){
        this.title = 'Registro';
        this.user = new User('','','','','','ROLE_USER','');
    }

    ngOnInit(){
        console.log('register.component cargado');
    }

    onSubmit(){
       console.log(this.user); 
    }
}
