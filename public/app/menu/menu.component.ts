import { Component } from '@angular/core';
import { MenuService } from './menu.service';
import { ContentService } from 'app/content/content.service'

@Component({
    selector: '[menu-component]',
    templateUrl: 'app/menu/menu.html'
})

export class MenuComponent {
    constructor(private menuService: MenuService, private contentService: ContentService) {
        this.menu = this.menuService.getMenu();
    }

    private changeMenu(item) {
        this.menuService.setCurrentMenu(item);
        this.contentService.setCurrentContent(item);
    }
}