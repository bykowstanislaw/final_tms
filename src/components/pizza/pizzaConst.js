
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
// const panazia="/images/panazia.jpg"



const dataPizza = [

    {
        id: 1,
        pic: veganskaya,
        name: "Веганская",
        structure: "Томатный соус, веганский сыр, томаты, шампиньоны, лук, сладкий зеленый перец, маслины",
        price:18.40,
        meat:false,
        hot:false,
        mashrooms:true,
    },
    {
        id: 2,
        pic: pepperoni,
        name: "Пепперони",
        structure: "Томатный соус, сыр моцарелла, пепперони",
        price:14.80,
        meat:true,
        hot:false,
        mashrooms:false,
        
    },
    {
        id: 3,
        pic: vig,
        name: "Ветчина и грибы",
        structure: "Сыр моцарелла, соус чесночный ранч, ветчина, шампиньоны, чеснок",
        price:11.20,
        meat:true,
        hot:false,
        mashrooms:true,
    },
    {
        id: 4,
        pic: supermix,
        name: "Супермикс",
        structure: "Четыре любимых пиццы в одной: Гавайская, Мексиканская, Супер Папа, Пепперони",
        price:35.50,
        meat:true,
        hot:true,
        mashrooms:false,
    },
    {
        id: 5,
        pic: mexico,
        name: "Мексиканская",
        structure: "Томатный соус, сыр моцарелла, куриная грудка, сладкий зеленый перец, лук, шампиньоны, томаты, перец халапеньо",
        price:14.90,
        meat:true,
        hot:true,
        mashrooms:true,

    },
    {
        id: 6,
        pic: chicken,
        name: "Чикен Ранч",
        structure: "Соус чесночный ранч, сыр моцарелла, куриная грудка, бекон, томаты, чеснок",
        price:17.50,
        meat:true,
        hot:false,
        mashrooms:false,

    },
    {
        id: 7,
        pic: superburg,
        name: "Супер Чизбургер",
        structure: "Соус тысяча островов, сыр моцарелла, смесь 2-х сыров, смесь 3-х сыров, говядина, бекон, томаты, маринованные огурчики, лук",
        price:22.30,
        meat:true,
        hot:false,
        mashrooms:true,

    },
    {
        id: 8,
        pic: papamix,
        name: "Папа Микс Рэнч",
        structure: "Соус чесночный ранч, сыр моцарелла, куриная грудка, бекон, томаты, чеснок",
        price:35.60,
        meat:true,
        hot:true,
        mashrooms:false,

    },
    {
        id: 9,
        pic: bigbonanza,
        name: "Большая Бонанза",
        structure: "Соус барбекю, сыр моцарелла, говядина, бекон, ветчина, лук, томаты, халапеньо, сыр фета",
        price:20.10,
        meat:true,
        hot:true,
        mashrooms:false,

    },
    {
        id: 10,
        pic: alfredo,
        name: "Альфредо",
        structure: "Соус шпинатный, сыр моцарелла, ветчина, бекон, томаты, шампиньоны",
        price:17.50,
        meat:true,
        hot:false,
        mashrooms:false,
    },
    {
        id: 11,
        pic: dblpepperoni,
        name: "Двойная Пепперони",
        structure: "Томатный соус, сыр моцарелла, двойная порция пепперони, итальянские травы",
        price:20.10,
        meat:true,
        hot:false,
        mashrooms:false,

    },
    {
        id: 12,
        pic: bbqchicken,
        name: "Цыпленок Барбекю",
        structure: "Томатный соус, сыр моцарелла, куриная грудка, бекон, лук, соус барбекю",
        price:14.90,
        meat:true, 
        hot:false,
        mashrooms:false,

    },




]

export default dataPizza