import { Component } from '@angular/core';
import { MenuService } from './menu.service';

@Component({
    selector: '[menu-component]',
    templateUrl: 'app/menu/menu.html',
    providers: [MenuService]
})

export class MenuComponent {
    constructor(menuService: MenuService){
        this.menu = menuService.getMenu();
    }
    
    menu;
}