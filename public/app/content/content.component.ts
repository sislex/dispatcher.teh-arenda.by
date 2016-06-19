import { Component } from '@angular/core';
import { ContentService } from './content.service';
import { MenuService } from '../menu/menu.service';

@Component({
    selector: '[content-component]',
    templateUrl: 'app/content/content.html',
    providers: [ContentService]
})

export class ContentComponent {
    constructor(private contentService: ContentService, private menuService: MenuService){
        this.content = contentService.getContent();
    }
    
    content;
}