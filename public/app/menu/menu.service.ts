import { Headers, Http } from '@angular/http';

export class MenuService {
    constructor(){
        this.getMenuFromCloud();
    }
    private url = 'api/getCategories';  // URL to web api

    public currentMenu = 'Выберите меню';

    public getCurrentMenu() {
        return this.currentMenu;
    }

    public setCurrentMenu(item) {
        this.currentMenu = item;
    }

    getMenuFromCloud() {
        //return this.http.get(this.url);
    }

    public getMenu(): string[] {
        // dummy data; should be replaced with connection to backend
        let dummyMenu = ['Экскаваторы','Погрузчики','Трактора','Бульдозеры','Краны'];
        return dummyMenu;
    }
}