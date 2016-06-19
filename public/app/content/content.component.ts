import { Component } from '@angular/core';
import { ContentService } from './content.service';
import { MenuService } from 'app/menu/menu.service';

@Component({
    selector: '[content-component]',
    templateUrl: 'app/content/content.html'
})

export class ContentComponent {
    constructor(private contentService: ContentService, private menuService: MenuService){
    }
}