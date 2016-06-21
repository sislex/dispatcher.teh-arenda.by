import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MenuService {
    constructor(private http: Http){}

    private url = 'api/getCategories';  // URL to web api

    private getCategoriesFromCloud(): Promise  {
        return this.http.get(this.url)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    
    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    public getCategories() {
        return this.getCategoriesFromCloud()
            .then(function(res){return res})
    }
    
    public currentCategory = 'Выберите меню';

    public getCurrentCategory() {
        return this.currentCategory;
    }

    public setCurrentCategory(name) {
        this.currentCategory = name;
    }


}