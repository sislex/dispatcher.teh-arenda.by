import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
@Injectable()
export class MenuService {
    constructor(private http: Http){
        this.getMenuFromCloud().then(heroes => {console.log(heroes)});

    }

    private url = 'api/getCategories';  // URL to web api
    public selectedMenu = '123';

    private getMenuFromCloud(): Promise  {
        return this.http.get(this.url)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private getMenu(): string[] {
        // dummy data; should be replaced with connection to backend
        let dummyMenu = ['Экскаваторы','Погрузчики','Трактора','Бульдозеры','Краны'];
        return dummyMenu;
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}