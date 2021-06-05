import Pizza from './assets/images/01_cafe_restaurants/0102.png';
import Shakshuka from './assets/images/01_cafe_restaurants/0103.jpg';
import Chicken from './assets/images/01_cafe_restaurants/0104.jpg';
import Salmon from './assets/images/01_cafe_restaurants/0105.jpg';
import Sandwich from './assets/images/01_cafe_restaurants/0107.jpg';
import GreenSalad from './assets/images/01_cafe_restaurants/0109.png';
import Cheesecake from './assets/images/01_cafe_restaurants/0110.jpg';
import Varenyku from './assets/images/01_cafe_restaurants/0111.jpg';

import Jerusalem from './assets/images/01_cafe_restaurants/0103_logo.jpg';
import ChinaHi from './assets/images/01_cafe_restaurants/0104_logo.png';
import GoodGirl from './assets/images/01_cafe_restaurants/0110_logo.jpg';

import Baguette from './assets/images/02_super_hipermarkets/0203.jpg';
import Bread from './assets/images/02_super_hipermarkets/0206.jpg';
import Vegetables from './assets/images/02_super_hipermarkets/0207.png';
import Fruits from './assets/images/02_super_hipermarkets/0208.jpg';
import Hamon from './assets/images/02_super_hipermarkets/0210.jpg';
import Drink from './assets/images/02_super_hipermarkets/0213.jpg';
import Flour from './assets/images/02_super_hipermarkets/0216.jpg';
import ProteinBar from './assets/images/02_super_hipermarkets/0217.jpg';
import GlazedCheese from './assets/images/02_super_hipermarkets/0218.jpg';

import Silpo from './assets/images/02_super_hipermarkets/0203_logo.png';
import GreenChef from './assets/images/02_super_hipermarkets/0218_logo.png';
import SmakZhyttya from './assets/images/02_super_hipermarkets/0216_logo.png';

import Sandwich2 from './assets/images/03_bakery/0302.jpg';
import Breakfast from './assets/images/03_bakery/0303.jpg';
import EspressoTonic from './assets/images/03_bakery/0304.jpg';
import PuffPastry from './assets/images/03_bakery/0305.png';
import Sandwich3 from './assets/images/03_bakery/0306.jpg';
import Brioche from './assets/images/03_bakery/0307.jpg';
import Salad from './assets/images/03_bakery/0309.jpg';
import Coffee from './assets/images/03_bakery/0315.jpg';

import BlackHoney from './assets/images/03_bakery/0303_logo.jpg';
import SvitKavy from './assets/images/03_bakery/0305_logo.png';
import Сhehovych from './assets/images/03_bakery/0306_logo.jpg';
import Shoco from './assets/images/03_bakery/0309_logo.jpg';
import DobruyPekar from './assets/images/03_bakery/0314_logo.jpg';

import ApricotMarmalade from './assets/images/04_craft/0401.jpg';
import UgerskyyCheese from './assets/images/04_craft/0402.jpg';
import YellowLemonMarmalade from './assets/images/04_craft/0403.jpg';
import GuavaMarmalade from './assets/images/04_craft/0404.jpg';
import Granola from './assets/images/04_craft/0405.jpg';
import Pesto from './assets/images/04_craft/0406.jpg';
import RawSausage from './assets/images/04_craft/0407.jpg';
import Chedder from './assets/images/04_craft/0409.jpg';

import CheeseMandry from './assets/images/04_craft/0402_logo.jpg';

const constants = {
    CAFE_RESTAURANTS: 'CAFE_RESTAURANTS',
    SUPERMARKETS_HYPERMARKETS: 'SUPERMARKETS_HYPERMARKETS',
    COFFEE_HOUSE_BAKERY: 'COFFEE_HOUSE_BAKERY',
    CRAFT_PRODUCTS_STORES: 'CRAFT_PRODUCTS_STORES'
};

const colors = {
    CAFE_RESTAURANTS: '#d3081c',
    SUPERMARKETS_HYPERMARKETS: '#0cb248',
    COFFEE_HOUSE_BAKERY: '#f9c008',
    CRAFT_PRODUCTS_STORES: '#f77b17',
    DEFAULT: '#e9e8e8',
    WHITE: '#fff',
    BLACK: '#000'
};

