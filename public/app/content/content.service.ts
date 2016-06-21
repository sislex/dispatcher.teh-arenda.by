export class ContentService {
    private dummyContent = {
        'Экскаваторы': ['ЧУП ТроЗд', 'СалютМобил', 'А-Дента', 'Драглайн'],
        'Погрузчики': ['ЗАО "БСК-Трейд"', 'РУП "Белэнергострой"', 'ЧП Форсаж-Техник', 'ЗАО "БСК-Трейд"'],
        'Трактора': ['Частное предприятие "Аргентумстрой"', 'ООО "Экскотрак"', 'Закрытое акционерное общество «Белзарубежстрой»'],
        'Бульдозеры': ['Частное предприятие "Аргентумстрой"', 'ООО "Экскотрак"', 'Закрытое акционерное общество «Белзарубежстрой»'],
        'Краны': ['Частное предприятие "Аргентумстрой"', 'ООО "Экскотрак"', 'Закрытое акционерное общество «Белзарубежстрой»']
    };

    public currentContent = ['123','456'];

    public getCurrentContent() {
        return this.currentContent;
    }

    public setCurrentContent(categoryName) {
        this.currentContent = this.dummyContent[categoryName];
    }
    
    public getContent(): string[] {
        return this.currentContent;
    }
}