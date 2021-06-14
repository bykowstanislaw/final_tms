
const veganskaya = '/images/veganskaya.jpg'
const vig = '/images/vig.png'
const pepperoni = '/images/pepperoni.jpg'
const supermix = "/images/supermix.png"
const mexico = "/images/mexico.png"
const chicken = "/images/chicken.jpg"
const papamix = '/images/papamix.png'
const superburg = '/images/superburg.jpg'
const bigbonanza = '/images/bigbonanza.jpg'
const bbqchicken = '/images/bbqchicken.jpg'
const dblpepperoni = '/images/dblpepperoni.png'
const alfredo = "/images/alfredo.png"






const DATA = [
    [
        [

            {
                id: 1.1,
                pic: veganskaya,
                name: "Веганская",
                structure: "Томатный соус, веганский сыр, томаты, шампиньоны, лук, сладкий зеленый перец, маслины",
                type:"pizza"
            },
            {
                id: 1.2,
                pic: pepperoni,
                name: "Пепперони",
                structure: "Томатный соус, сыр моцарелла, пепперони",
                type:"pizza"
            },
            {
                id: 1.3,
                pic: vig,
                name: "Ветчина и грибы",
                structure: "Сыр моцарелла, соус чесночный ранч, ветчина, шампиньоны, чеснок",
                type:"pizza"
            },
            {
                id: 1.4,
                pic: supermix,
                name: "Супермикс",
                structure: "Четыре любимых пиццы в одной: Гавайская, Мексиканская, Супер Папа, Пепперони",
                type:"pizza"

            },
            {
                id: 1.5,
                pic: mexico,
                name: "Мексиканская",
                structure: "Томатный соус, сыр моцарелла, куриная грудка, сладкий зеленый перец, лук, шампиньоны, томаты, перец халапеньо",
                type:"pizza"

            },
            {
                id: 1.6,
                pic: chicken,
                name: "Чикен Ранч",
                structure: "Соус чесночный ранч, сыр моцарелла, куриная грудка, бекон, томаты, чеснок",
                type:"pizza"

            },
            {
                id: 1.7,
                pic: superburg,
                name: "Супер Чизбургер",
                structure: "Соус тысяча островов, сыр моцарелла, смесь 2-х сыров, смесь 3-х сыров, говядина, бекон, томаты, маринованные огурчики, лук",
                type:"pizza"

            },
            {
                id: 1.8,
                pic: papamix,
                name: "Папа Микс Рэнч",
                structure: "Соус чесночный ранч, сыр моцарелла, куриная грудка, бекон, томаты, чеснок",
                type:"pizza"

            },
            {
                id: 1.9,
                pic: bigbonanza,
                name: "Большая Бонанза",
                structure: "Соус барбекю, сыр моцарелла, говядина, бекон, ветчина, лук, томаты, халапеньо, сыр фета",
                type:"pizza"

            },
            {
                id: 1.10,
                pic: alfredo,
                name: "Альфредо",
                structure: "Соус шпинатный, сыр моцарелла, ветчина, бекон, томаты, шампиньоны",
                type:"pizza"

            },
            {
                id: 1.11,
                pic: dblpepperoni,
                name: "Двойная Пепперони",
                structure: "Томатный соус, сыр моцарелла, двойная порция пепперони, итальянские травы",
                type:"pizza"

            },
            {
                id: 1.12,
                pic: bbqchicken,
                name: "Цыпленок Барбекю",
                structure: "Томатный соус, сыр моцарелла, куриная грудка, бекон, лук, соус барбекю",
                type:"pizza"

            },




        ],
        [
            {
                id: 2.1,
                name: 'Борщ',
                pic: '/images/borsch.jpg',
                structure: 'Классический мясной борщ из свеклы, капусты, картофеля, моркови и лука ',
                type:"soup"

            },
            {
                id: 2.2,
                name: 'Крем-суп сливочный',
                pic: '/images/soup.jpg',
                structure: 'Нежный и ароматный крем-суп из шампиньонов ',
                type:"soup"

            },

        ],

    ], [
        {   type:"snacks",
            id: 3.1,
            pic: '/images/batat.png',
            name: "Хрустящий батат",
            structure: "Картофель-фри сладкий батат",
        },
        {    type:"snacks",
            pic: '/images/flyingbbq.png',
            name: "Крылышки Барбекю",
            structure: "Наши фирменные крылышки в соусе Барбекю. Вы можете выбрать порцию из 8 или 16 штук",
        },
            { type:"snacks",
            id: 3.2,
            pic: '/images/hash.png',
            name: "Мини-хашбраун",
            structure: "Мини-хашбрауны с луком"
        },

        { type:"snacks",
            id: 3.3,
            pic: '/images/joner.png',
            name: "Чикен Джонер",
            structure: "Ролл с Моцареллой, сочным куриным филе, томатами, шампиньонами и соусом Чесночный Рэнч",

        },
        { type:"snacks",
            id: 3.4,
            pic: '/images/palochki.jpg',
            name: "Сырные палочки",
            structure: 'Чесночный соус, сыр моцарелла'
        },
        { type:"snacks",
            id: 3.5,
            pic: '/images/papadias.png',
            name: "Пападиас",
            structure: 'Сэндвич с итальянскими колбасками, пепперони, сыром Моцарелла, смесью 2-х сыров, итальянскими травами и томатным соусом'
        },
        { type:"snacks",
            id: 3.6,
            pic: '/images/vegijoner.png',
            name: 'Веджи джонер',
            structure: "Ролл с мягким молодым сыром, фирменным томатным соусом, сладким зеленым перцем, маслинами, томатами и луком"
        }
    ],
    [
        {   type:'drinks',
            id: 4.1,
            pic: '/images/colazero.png',
            name: "Кока-Кола без сахара",

        },
        {   type:'drinks',
            id: 4.2,
            pic: '/images/colavanila.png',
            name: "Кока-Кола Ванила",
        },
        {type:'drinks',
            id: 4.3,
            pic: '/images/cola.png',
            name: "Кока-Кола",
        },

        {type:'drinks',
            id: 4.4,
            pic: '/images/fantajuice.png',
            name: "Фанта Апельсин",
        },
        {type:'drinks',
            id: 4.5,
            pic: '/images/fantalime.png',
            name: "Фанта Цитрус",
        },
        {type:'drinks',
            id: 4.6,
            pic: '/images/bonaquablue.png',
            name: "Бонаква",

        },
        {type:'drinks',
            id: 4.7,
            pic: '/images/bonaquagreen.png',
            name: "Бонаква Газированная",
        },
        {type:'drinks',
            id: 4.8,
            pic: '/images/sprite.png',
            name: "Спрайт",
        },
        {type:'drinks',
            id: 4.9,
            pic: '/images/kvas.png',
            name: "Квас `Хатни`",
        },

    ],
    [
        {type:'sauce',
            id: 5.1,
            pic: '/images/sbbq.jpg',
            name: "Барбекю",
        },
        {   type:'sauce',
            id: 5.2,
            pic: '/images/schesnok.jpg',
            name: "Чесночный",
        },
        {   type:'sauce',
            id: 5.3,
            pic: '/images/sks.jpg',
            name: "Кисло-сладкий",
        },
        {   type:'sauce',
            id: 5.4,
            pic: '/images/sgorch.jpg',
            name: "Горчичный",
        },
        {   type:'sauce',
            id: 5.5,
            pic: '/images/smetana.png',
            name: "Сметана",
        },
        {   type:'sauce',
            id: 5.6,
            pic: '/images/sorange.png',
            name: "Маракуйа",
        },
        {   type:'sauce',
            id: 5.7,
            pic: '/images/sbrusnika.png',
            name: "Брусничный",
        },
    ],
    [
        { type:'desert',
            id: 6.1,
            pic: '/images/sirniki.png',
            name: "Сырники",
        },
        {   type:'desert',
            id: 6.2,
            pic: '/images/chococrack.jpg',
            name: "Шоколадное печенье",
        },
        {   type:'desert',
            id: 6.3,
            pic: '/images/cheesecake.png',
            name: "Стандартный чизкейк",
        },
        {   type:'desert',
            id: 6.4,
            pic: '/images/napoleon.png',
            name: "Наполеон",
        },
        {   type:'desert',
            id: 6.5,
            pic: '/images/strawberryzefir.png',
            name: "Клубника и зефир"
        },
        {   type:'desert',
            id: 6.6,
            pic: '/images/smorodina.png',
            name: "Смородина",
        },
        {   type:'desert',
            id: 6.7,
            pic: '/images/framebuaz.jpg',
            name: "Фреймбуаз",
        },

    ]

]


export default DATA