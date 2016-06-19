import { Headers, Http } from '@angular/http';

export class MenuService {
    constructor(){
        this.getMenuFromCloud();
    }

    private url = 'api/getCategories';  // URL to web api
    public selectedMenu = '123';

    getMenuFromCloud() {
        //return this.http.get(this.url);
    }

    getMenu(): string[] {
        // dummy data; should be replaced with connection to backend
        let dummyMenu = ['Экскаваторы','Погрузчики','Трактора','Бульдозеры','Краны'];
        return dummyMenu;
    }
}