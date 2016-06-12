import { Component } from '@angular/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router';

import { ApplicationComponent } from 'app/application/application.component'
import { MenuComponent } from 'app/menu/menu.component'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    directives: [ApplicationComponent, MenuComponent]
})
export class AppComponent { }