const titles = {
    CAFE_RESTAURANTS: {
        title: 'кафе/ресторани',
        shortTitle: 'ресторани',
        field: constants.CAFE_RESTAURANTS,
    },
    SUPERMARKETS_HYPERMARKETS: {
        title: 'супермаркети/гіпермаркети',
        shortTitle: 'супермаркети',
        field: constants.SUPERMARKETS_HYPERMARKETS,
    },
    COFFEE_HOUSE_BAKERY: {
        title: 'кав’ярні/пекарні',
        shortTitle: 'кав’ярні',
        field: constants.COFFEE_HOUSE_BAKERY,
    },
    CRAFT_PRODUCTS_STORES: {
        title: 'крамниці крафтових продуктів',
        shortTitle: 'крамниці',
        field: constants.CRAFT_PRODUCTS_STORES,
    }
};

const allCategories = [
    constants.CAFE_RESTAURANTS,
    constants.SUPERMARKETS_HYPERMARKETS,
    constants.COFFEE_HOUSE_BAKERY,
    constants.CRAFT_PRODUCTS_STORES
];

const cities = {
    LVIV: 'LVIV',
    KYIV: 'KYIV'
};

const currency = 'UAH';
const weight = 'UAH';

// Ми оновили наш мелт Суперсир,додавши туди карамелізовану цибулю,але нічого не заважає вам додати туди ще й інші інгредієнти: раджу спробувати з грушею

