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
// import Pesto from './assets/images/04_craft/0406.jpg';
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

// const currency = 'UAH';
// const weight = 'UAH';

// Ми оновили наш мелт Суперсир,додавши туди карамелізовану цибулю,але нічого не заважає вам додати туди ще й інші інгредієнти: раджу спробувати з грушею

const allData = [
    {
        uiId: 1,
        id: 1,
        category: constants.CAFE_RESTAURANTS,
        title: 'Піца Маргарита',
        date: '2021-06-04 09:30:26',
        description: 'Піца!!! Що ми про неї знаємо? Знаємо, що перший шматочок безцінний, а останній - найсмачніший! Томатна основа, сир моцарела, базилік, оливкова олія👌🏻 come meet! Яку надкусити першої? 🍕Calabreze like a crazy з Пепероні і Калабрезе,часником конфі,козячим сиром,медом і чилі-маслом. або 🍕Fig&Pig з пармезан соусом,беконом,інжиром,сиром Горгонзола і інжировим бальзамічним кремом?',
        place: 'Mimosa Brooklyn Pizza',
        address: 'вулиця Басейна, 1/2',
        city: cities.KYIV,
        image: Pizza,
        price: 215,
        discount: 40,
        weight: 400
    },{
        uiId: 12,
        id: 2,
        category: constants.CAFE_RESTAURANTS,
        title: 'Шак-шука з двох яєць',
        date: '2021-06-05 09:30:26',
        description: 'Ще одна ідея на сніданок - це як яєшня з помідором тільки не яєшня. Страва з яєць, смажених в соусі з помідорів, гострого перцю, цибулі та приправ, входить в кухню Ізраїлю і більшості арабських країн. Подається на сніданок з хумусом та пітою',
        about: 'Ми віримо, що якщо розпочати ранок з шак-шуки, то день буде🔥',
        place: 'Jerusalem',
        address: 'вулиця Мечникова, 39',
        city: cities.LVIV,
        image: Shakshuka,
        price: 127,
        discount: 51,
        logo: Jerusalem
    }, {
        uiId: 15,
        id: 3,
        category: constants.CAFE_RESTAURANTS,
        title: 'Курка в кисло-солодкому соусі',
        date: '2021-06-03 09:30:26',
        description: 'Ще одна відома страва. Точніше, особливо відомий тут соус. Думки про курку в кисло-солодкому iз Китайського Привіту матеріалізуються, якщо відправити запит на сайт privet.delivery',
        about: 'Китайський Привіт - міське сімейне китайське кафе, відоме не тільки автентичною їжею, а й розвагами. До нас приходять за враженнями, і в цьому ми знаходимо сенс існування - робити місто і життя його мешканців цікавіше, смачніше і красивіше. Шеф Сян і команда китайських кухарів готують всі страви за оригінальними рецептами китайської кухні, тому наші гості відчувають, що тут все по-справжньому',
        place: 'Китайський Привіт на KyivFoodMarket',
        address: 'вулиця Московська, 8',
        city: cities.KYIV,
        image: Chicken,
        price: 150,
        discount: 45,
        weight: 260,
        logo: ChinaHi,
        cal: 350
    }, {
        uiId: 20,
        id: 4,
        category: constants.CAFE_RESTAURANTS,
        title: 'авокадо тост з лососем та яйцем пашот',
        date: '2021-06-02 12:10:10',
        description: 'Денна доза вітамінів, мінералів і клітковини на сніданок чи обід💚 Good breakfasts подаємо з 8 ранку вееесь день кожен день на @kyivfoodmarket 💚 Не забудьте захопити з собою улюблений сік, смузі, пробіотик або шот🧃',
        about: 'Якщо ви відчуваєте гостру нестачу в організмі круасанів з мигдалем, гречаних багетів, авокадо-тостів чи неймовірних плюшок від Good Girl, хутчіш на Kyiv Food Market. Ми відкрили там міні-пекарню, що дозволяє нам протягом усього дня готувати свіжу випічку, а вам — забирати її ще теплою',
        place: 'Good Girl',
        address: 'вулиця Мечникова, 7',
        city: cities.KYIV,
        image: Salmon,
        price: 290,
        discount: 85,
        weight: 230,
        logo: GoodGirl
    }, {
        uiId: 21,
        id: 5,
        category: constants.CAFE_RESTAURANTS, //move to coffee
        title: 'мелт з індичкою',
        date: '2021-06-01 15:20:26',
        description: 'У меню так багато нового, а це ідеальний привід завітати до нас на бранч!💔 Бездріжджовий хліб, печена індичка, свіжі томати, солоний огірок, шпинат, гірчичний соус, копчена паприка',
        about: 'Дві новини: мелт з індичкою та мелт з креветкою. Ви можете замовити мелт Крок-месьє(філе індички, тостовий хліб із Bakehouse, сир Проволоне вальпадана, салат Айсберг, масло гхі, майонез власного виробництва) і мелт з креветкою (основа та ж, а до неї креветки, цедра лимона та соус Світ чилі). На приготування нам знадобиться 3 хвилини',
        place: 'Blur Coffee Shop',
        address: 'вулиця Мечникова, 5',
        city: cities.KYIV,
        image: Sandwich,
        price: 193,
        discount: 49,
        cal: 420
    },{
        uiId: 10,
        id: 6,
        category: constants.CAFE_RESTAURANTS,
        title: 'Салат з авокадо, шпинатом, спаржею, тофу, огірками, едамаме, трюфельною олією і соусом з юзу⁣⁣',
        date: '2021-05-31 17:50:26',
        description: 'Ми створили Зелений салат, як ідеальну страву для повноцінного обіду. В ньому повільні вуглеводи (кіноа), корисні жири, зелень, багато білка та максимальна кількість вітамінів. До бази можна обрати додатки у вигляді тунця, стейка лосося, індички пастрамі або креветок. Насичує та заряджає енергією! Обирайте для себе найкраще❤️ Зелений аспарагус, авокадо, шпинат бебі, тофу, огірки, боби едамаме, соус Юзу (масло трюфельне, масло виноградних кісточок, сік юзу, сіль, перець чорний мелений), посипаємо кунжутом⁣⁣',
        about: 'Ми обожнюємо наш зелений салат за його легкість',
        place: 'Китайський Привіт на KyivFoodMarket',
        address: 'вулиця Московська, 8',
        city: cities.KYIV,
        image: GreenSalad,
        price: 285,
        discount: 80,
        weight: 240
    }, {
        uiId: 19,
        id: 7,
        category: constants.CAFE_RESTAURANTS,
        title: 'фісташковий чізкейк',
        date: '2021-05-30 17:50:26',
        description: 'Будьте обережні! Gluten free фісташковий чізкейк з маринованим ревенем вкраде ваше сердце після першого шматочка💔 Неймовірно ніжний та чудовий у своєму поєднанні! В складі - основа (фундук, мигдаль, фінік, кокосове масло) крем з кешью, фісташкової пасти, кокосового молока, сироп агави і агар агар. Прикрашаємо свіжою полуницею, маринованим ревенем і фісташкою',
        about: 'Також Good Girl має у меню близько 10 позицій з круасанами та хлібом. До речі, тут плюшки є щодня, а не лише на вихідних. А ще є сніданки.',
        place: 'Good Girl',
        address: 'вулиця Мечникова, 7',
        city: cities.KYIV,
        image: Cheesecake,
        price: 210,
        discount: 78,
        weight: 190,
        logo: GoodGirl,
        cal: 245
    },{
        uiId: 5,
        id: 8,
        category: constants.CAFE_RESTAURANTS,
        title: 'Вареники з картоплі',
        date: '2021-05-29 10:50:26',
        description: 'Вареники з картоплі, подаються з сметаною та шкварками. Вареники ручної ліпки, зі здобного тіста як у бабусі',
        place: 'Вулик Медовий',
        address: 'вулиця Михайла Грушевського, 16',
        city: cities.LVIV,
        image: Varenyku,
        price: 75,
        discount: 39,
        weight: 300,
        cal: 345
    },{
        uiId: 11,
        id: 9,
        category: constants.SUPERMARKETS_HYPERMARKETS, //до кінця дня
        title: 'багет \'крафтяр\' французький подовий люкс та всі інші',
        date: '2021-06-04 17:50:26',
        description: 'Знижка розповсюджується на усі багети: багет \'крафтяр\' французький подовий, гречаний, чіабату та інші',
        about: 'Нашим багетам вистачає 7 секунд, щоб домчати з пекарні до полиць у супермаркеті',
        place: 'сільпо',
        address: 'вулиця Пасічна, 164',
        city: cities.LVIV,
        image: Baguette,
        discount: 45,
        logo: Silpo
    },{
        uiId: 18,
        id: 10,
        category: constants.SUPERMARKETS_HYPERMARKETS,
        title: 'уся випічка в сільпо',
        date: '2021-06-03 12:10:26',
        description: 'Знижка розповсюджується на усю випічку власного виробництва: хліб, булочки, багети, слойки, пиріжки та ще безліч усього безпосередньо в супермаркетах',
        about: 'Ми заборонили нашому копірайтеру ставити сердечка замість тексту, але ж так хотілося, так хотілося… Хліб у сільпо заслуговує всіх емодзі світу: завжди свіжий, на заквасці, з різного борошна, з зернами та горіхами… Замовляйте доставку у додатку',
        place: 'сільпо',
        address: 'вулиця Пасічна, 164',
        city: cities.LVIV,
        image: Bread,
        discount: 45,
        logo: Silpo
    },{
        uiId: 2,
        id: 11,
        category: constants.SUPERMARKETS_HYPERMARKETS,
        title: 'усі овочі та зелень в сільпо',
        date: '2021-06-04 17:50:26',
        description: 'Знижка розповсюджується на усі овочі та зелень в супермаркетах, а саме спаржу зелену, броколі, цвітну капусту, томат чері, кабачок, редиска, авокадо хаас, перець солодкий капі або чилі, цибулю ріпчату жовту та багато інших',
        about: 'Королева детоксу та героїня купи мемів про здорове харчування, капуста, якої бояться усі ті, хто тільки замислюється про дієту — броколі. А чого боятися, ну? Все з нею добре, просто треба навчитися її готувати, знайти свої спеції… Поекспериментуйте в рамках нашого детокс-січня: купуйте броколі та інші продукти, що сприяють очищенню організму, та отримайте на них -50%. Пропозиція актуальна за умови придбання від трьох одиниць товару. Шукайте healthy food у сільпо (спеціальні цінники підкажуть, де їх знайти), а також у нашому додатку',
        place: 'сільпо',
        address: 'вулиця Пасічна, 164',
        city: cities.LVIV,
        image: Vegetables,
        discount: 50,
        logo: Silpo
    },{ // пропозиція діє з по
        uiId: 17,
        id: 12,
        category: constants.SUPERMARKETS_HYPERMARKETS,
        title: 'усі фрукти та ягоди в сільпо',
        date: '2021-06-03 12:10:10',
        description: 'Знижка розповсюджується на усі фрукти та ягоди в супермаркетах, а саме манго, апельсин, ківі ваговий, банан, лимон, грушу конференція, ананас голд та багато інших',
        about: 'Ми попросили манго охарактеризувати себе трьома словами, він сказав лише одне: "бездоганний". Максимально соковитий, з правильним балансом солодкості та кислинки — прямо зараз у відділі фреш у goodwine на Мечникова. Також його можна замовити за посиланням у профілі. Мінімум цукрів — максимум клітковини. Так у двох словах можна описати чорні ягоди, які ми теж радимо включити у раціон під час детокс-місяця. Чорний колір говорить про велику кількість антиоксидантів, які теж відіграють важливу роль для здоров\'я, тому не стримуйте себе — хай ягоди стануть вашим десертом. Нагадуємо, що упродовж місяця на них та інші детокс-продукти діють-50% (за умови придбання від трьох одиниць товару).Перелік продуктів шукайте у додатку',
        place: 'сільпо',
        address: 'вулиця Пасічна, 164',
        city: cities.LVIV,
        image: Fruits,
        discount: 50,
        logo: Silpo
    },{
        uiId: 24,
        id: 13,
        category: constants.SUPERMARKETS_HYPERMARKETS,
        title: 'хамон Comego',
        date: '2021-06-02 15:20:26',
        description: ' Ми не можемо запросити вас на барбекю, проте ми можемо розповісти про хамони. У нас саме починається місяць іспанських від Comego. Пропозиція на хамон Comego, нарізка, діє в усіх супермаркетах',
        place: 'сільпо',
        address: 'вулиця Пасічна, 164',
        city: cities.LVIV,
        image: Hamon,
        price: 150,
        discount: 30,
        logo: Silpo,
        weight: 120
    },{
        uiId: 22,
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
        uiId: 6,
        id: 15,
        category: constants.SUPERMARKETS_HYPERMARKETS,
        title: 'усе борошно',
        date: '2021-06-01 17:50:26',
        description: 'Знижка розповсюджується на усе борошно в магазинах: вівсяне, кукурудзяне, рисове, житнє власного виробництва (цільнозернове, органічне), з сочевиці та твердих сортів пшениці',
        place: 'смак життя',
        address: 'вулиця Зелена, 19',
        city: cities.LVIV,
        image: Flour,
        price: 80,
        discount: 38,
        logo: SmakZhyttya,
        weight: 500
    },{
        uiId: 29,
        id: 16,
        category: constants.SUPERMARKETS_HYPERMARKETS,
        title: 'Taketake бокс з 12 батончиків',
        date: '2021-05-31 10:50:26',
        description: 'Останні дні знижки на батончики на нашому сайті🥜 А в п\'ятницю знову з\'являться батончики зі смаком ванілі і малини, які вже встигли вам полюбитися. Якщо ще не пробували, то ми вам дуууже радимо 😉 Еволюція у спрощенні. Ми взяли звичайні і не зовсім звичайні інгредієнти,правильно розподілили їх між собою, не додаючи нічого зайвого, і отримали максимально смачний і простий за складом батончик. Насолоджуйся. На основі арахісу 35г - фінік арахіс, какао арахіс, малина арахіс, ваніль арахіс, На основі кеш\'ю та мигдалю 46г - кумкват гарбуз, кеш\'ю мигдаль, гуарана матча, спіруліна розмарин м`ята, бузина липа меліса, какао кокос',
        place: 'Taketake в сільпо',
        address: 'вулиця Пасічна, 164',
        city: cities.LVIV,
        image: ProteinBar,
        price: 468,
        discount: 30,
        logo: Silpo
    },{
        uiId: 32,
        id: 17,
        category: constants.SUPERMARKETS_HYPERMARKETS,
        title: 'глазурований сирок classic від Green Chef',
        date: '2021-05-30 10:50:26',
        description: 'Крем-сир з кеш’ю (кеш’ю, вода, рослинний пробіотик), сік лимона, сині родзинки , олія кокосова, борошно кокосове, сироп агави, екстракт ванілі, шоколадна глазур',
        about: 'У вас ніколи не було такого, що продукт дивився на вас? Час і всесвіт завмирають, нічого не існує, окрім вас двох, навколо тиша, в якій чути тільки ваше посилене серцебиття. Сирки у шоколаді майстри в ай контакт, а новинка від Green Chef — це взагалі. На один сирок Green Chef беруть 200 г молока, з якого роблять відпресований грецький йогурт. Додають трохи мадагаскарської ванілі та вкривають шоколадом. У нашому відділі plant-based продуктів особливі новинки від українського бренду Green Chef: сирки з ферментованої кеш’ю-маси у глазурі. Смак, як і склад, ідеальні, нагода скуштувати альтернативу знайомим продуктам — теж',
        place: 'Сільпо',
        address: 'вулиця Пасічна, 164',
        city: cities.LVIV,
        image: GlazedCheese,
        price: 75,
        discount: 79,
        weight: 80,
        logo: GreenChef
    },{
        uiId: 25,
        id: 18,
        category: constants.COFFEE_HOUSE_BAKERY,
        title: 'Сендвіч з овочами та індичкою власного приготування',
        date: '2021-05-30 17:50:26',
        description: 'Печений перець, томлений шпинат, крем-сир, пікантний соус, салатний мікс, фенхель, морква, кунжут. Просто візьміть з собою: сендвіч з індичкою- - ситно, зручно, особливо якщо поспішаєте',
        place: 'SHOco.',
        address: 'вулиця Угорська, 12',
        city: cities.LVIV,
        image: Sandwich2,
        price: 179,
        discount: 50,
        logo: Shoco,
    },{
        uiId: 3,
        id: 19,
        category: constants.COFFEE_HOUSE_BAKERY,
        title: 'Французький сніданок',
        date: '2021-05-29 12:10:26',
        description: 'Знижка розповсюджується на сніданок в який входить кава чи альтернатива на вибір, фреш: апельсиновий, грейпфрутовий або апельсиново-грейпфрутовий та круасан на вибір з прошуто та в’яленими томатами або з сиром Бюш та помідорами',
        about: 'Здається, що це просто круасан, але ні. В ньому французьке борошно від Minoterie Suire, яке ми привезли спеціально для Світу Кави, в ньому італійське масло від Montanarie Gruzza, в ньому жива закваска, на якій ми замішуємо тісто. А ще в ньому години навчань, стажувань та близько одного року роботи над ідеальністю',
        place: 'Світ Кави',
        address: 'площа Катедральна, 6',
        city: cities.LVIV,
        image: Breakfast,
        price: 179,
        discount: 50,
        logo: SvitKavy,
    },{
        uiId: 8,
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
        uiId: 13,
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
        uiId: 26,
        id: 22,
        category: constants.COFFEE_HOUSE_BAKERY,
        title: 'сендвіч з куркою',
        date: '2021-06-03 15:20:26',
        description: 'Що може бути кращим за смачний сандвіч на перекус? Сендвіч з куркою це найсмачніший гречаний хліб, який ми випікаємо самі та дуууже багато курочки💔',
        about: 'Бестселер, капітан смаку і містер "треба було взяти два" — Сендвіч з куркою. Не встигнете додивитись серію улюбленого серіалу, як доставка вже буде у вас! Замовляйте🥑',
        place: 'Палярня Чехович',
        address: 'вулиця Героїв УПА, 72',
        city: cities.LVIV,
        image: Sandwich3,
        price: 189,
        discount: 34,
        logo: Сhehovych
    },{
        uiId: 27,
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
        uiId: 28,
        id: 24,
        category: constants.COFFEE_HOUSE_BAKERY,
        title: 'Французький сніданок',
        date: '2021-06-01 17:50:26',
        description: 'Салатний мікс, авокадо, кіноа, яйця пашот, цільнозернова грінка, грецький йогурт, лосось/індичка (шинка) власного приготування',
        // about: '',
        place: 'SHOco.',
        address: 'вулиця Угорська, 12',
        city: cities.LVIV,
        image: Salad,
        price: 189,
        discount: 34,
        logo: Shoco
    },{
        uiId: 4,
        id: 25,
        category: constants.COFFEE_HOUSE_BAKERY,
        title: 'знижка на ковові зерна',
        date: '2021-06-02 10:50:26',
        description: 'Для фільтра ефіопія-іргачеффе, Яскраві ноти жасмину, лимона та спецій з яскравою кислотністю стиглого лайма',
        about: 'Про що говорять числа на упаковці кави? Про те, яким буде її смак. Наприклад, до 83-84 — мінімальна кислотність, а отже класичний букет: шоколад, горіхи, какао. Усе, що вище, говорить про яскраву кислотність та фрукти-ягоди-квіти в ароматі: 📍85-87 — класна кава на кожен день, приємна кислотність, легкий фруктовий смак; 📍88-90 — потужно-фруктова кава, ну дуже яскрава; 📍90+ — вкрай незвична та навіть незабутня кава, яку складно знайти, навіть у Black Honey така буває нечасто. Запам\'ятайте бали вашої кави і замовляйте за ними — бариста Black Honey вас у будь-якому випадку зрозуміють',
        place: 'Black Honey',
        address: 'Bussines Hub, вулиця Шота Руставелі, 12',
        city: cities.LVIV,
        image: Coffee,
        price: 350,
        discount: 34,
        weight: 250,
        logo: BlackHoney
    },{
        uiId: 16,
        id: 26,
        category: constants.CRAFT_PRODUCTS_STORES,
        title: 'компоте з абрикосу від despensa rosetta',
        date: '2021-06-02 17:50:26',
        description: 'Компоте з абрикосу виготовлений з інгредієнтів преміум-класу для справедливої торгівлі',
        about: 'сирні мандри готують на сніданок круасан із компоте. Не з компотом, а з ком-по-те. Це пюре з фруктів із мінімальним додаванням тростинного цукру. Смак та аромат такі чисті, що ми забули, що до сезону абрикосів ще пара місяців. Despensa Rosetta самі вирощують фрукти та ягоди, доглядаючи їх лише біодинамічними методами. Тут знають, які слова підібрати, щоб полуниця росла краще, а також знають як її потім приготувати, щоб ви не думали, що це якесь там варення. Не варення. Compote — це злегка припущені фрукти, нарізані великими шматками. До них додають ну зовсім трохи цукру: наприклад, у полуничному джемі/компоте його дише 10%, а у сливовому — 4%. До 05 червня на джеми та компоте Despensa Rosetta діють спеціальні ціни,тому нестримно відкривайте сезон абрикосів.',
        place: 'сирні мандри',
        address: 'вулиця Сихівська, 16А',
        city: cities.LVIV,
        image: ApricotMarmalade,
        price: 100,
        discount: 50,
        weight: 350,
        logo: CheeseMandry
    },{
        uiId: 7,
        id: 27,
        category: constants.CRAFT_PRODUCTS_STORES,
        title: 'Угерський витриманий сир за рецептурою Гауди',
        date: '2021-06-01 12:10:26',
        description: 'Угерський витриманий сир з карамельним післясмаком – це “must have” для поціновувачів твердих сирів. Голова цього красеня може досягати 10 кг, а діаметр – пів метра. Зварений сир з коров’ячого молока за технологією витриманої Гауди (Gouda Old)',
        about: 'Угерський – створений для повільної насолоди. Скоринка його помаранчево-коричнева, яку перед споживанням необхідно зрізати. Перше, чим “зустрічає” нас Угерський – це букет ароматів карамелі, іриски та згущеного молока. Текстура його тверда, щільна та крихка з амінокислотами, які похрустують в кінці смакування.  Смак сиру солодко-солоний, з вираженим фруктово-карамельними післясмаком',
        place: 'сирні мандри',
        address: 'вулиця Сихівська, 16А',
        city: cities.LVIV,
        image: UgerskyyCheese,
        price: 129,
        discount: 69,
        weight: 250,
        logo: CheeseMandry
    },{
        uiId: 31,
        id: 30,
        category: constants.CRAFT_PRODUCTS_STORES,
        title: 'Мармелад з жовтого лимону від despensa rosetta',
        date: '2021-06-04 17:50:26',
        description: 'Мармелад з жовтого лимону виготовлений з інгредієнтів преміум-класу для справедливої торгівлі. Італійський мандариновий цукор, цедра жовтого лимону, желеутворюючий агент: пектин',
        about: 'У мармеладі Despensa Rosetta замість желатину роботу із загущення виконує пектин, тому його можна і веганам, і в піст. Також у складі відсутні усілякі штучні ароматизатори та барвники, тому смак такий натуральний, що більше нічого додати. Запитуйте у сирних мандрах, або ж замовте онлайн. Коли будете робити сирну тарілку – додайте трохи мармеладу, особливо з витриманими сирами',
        place: 'сирні мандри',
        address: 'вулиця Сихівська, 16А',
        city: cities.LVIV,
        image: YellowLemonMarmalade,
        logo: CheeseMandry,
        price: 100,
        discount: 50,
        weight: 350
    },{
        uiId: 30,
        id: 29,
        category: constants.CRAFT_PRODUCTS_STORES,
        title: 'Мармелад з гуави від despensa rosetta',
        date: '2021-05-31 10:50:26',
        description: 'Мармелад з гуави виготовлений з інгредієнтів преміум-класу для справедливої торгівлі',
        about: 'У мармеладі Despensa Rosetta замість желатину роботу із загущення виконує пектин, тому його можна і веганам, і в піст. Також у складі відсутні усілякі штучні ароматизатори та барвники, тому смак такий натуральний, що більше нічого додати. Запитуйте у сирних мандрах, або ж замовте онлайн. апельсиновий мармелад з лавандою підходить до м’яких козячих сирів. Для поціновувач яскравих смаків. Створений для таких сирів, як Валок, Блан, Кабрі. Мармелад з чорної смородини та апельсином для витриманих твердих сирів, вишневе варення з волоськими горіхами для витриманих твердих сирів, екомендуємо поєднувати із Скитом,  Цурканом,  та Мальвою. Грушеве варення з прянощами для витриманих твердих сирів. полуничне варення з ревенем і м’ятою – має кисло-солодкий смак із м’ятним післясмаком. Рекомендуємо поєднувати з таким сиром як: Валок, Кабрі, Блан, Велетень. Ромовий джем з журавлини і тим’яну ідеально буде пасувати до сиру Марун, Біласовиця і Мункач',
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
        uiId: 14,
        id: 30,
        category: constants.CRAFT_PRODUCTS_STORES,
        title: 'Гранола лісова ягода',
        date: '2021-05-28 17:50:26',
        description: 'Гранола це натуральна вівсянка, карамелізована з медом та доповнена в’яленим ананасом, курагою, родзинками, журавлиною та мигдалем. Хрустка, корисна та неймовірно смачна:) Дітки люблять смакувати з молоком та йогуртом',
        about: 'Вівсянка, хрусткі злаки, смачні горішки та сухофрукти  – ідеальний сніданок або перекус гарантовано. Ми радимо поєднувати з йогуртом',
        place: 'сирні мандри',
        address: 'вулиця Сихівська, 16А',
        city: cities.LVIV,
        image: Granola,
        logo: CheeseMandry
    },{
        uiId: 23,
        id: 31,
        category: constants.CRAFT_PRODUCTS_STORES,
        title: 'Махан із баранини',
        date: '2021-05-29 10:50:26',
        description: 'Махан із баранини, який виготовлений на Закарпатті – це традиційна татарська ковбаса, в складі якої лише відбірна баранина, сушені спеції  та часник',
        about: 'Махан із баранини виготовлений з відбрірного м’яса та невеликої кількості сала, з додаванням чорного перцю, часнику та суміші натуральних спецій. Він в’ялиться природнім методом у спеціальних камерах дозрівання. Їхній смак відрізняється від промислових аналогів,їх споживаєш і дійсно відчувається,що це натуральний продукт високої якості. Найперша порада — нарізайте тоненькими шматочками у охолодженому вигляді, щоб сповна насолодитись його смаком та ароматом. Смакуйте за кімнатної температури. Так салямі найкраще ріжеться і найкраще смакує. Він гармонійно доповнить та збалансує вашу сирну тарілку. Також не забувайте про не менш смачні додатки: намазку з в’ялених томатів, хрусткі палички грісіні та хлібці натуральні з цільнозернового борошна',
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
        uiId: 9,
        id: 32,
        category: constants.CRAFT_PRODUCTS_STORES,
        title: 'Чеддер з козячого. Сир Белз',
        date: '2021-05-27 17:50:26',
        description: 'Чеддер з козячого молока річної витримки – довгоочікувана новинка в нашому асортименті. Два роки ми вже виготовляємо сир Скит – чеддер з коров’ячого молока за традиційною англійською технологією, з використанням методу “бандажування” сирної голови',
        about: 'Створюємо смачні і цікаві продукти. Щодня наш світ стає все більш відкритим і чесним. Ми в TAKE TAKE намагаємося дотримуватися його сучасних принципів. Список інгредієнтів знаходиться на передній частині нашої етикетки,і кожен інгредієнт-це найкраще,що ми могли знайти на ринку. Ми не додаємо цукор та консерванти. Не використовуємо інгредієнти для зниження вартості продукту,а також генетично модифіковані продукти. Замовляй наш бокс з 12 батончиків онлайн,та в тебе завжди буде запас корисних снеків на всі випадки життя',
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

const exportedObject = {
    CATEGORY_CONSTANTS: constants,
    CATEGORY_TITLES: titles,
    ALL_CATEGORIES: allCategories,
    ALL_ITEMS: allData,
    COLORS: colors
};

export default exportedObject;