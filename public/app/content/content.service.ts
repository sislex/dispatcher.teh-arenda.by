export class ContentService {
    private dummyContent = {
        'Маз': ['ЧУП ТроЗд', 'СалютМобил', 'А-Дента', 'Драглайн'],
        'Камаз': ['ЗАО "БСК-Трейд"', 'РУП "Белэнергострой"', 'ЧП Форсаж-Техник', 'ЗАО "БСК-Трейд"'],
        'Зил': ['Частное предприятие "Аргентумстрой"', 'ООО "Экскотрак"', 'Закрытое акционерное общество «Белзарубежстрой»'],
        'Погрузчик': ['Частное предприятие "Аргентумстрой"', 'ООО "Экскотрак"', 'Закрытое акционерное общество «Белзарубежстрой»'],
        'Аренда спецтехники': ['Частное предприятие "Аргентумстрой"', 'ООО "Экскотрак"', 'Закрытое акционерное общество «Белзарубежстрой»']
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