const allData = [
    {
        id: 1,
        category: constants.CAFE_RESTAURANTS,
        title: 'Піца Маргарита',
        date: '2021-06-04 09:30:26',
        description: 'Томатна основа, сир моцарела, базилік, оливкова олія',
        place: 'Mimosa Brooklyn Pizza',
        address: 'вулиця Басейна, 1/2',
        city: cities.KYIV,
        image: Pizza,
        price: 215,
        discount: 40,
        weight: 400
    },{
        id: 2,
        category: constants.CAFE_RESTAURANTS,
        title: 'Шак-шука з двох яєць',
        date: '2021-06-05 09:30:26',
        description: 'страва з яєць, смажених в соусі з помідорів, гострого перцю, цибулі та приправ, входить в кухню Ізраїлю і більшості арабських країн. Подається на сніданок з хумусом та пітою',
        place: 'Jerusalem',
        address: 'вулиця Мечникова, 39',
        city: cities.LVIV,
        image: Shakshuka,
        price: 127,
        discount: 51,
        logo: Jerusalem
    }, {
        id: 3,
        category: constants.CAFE_RESTAURANTS,
        title: 'Курка в кисло-солодкому соусі',
        date: '2021-06-03 09:30:26',
        description: 'Ще одна відома страва. Точніше, особливо відомий тут соус. Думки про курку в кисло-солодкому iз Китайського Привіту матеріалізуються, якщо відправити запит на сайт privet.delivery',
        place: 'Китайський Привіт на KyivFoodMarket',
        address: 'вулиця Московська, 8',
        city: cities.KYIV,
        image: Chicken,
        price: 150,
        discount: 45,
        weight: 260,
        logo: ChinaHi
    }, {
        id: 4,
        category: constants.CAFE_RESTAURANTS,
        title: 'авокадо тост з лососем та яйцем пашот',
        date: '2021-06-02 12:10:10',
        description: 'Good breakfasts подаємо з 8 ранку вееесь день кожен день на @kyivfoodmarket 💚 Не забудьте захопити з собою улюблений сік, смузі, пробіотик або шот🧃',
        place: 'Good Girl',
        address: 'вулиця Мечникова, 7',
        city: cities.KYIV,
        image: Salmon,
        price: 290,
        discount: 85,
        weight: 230,
        logo: GoodGirl
    }, {
        id: 5,
        category: constants.CAFE_RESTAURANTS, //move to coffee
        title: 'мелт з індичкою',
        date: '2021-06-01 15:20:26',
        description: 'Бездріжджовий хліб, печена індичка, свіжі томати, солоний огірок, шпинат, гірчичний соус, копчена паприка',
        place: 'Blur Coffee Shop',
        address: 'вулиця Мечникова, 5',
        city: cities.KYIV,
        image: Sandwich,
        price: 193,
        discount: 49
    },{
        id: 6,
        category: constants.CAFE_RESTAURANTS,
        title: 'Салат з авокадо, шпинатом, спаржею, тофу, огірками, едамаме, трюфельною олією і соусом з юзу⁣⁣',
        date: '2021-05-31 17:50:26',
        description: 'Зелений аспарагус, авокадо, шпинат бебі, тофу, огірки, боби едамаме, соус Юзу (масло трюфельне, масло виноградних кісточок, сік юзу, сіль, перець чорний мелений), посипаємо кунжутом⁣⁣',
        place: 'Китайський Привіт на KyivFoodMarket',
        address: 'вулиця Московська, 8',
        city: cities.KYIV,
        image: GreenSalad,
        price: 285,
        discount: 80,
        weight: 240
    }, {
        id: 7,
        category: constants.CAFE_RESTAURANTS,
        title: 'фісташковий чізкейк',
        date: '2021-05-30 17:50:26',
        description: 'Будьте обережні! Gluten free фісташковий чізкейк з маринованим ревенем вкраде ваше сердце після першого шматочка💔 Неймовірно ніжний та чудовий у своєму поєднанні!',
        place: 'Good Girl',
        address: 'вулиця Мечникова, 7',
        city: cities.KYIV,
        image: Cheesecake,
        price: 210,
        discount: 78,
        weight: 190,
        logo: GoodGirl
    },{
        id: 8,
        category: constants.CAFE_RESTAURANTS,
        title: 'Вареники з картоплі',
        date: '2021-05-29 10:50:26',
        description: 'Вареники з картоплі з сметаною та шкварками',
        place: 'Вулик Медовий',
        address: 'вулиця Михайла Грушевського, 16',
        city: cities.LVIV,
        image: Varenyku,
        price: 75,
        discount: 39,
        weight: 300
    },{
        id: 9,
        category: constants.SUPERMARKETS_HYPERMARKETS, //до кінця дня
        title: 'багет \'крафтяр\' французький подовий люкс',
        date: '2021-06-04 17:50:26',
        description: 'Знижка розповсюджується на усі багети: багет \'крафтяр\' французький подовий, гречаний, чіабату та інші',
        place: 'сільпо',
        address: 'вулиця Пасічна, 164',
        city: cities.LVIV,
        image: Baguette,
        discount: 45,
        logo: Silpo
    },{
        id: 10,
        category: constants.SUPERMARKETS_HYPERMARKETS,
        title: 'уся випічка в сільпо',
        date: '2021-06-03 12:10:26',
        description: 'Знижка розповсюджується на усю випічку власного виробництва: хліб, булочки, багети, слойки, пиріжки та ще безліч усього безпосередньо в супермаркетах',
        place: 'сільпо',
        address: 'вулиця Пасічна, 164',
        city: cities.LVIV,
        image: Bread,
        discount: 45,
        logo: Silpo
    },{
        id: 11,
        category: constants.SUPERMARKETS_HYPERMARKETS,
        title: 'усі овочі та зелень в сільпо',
        date: '2021-06-04 17:50:26',
        description: 'Знижка розповсюджується на усі овочі та зелень в супермаркетах, а саме спаржу зелену, броколі, цвітну капусту, томат чері, кабачок, редиска, авокадо хаас, перець солодкий капі або чилі, цибулю ріпчату жовту та багато інших',
        place: 'сільпо',
        address: 'вулиця Пасічна, 164',
        city: cities.LVIV,
        image: Vegetables,
        discount: 50,
        logo: Silpo
    },{ // пропозиція діє з по
        id: 12,
        category: constants.SUPERMARKETS_HYPERMARKETS,
        title: 'усі фрукти та ягоди в сільпо',
        date: '2021-06-03 12:10:10',
        description: 'Знижка розповсюджується на усі фрукти та ягоди в супермаркетах, а саме манго, апельсин, ківі ваговий, банан, лимон, грушу конференція, ананас голд та багато інших',
        place: 'сільпо',
        address: 'вулиця Пасічна, 164',
        city: cities.LVIV,
        image: Fruits,
        discount: 50,
        logo: Silpo
    },{
        id: 13,
        category: constants.SUPERMARKETS_HYPERMARKETS,
        title: 'хамон Comego',
        date: '2021-06-02 15:20:26',
        description: 'пропозиція на хамон Comego, нарізка, діє в усіх супермаркетах',
        place: 'сільпо',
        address: 'вулиця Пасічна, 164',
        city: cities.LVIV,
        image: Hamon,
        price: 150,
        discount: 30,
        logo: Silpo,
        weight: 120
    },{
        id: 14,
        category: constants.SUPERMARKETS_HYPERMARKETS,
        title: 'SUPER MATCHA',
        date: '2021-06-01 17:50:26',
        description: 'SUPER MATCHA CLEAN Натуральний газований енергетичний напій - аромат лимона та матчі',
        place: 'сільпо',
        address: 'вулиця Пасічна, 164',
        city: cities.LVIV,
        image: Drink,
        price: 150,
        discount: 30,
        logo: Silpo,
        weight: 240
    },{
        id: 15,
        category: constants.SUPERMARKETS_HYPERMARKETS,
        title: 'усе Борошно в смак життя',
        date: '2021-06-01 17:50:26',
        description: 'Знижка розповсюджується на усе Борошно в магазинах: вівсяне, кукурудзяне, рисове, житнє власного виробництва (цільнозернове, органічне), з сочевиці та твердих сортів пшениці',
        place: 'смак життя',
        address: 'вулиця Зелена, 19',
        city: cities.LVIV,
        image: Flour,
        price: 80,
        discount: 38,
        logo: SmakZhyttya,
        weight: 500
    },{
        id: 16,
        category: constants.SUPERMARKETS_HYPERMARKETS,
        title: 'Taketake бокс з 12 батончиків',
        date: '2021-05-31 10:50:26',
        description: 'Останні дні знижки на батончики на нашому сайті🥜 А в п\'ятницю знову з\'являться батончики зі смаком ванілі і малини, які вже встигли вам полюбитися. Якщо ще не пробували, то ми вам дуууже радимо 😉',
        place: 'Taketake в сільпо',
        address: 'вулиця Пасічна, 164',
        city: cities.LVIV,
        image: ProteinBar,
        price: 468,
        discount: 30,
        logo: Silpo
    },{
        id: 17,
        category: constants.SUPERMARKETS_HYPERMARKETS,
        title: 'глазурований сирок classic',
        date: '2021-05-30 10:50:26',
        description: 'крем-сир з кеш’ю (кеш’ю, вода, рослинний пробіотик), сік лимона, сині родзинки , олія кокосова, борошно кокосове, сироп агави, екстракт ванілі, шоколадна глазур',
        place: 'Green Chef в Сільпо',
        address: 'вулиця Пасічна, 164',
        city: cities.LVIV,
        image: GlazedCheese,
        price: 75,
        discount: 79,
        weight: 80,
        logo: GreenChef
    },{
        id: 18,
        category: constants.COFFEE_HOUSE_BAKERY,
        title: 'Сендвіч з овочами та індичкою власного приготування',
        date: '2021-05-30 17:50:26',
        description: 'Печений перець, томлений шпинат, крем-сир, пікантний соус, салатний мікс, фенхель, морква, кунжут',
        place: 'SHOco.',
        address: 'вулиця Угорська, 12',
        city: cities.LVIV,
        image: Sandwich2,
        price: 179,
        discount: 50,
        logo: Shoco,
    },{
        id: 19,
        category: constants.COFFEE_HOUSE_BAKERY,
        title: 'Французький сніданок в Світі кави',
        date: '2021-05-29 12:10:26',
        description: 'Знижка розповсюджується на сніданок в який входить кава чи альтернатива на вибір, фреш: апельсиновий, грейпфрутовий або апельсиново-грейпфрутовий та круасан на вибір з прошуто та в’яленими томатами або з сиром Бюш та помідорами',
        place: 'Світ Кави',
        address: 'площа Катедральна, 6',
        city: cities.LVIV,
        image: Breakfast,
        price: 179,
        discount: 50,
        logo: SvitKavy,
    },{
        id: 20,
        category: constants.COFFEE_HOUSE_BAKERY,
        title: 'Кожен 9 напій з нашої кавової карти',
        date: '2021-06-04 17:50:26',
        description: 'Еспресо – 29 грн, Фільтр – 44 грн, Капучіно – 39 грн, Флет Вайт – 46 грн, Латте – 46 грн, V 60 – 44 грн, Колд брю – 59 грн , Раф кава – 54 грн',
        place: 'Black Honey',
        address: 'вулиця Галицька, 20',
        city: cities.LVIV,
        image: EspressoTonic,
        logo: BlackHoney,
        discount: 100,
    },{
        id: 21,
        category: constants.COFFEE_HOUSE_BAKERY,
        title: 'Слойка з хурмою і кремом з обліпихи',
        date: '2021-06-04 12:10:10',
        description: 'Блискавка! Наш шеф-пекар Максим сьогодні викотив новинку - слойку з хурмою і кремом з обліпихи. Розібрали за пару годин. Рекомендуємо завтра прийти раніше і спробувати. Повірте - це варто того',
        place: 'Добрий Пекар',
        address: 'вулиця Лесі Українки, 27',
        city: cities.LVIV,
        image: PuffPastry,
        logo: DobruyPekar,
        discount: 50,
    },{
        id: 22,
        category: constants.COFFEE_HOUSE_BAKERY,
        title: 'сендвіч з куркою',
        date: '2021-06-03 15:20:26',
        description: 'Що може бути кращим за смачний сандвіч на перекус?',
        place: 'Палярня Чехович',
        address: 'вулиця Героїв УПА, 72',
        city: cities.LVIV,
        image: Sandwich3,
        price: 189,
        discount: 34,
        logo: Сhehovych
    },{
        id: 23,
        category: constants.COFFEE_HOUSE_BAKERY,
        title: 'свіжі слойки, круасани і соковиті ромові баби',
        date: '2021-06-02 17:50:26',
        description: 'Друзі! Багато з вас не знають, але недавно ми відкрили нову, красиву, велику пекарню. А це означає, що класних Тартіні, слойок з кардамоном, свіжих круасанів і соковитих ромових баб побільшає!',
        place: 'Futura Bakery',
        address: 'вулиця Лесі Українки, 27',
        city: cities.LVIV,
        discount: 20,
        image: Brioche
    },{
        id: 24,
        category: constants.COFFEE_HOUSE_BAKERY,
        title: 'Французький сніданок',
        date: '2021-06-01 17:50:26',
        description: 'салатний мікс, авокадо, кіноа, яйця пашот, цільнозернова грінка, грецький йогурт, лосось/індичка (шинка) власного приготування',
        place: 'SHOco.',
        address: 'вулиця Угорська, 12',
        city: cities.LVIV,
        image: Salad,
        price: 189,
        discount: 34,
        logo: Shoco
    },{
        id: 25,
        category: constants.COFFEE_HOUSE_BAKERY,
        title: 'знижка на ковові зерна, обсмажені під фільтр',
        date: '2021-06-02 10:50:26',
        description: 'Для фільтра ефіопія-іргачеффе, Яскраві ноти жасмину, лимона та спецій з яскравою кислотністю стиглого лайма',
        place: 'Black Honey',
        address: 'Bussines Hub, вулиця Шота Руставелі, 12',
        city: cities.LVIV,
        image: Coffee,
        price: 350,
        discount: 34,
        weight: 250,
        logo: BlackHoney
    },{
        id: 26,
        category: constants.CRAFT_PRODUCTS_STORES,
        title: 'Мармелад з абрикосу',
        date: '2021-06-02 17:50:26',
        description: 'Мармелад з абрикосу виготовлений з інгредієнтів преміум-класу для справедливої торгівлі',
        place: 'сирні мандри',
        address: 'вулиця Сихівська, 16А',
        city: cities.LVIV,
        image: ApricotMarmalade,
        price: 100,
        discount: 50,
        weight: 350,
        logo: CheeseMandry
    },{
        id: 27,
        category: constants.CRAFT_PRODUCTS_STORES,
        title: 'Угерський витриманий сир за рецептурою Гауди',
        date: '2021-06-01 12:10:26',
        description: 'Угерський витриманий сир з карамельним післясмаком – це “must have” для поціновувачів твердих сирів. Голова цього красеня може досягати 10 кг, а діаметр – пів метра. Зварений сир з коров’ячого молока за технологією витриманої Гауди (Gouda Old)',
        place: 'сирні мандри',
        address: 'вулиця Сихівська, 16А',
        city: cities.LVIV,
        image: UgerskyyCheese,
        price: 129,
        discount: 69,
        weight: 250,
        logo: CheeseMandry
    },{
        id: 28,
        category: constants.CRAFT_PRODUCTS_STORES,
        title: 'Мармелад з жовтого лимону',
        date: '2021-06-04 17:50:26',
        description: 'Мармелад з жовтого лимону виготовлений з інгредієнтів преміум-класу для справедливої торгівлі',
        place: 'сирні мандри',
        address: 'вулиця Сихівська, 16А',
        city: cities.LVIV,
        image: YellowLemonMarmalade,
        logo: CheeseMandry,
        price: 100,
        discount: 50,
        weight: 350
    },{
        id: 29,
        category: constants.CRAFT_PRODUCTS_STORES,
        title: 'Мармелад з гуави',
        date: '2021-05-31 10:50:26',
        description: 'Мармелад з гуави виготовлений з інгредієнтів преміум-класу для справедливої торгівлі',
        place: 'сирні мандри',
        address: 'вулиця Сихівська, 16А',
        city: cities.LVIV,
        image: GuavaMarmalade,
        logo: CheeseMandry,
        price: 100,
        discount: 50,
        weight: 350,
    },
    {
        id: 30,
        category: constants.CRAFT_PRODUCTS_STORES,
        title: 'Гранола лісова ягода',
        date: '2021-05-28 17:50:26',
        description: 'Гранола це натуральна вівсянка, карамелізована з медом та доповнена в’яленим ананасом, курагою, родзинками, журавлиною та мигдалем. Хрустка, корисна та неймовірно смачна:) Дітки люблять смакувати з молоком та йогуртом',
        place: 'сирні мандри',
        address: 'вулиця Сихівська, 16А',
        city: cities.LVIV,
        image: Granola,
        logo: CheeseMandry
    },{
        id: 31,
        category: constants.CRAFT_PRODUCTS_STORES,
        title: 'Махан із баранини, який виготовлений на Закарпатті',
        date: '2021-05-29 10:50:26',
        description: 'Махан із баранини, який виготовлений на Закарпатті – це традиційна татарська ковбаса, в складі якої лише відбірна баранина, сушені спеції  та часник',
        place: 'сирні мандри',
        address: 'вулиця Сихівська, 16А',
        city: cities.LVIV,
        image: RawSausage,
        price: 118,
        discount: 49,
        weight: 200,
        logo: CheeseMandry
    },
    {
        id: 32,
        category: constants.CRAFT_PRODUCTS_STORES,
        title: 'Чеддер з козячого молока річної витримки. Сир Белз',
        date: '2021-05-27 17:50:26',
        description: 'Чеддер з козячого молока річної витримки – довгоочікувана новинка в нашому асортименті. Два роки ми вже виготовляємо сир Скит – чеддер з коров’ячого молока за традиційною англійською технологією, з використанням методу “бандажування” сирної голови',
        place: 'сирні мандри',
        address: 'вулиця Сихівська, 16А',
        city: cities.LVIV,
        image: Chedder,
        price: 179,
        discount: 59,
        weight: 250,
        logo: CheeseMandry
    },
    // {
    //     title: 'кафе/ресторани',
    //     field: constants.CAFE_RESTAURANTS,
    //     items: [{
    //         title: 'кафе',
    //         field: 'CAFE',
    //         names: [{
    //             name: 'Epic Cheeseburger',
    //             address: cities.LVIV
    //         },{
    //             name: 'Cheese Bakery',
    //             address: cities.LVIV
    //         },{
    //             name: 'Cukor',
    //             address: cities.LVIV
    //         }]
    //     },{
    //         title: 'ресторани',
    //         field: 'RESTAURANTS',
    //         names: [{
    //             name: 'Корки та крихти',
    //             address: cities.LVIV
    //         },{
    //             name: 'Ресторація Бачевських',
    //             address: cities.LVIV
    //         },{
    //             name: 'MAD bar\'s house',
    //             address: cities.LVIV
    //         },{
    //             name: 'MolodoZeleno',
    //             address: cities.LVIV
    //         },{
    //             name: '1708 Pizza',
    //             address: cities.LVIV
    //         },{
    //             name: 'Om nom nom',
    //             address: cities.LVIV
    //         },{
    //             name: 'Ахалі, більше ніж хінкальня',
    //             address: cities.LVIV
    //         },{
    //             name: 'Хінкальня',
    //             address: cities.LVIV
    //         },{
    //             name: 'Mimosa Brooklyn Pizza',
    //             address: 'KYIV'
    //         },{
    //             name: 'Good girl',
    //             address: 'KYIV'
    //         },{
    //             name: 'Milk Bar Tsum',
    //             address: 'KYIV'
    //         },{
    //             name: 'Bali bowl',
    //             address: 'KYIV'
    //         },{
    //             name: 'Khlebniy',
    //             address: 'KYIV'
    //         },{
    //             name: 'Тайський Привіт',
    //             address: 'KYIV'
    //         },{
    //             name: 'Fish & Pussycat',
    //             address: 'KYIV'
    //         },{
    //             name: 'Goodwine',
    //             address: 'KYIV'
    //         },{
    //             name: 'Sho',
    //             address: 'KYIV'
    //         }]
    //     }]
    // },{
    //     title: 'cупермаркети/гіпермаркети',
    //     field: constants.SUPERMARKETS_HYPERMARKETS,
    //     items: [{
    //         title: 'cупермаркети',
    //         field: 'SUPERMARKETS',
    //         names: [{
    //             name: 'Сільпо',
    //             address: cities.LVIV
    //         },{
    //             name: 'АТБ',
    //             address: cities.LVIV
    //         },{
    //             name: 'Арсен',
    //             address: cities.LVIV
    //         },{
    //             name: 'Рукавичка',
    //             address: cities.LVIV
    //         },{
    //             name: 'Близенько',
    //             address: cities.LVIV
    //         },{
    //             name: 'Spar',
    //             address: cities.LVIV
    //         }]
    //     },{
    //         title: 'гіпермаркети',
    //         field: 'HYPERMARKETS',
    //         names: [{
    //             name: 'Ашан',
    //             address: cities.LVIV
    //         },{
    //             name: 'Метро',
    //             address: cities.LVIV
    //         }]
    //     }]
    // },{
    //     title: 'Кав’ярні/пекарні',
    //     field: constants.COFFEE_HOUSE_BAKERY,
    //     items: [{
    //         title: 'Кав’ярні',
    //         field: 'COFFEE_HOUSE',
    //         names: [{
    //             name: 'Black Honey',
    //             address: cities.LVIV
    //         },{
    //             name: 'Seven heaven',
    //             address: cities.LVIV
    //         },{
    //             name: 'Альтернативна кава',
    //             address: cities.LVIV
    //         },{
    //             name: 'Світ кави',
    //             address: cities.LVIV
    //         },{
    //             name: 'Палярня Чехович',
    //             address: cities.LVIV
    //         },{
    //             name: 'Studio 78',
    //             address: cities.LVIV
    //         },{
    //             name: 'Idealist Coffee',
    //             address: 'KYIV'
    //         },{
    //             name: 'Takava',
    //             address: 'KYIV'
    //         },{
    //             name: 'Yellow Place',
    //             address: 'KYIV'
    //         }]
    //     },{
    //         title: 'пекарні',
    //         field: 'BAKERY',
    //         names: [{
    //             name: 'SHOсo',
    //             address: cities.LVIV
    //         },{
    //             name: 'Кримська перепічка',
    //             address: cities.LVIV
    //         },{
    //             name: 'Живий Хліб',
    //             address: cities.LVIV
    //         },{
    //             name: 'Пекар',
    //             address: cities.LVIV
    //         },{
    //             name: 'Братванка',
    //             address: cities.LVIV
    //         },{
    //             name: 'Добрий пекар',
    //             address: cities.LVIV
    //         },{
    //             name: 'Млин',
    //             address: cities.LVIV
    //         },{
    //             name: 'Культ хліба',
    //             address: cities.LVIV
    //         }]
    //     }]
    // },{
    //     title: 'крамниці крафтових продуктів',
    //     field: constants.CRAFT_PRODUCTS_STORES,
    //     names: [{
    //         name: 'Сирні мандри',
    //         address: cities.LVIV
    //     },{
    //         name: 'Фруктовий сад',
    //         address: cities.LVIV
    //     },{
    //         name: 'Овочі та фрукти',
    //         address: cities.LVIV
    //     },{
    //         name: 'Смак життя',
    //         address: cities.LVIV
    //     }]
    // }
];

export default {
    CATEGORY_CONSTANTS: constants,
    CATEGORY_TITLES: titles,
    ALL_CATEGORIES: allCategories,
    ALL_ITEMS: allData,
    COLORS: colors
};