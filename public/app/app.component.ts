import { Component } from '@angular/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router';

import { ContentComponent } from 'app/content/content.component'
import { MenuComponent } from 'app/menu/menu.component'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    directives: [ContentComponent, MenuComponent]
})
export class AppComponent { }
