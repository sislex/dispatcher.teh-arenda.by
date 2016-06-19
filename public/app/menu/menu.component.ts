import { Component } from '@angular/core';
import { MenuService } from './menu.service';

@Component({
    selector: '[menu-component]',
    templateUrl: 'app/menu/menu.html'
})

export class MenuComponent {
    constructor(private menuService: MenuService){
        this.menu = menuService.getMenu();
    }
    
    menu;
}