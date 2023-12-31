const mugiwaras = [
    {
        image: '/images/luffy.webp',
        title: 'Монки Ди Луффи',
        description: "Также известный как «Мугивара Луффи» — главный герой аниме и манги One Piece. Капитан Пиратов Соломенной Шляпы, а также один из четырёх Йонко.Его мечта — стать Королём Пиратов, и найти легендарное сокровище Ван Пис. Он верит, что став Королём Пиратов, он станет самым свободным человеком в мире. Он съел Дьявольский плод Гому Гому но Ми.",
        price: ' награда за голову : 3 000 000 000'
    },
    {
        image: '/images/zoro2.png',
        title: 'Ророноа Зоро',
        description: 'Ророноа Зоро был первым, кто присоединился к Пиратам Соломенной Шляпы и является сильнейшим в команде после капитана, а его мечта — стать величайшим мечником в мире. Из за его огромной силы и сдержанности, разительно отличающейся от легкомысленного поведения Луффи, его считают первым помощником',
        price: ' награда за голову : 1 111 000 000',
        uniqueStyles:{
            height:"340px"
        }
    },
    {
        image: '/images/usopp.png',
        title: 'Усопп',
        description: " Снайпер в команде пиратов Соломенной Шляпы, а также бывший капитан пиратов Усоппа.  Является слабейшим членом пиратов Мугивары . Несмотря на свою обычную трусость, Усопп мечтает стать храбрым воином моря, как и его отец, и живёт каждый день, преследуя эту мечту. Он четвёртый член команды, третий, кто присоединился к Луффи.",
        price: ' награда за голову : 500 000 000',
        uniqueStyles:{
            height:"360px",
            marginLeft:"50px"
        }
    },
    {
        image: '/images/sanji2.png',
        title: 'Винсмоук Санджи',
        description: "«Черная Нога» Санджи — повар Пиратов Соломенной Шляпы и левая рука в команде Пиратов Соломенной шляпы . Его мечта — найти рай для шеф-повара, All Blue , где встречаются все моря в мире , а также их дикая природа. Он входит в тройку лучших бойцов Мугивар, наряду с Луффи и Зоро , которых называют «Трио Монстров».",
        price: ' награда за голову : 1 032 000 000',
        uniqueStyles:{
            height:"360px",
        }
    },
    {
        image: '/images/Nami-PNG.png',
        title: 'Нами',
        description: "Навигатор в команде пиратов Соломенной Шляпы, Изначально она была воровкой, которая грабила пиратов, чтобы выкупить свою  деревню у пирата Арлонга, и она изначально вступает в команду Соломенной шляпы, чтобы её обокрасть,когда Луффи и команада побеждают Арлонга, она вступает в команду окончательно. Её мечта — нарисовать карту всей планеты. Нами очень умна, она, больше всего любит деньги и мандарины.",
        price: ' награда за голову : 366 000 000',
        uniqueStyles:{
            height:"280px",
            paddingRight: "30px"
        }
    },
    {
        image: '/images/chopper.png',
        title: 'Чоппер',
        description: " Врач в команде пиратов Соломенной Шляпы. Чоппер - северный олень, который съел Дьявольский плод и получил возможность становиться человеком. Он родился на Острове Драм, на котором он получил свои выдающиеся знания в области медицины. Его ошибочно считают за Домашнего Питомца пиратской команды Мугивар, поэтому его награда столь низка. ",
        price: ' награда за голову : 10000',
    },
    {
        image: '/images/robin.png',
        title: 'Нико Робин',
        description: "Археолог в команде Соломенной Шляпы, в детстве Робин увлекалась историей. Она жила на острове Охара в Вест-Блу, известном своими учёными-историками, бережно относившимися к книгам. После уничтожения острова ей пришлось двадцать лет скрываться от дозора до вступления в команду Луффи. Начитанна, эрудированна и обладает врожденным талантом к сфере своей деятельности.",
        price: ' награда за голову : 930 000 000',
        uniqueStyles:{
            height:"360px",

        }
    },
    {
        image: '/images/franky2.png',
        title: 'Френки',
        description: "Корабельный плотник в команде пиратов Соломенной Шляпы. Он является 36-летним киборгом из Water 7 и впервые появляется в сюжете как лидер Клана Фрэнки, группы корабельных демонтажников.Из-за проведённых на себе модификациях и жизни в качестве демонтажника кораблей и уличного бандита в Water 7, Фрэнки выглядит как мужчина крепкого телосложения с ростом более двух метров.",
        price: ' награда за голову : 394 000 000',
        uniqueStyles:{
            height:"360px",
            paddingRight: "30px"
        }
    },
    {
        image: '/images/brook.png',
        title: 'Брук',
        description: "Также известный как «Соул Кинг», Музыкант в команде Соломенной шляпы, Брук съел Дьявольский плод, благодаря которому воскрес после своей смерти, Брук очень высокий скелет, с ростом в 266 сантиметров, из-за чего является самым высоким членом команды Соломенной Шляпыб. Также, он второй мечник на борту корабля (первым стал Зоро) и долгожданный музыкант, которого Луффи хотел в команду ещё в самом начале своего путешествия",
        price: ' награда за голову : 383 000 000',
        uniqueStyles:{
            height:"360px",
            paddingLeft: "30px"
        }
    },
    {
        image: '/images/jinbe.png',
        title: 'Джимбей',
        description: "«Рыцарь Моря» Джимбэй — член Пиратов Мугивары, где также является рулевым, он принадлжеит к рассе 'Рыболюдей'. Являлся бывшим Шичибукаем. Во время войны он подружился с Луффи, а затем вступил в союз с ним и его командой. Он даже был приглашен присоединиться в команду, но отказался из-за наличия незаконченных дел ещё связанных с Биг Мам; На данный момент он официально вступил в команду.",
        price: ' награда за голову : 1 100 000 000',
        uniqueStyles:{
            height:"360px",
            paddingLeft: "30px"
        }
    },
];
export default mugiwaras


