export class MenuService {
    getMenu(): string[] {
        // dummy data; should be replaced with connection to backend
        let dummyMenu = ['Экскаваторы','Погрузчики','Трактора','Бульдозеры','Краны'];
        return dummyMenu;
    }
}