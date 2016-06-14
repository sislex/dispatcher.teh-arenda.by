import { Component } from '@angular/core';
import { ContentService } from './content.service';

@Component({
    selector: '[content-component]',
    templateUrl: 'app/content/content.html',
    providers: [ContentService]
})

export class ContentComponent {
    constructor(contentService: ContentService){
        this.content = contentService.getContent();
    }
    
    content;
}