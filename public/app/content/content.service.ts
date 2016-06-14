export class ContentService {
    getContent(): string[] {
        // dummy data; should be replaced with connection to backend
        let dummyContent = ['ЧУП ТроЗд','СалютМобил','А-Дента','Драглайн','ЗАО "БСК-Трейд"',
            'РУП "Белэнергострой"','ЧП Форсаж-Техник','ЗАО "БСК-Трейд"','Частное предприятие "Аргентумстрой"',
            'ООО "Экскотрак"','Закрытое акционерное общество «Белзарубежстрой»'];
        return dummyContent;
    }
}