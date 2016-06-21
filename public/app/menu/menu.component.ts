import { Component } from '@angular/core';
import { MenuService } from './menu.service';
import { ContentService } from 'app/content/content.service'

@Component({
    selector: '[menu-component]',
    templateUrl: 'app/menu/menu.html'
})

export class MenuComponent {
    constructor(private menuService: MenuService, private contentService: ContentService) {
        this.menuService.getCategories()
            .then(result => {this.categories = result});
    }

    private selectCategory(name) {
        this.menuService.setCurrentCategory(name);
        this.contentService.setCurrentContent(name);
    }
}