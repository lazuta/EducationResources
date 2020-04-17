export const t3 = {
    "id":"t3",
    "author": "Ахремчик",
    // 3 / 15
    "totalQuestions": 3,
    "testName":"Техническое обслуживание аппаратной П-178МБ",
    "questions":[
        {
          "id": "one",
          "title":"Контрольный осмотр проводится с целью проверки готовности составных частей техники к использованию по назначению и НЕ включает:",
          "variants" : [
                {"title": "проверку наличия и состояния основных комплектующих изделий средств связи и автоматизации, надежности крепления узлов, блоков, приборов, табельного и нетабельного имущества"},
                {"title": "проверку исправности и готовности электроустановок к применению"},
                {"title": "проверку наличия средств пожаротушения и обеспечения безопасности личного состава при эксплуатации техники связи и КСА"},
                {"title": "проверку внешнего состояния и чистку аппаратуры без вскрытия блоков и монтажа", "flag": true}
          ]
        },
        {
            "id": "two",
            "title":"Для техники связи и КСА находящейся на длительном хранении системой предусматривается:",
            "variants" : [
               {"title": "техническое обслуживание № 1 и № 2 при хранении (Т0-1х, ТО-2х)"},
               {"title": "регламентированное техническое обслуживание (РТО)"},
               {"title": "сезонное техническое обслуживание (СТО)"},
               {"title": "варианты ответов 1 и 2", "flag": true}
            ]
        },
        {
            "id": "tree",
            "title":"Техническое обслуживание № 1 проводится на всей технике связи и КСА текущего обеспечения независимо от интенсивности ее использования с частотой",
            "variants" : [
               {"title": "1 раз в месяц"},
               {"title": "2 раза в месяц"},
               {"title": "1 раз в 6 месяцев"},
               {"title": "только после проведения учений", "flag": true}
            ]
        }
    ]
}