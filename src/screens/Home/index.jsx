import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import constants from '../../constants';

import Favs from '../../assets/images/icon_heart.svg' //lo.jpg
import Logo from '../../assets/images/logo_elem_dark.svg' //lo.jpg
import Button from '../../components/Button';
import ListItem from '../../components/ListItem';

const {CATEGORY_TITLES, CATEGORY_CONSTANTS, ALL_ITEMS} = constants;
const {CAFE_RESTAURANTS, SUPERMARKETS_HYPERMARKETS, COFFEE_HOUSE_BAKERY, CRAFT_PRODUCTS_STORES} = CATEGORY_CONSTANTS;

export default function Home() {
    const [categories, setCategories] = useState([]); // constants.ALL_CATEGORIES
    const [items, setItems] = useState([]);

    useEffect(() => {
       const categories = localStorage.getItem('categories').split(',');
        setCategories(categories);
        getItems();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getItems = () => {
        const itms = ALL_ITEMS.filter((item) => categories.includes(item.category));
        setItems(itms);
    };

    useEffect(() => {
        getItems();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categories])

    const handleCategoriesChange = (selectedCategory) => {
         if (categories.includes(selectedCategory)) {
            let filtered = categories.filter(e=> e !== selectedCategory);
            setCategories(filtered);
            return;
        }
        setCategories([...categories, selectedCategory]);
    };

    useEffect(() => {
        localStorage.setItem('categories', categories);
    }, [categories])

    const ff = items.sort(function(a,b) {
        // return new Date(b.date) - new Date(a.date);
        return a.uiId - b.uiId;
    });

    console.log(ff);
    console.log(items.map(e => e.uiId));

    return (
        <div>
            <div className='header'>
                <h1>
                    <span>Більше</span>
                    <span>
                        <img src={Logo} alt="" />
                        менше
                    </span>
                </h1>
                <img className='favs' src={Favs} alt="" />
            </div>
            {/* <h1>Всі</h1> fafafa*/}
            <div className='flat-divs'>
                <div className='flat-div'>
                    <Button
                        id='rectangle'
                        category={CATEGORY_TITLES[CAFE_RESTAURANTS].shortTitle}
                        type='flat'
                        selected={categories.includes(CAFE_RESTAURANTS)}
                        onClickHandler={() => handleCategoriesChange(CAFE_RESTAURANTS)}
                        ></Button>
                    <span className='flat-title'>кафе/ресторани</span>
                </div>
                <div className='flat-div'>
                    <Button
                        id='hexagon'
                        category={CATEGORY_TITLES[SUPERMARKETS_HYPERMARKETS].shortTitle}
                        type='flat'
                        selected={categories.includes(SUPERMARKETS_HYPERMARKETS)}
                        onClickHandler={() => handleCategoriesChange(SUPERMARKETS_HYPERMARKETS)}
                        ></Button>
                    <span className='flat-title'>супермаркети/гіпермаркети</span>
                </div>
                <div className='flat-div'>
                    <Button
                        id='parallelogram'
                        category={CATEGORY_TITLES[COFFEE_HOUSE_BAKERY].shortTitle}
                        type='flat'
                        selected={categories.includes(COFFEE_HOUSE_BAKERY)}
                        onClickHandler={() => handleCategoriesChange(COFFEE_HOUSE_BAKERY)}
                        ></Button>
                    <span className='flat-title'>кав’ярні/пекарні</span>
                </div>
                <div className='flat-div'>
                    <Button
                        id='diamond-shield'
                        category={CATEGORY_TITLES[CRAFT_PRODUCTS_STORES].shortTitle}
                        type='flat'
                        selected={categories.includes(CRAFT_PRODUCTS_STORES)}
                        onClickHandler={() => handleCategoriesChange(CRAFT_PRODUCTS_STORES)}
                        ></Button>
                    <span className='flat-title'>крамниці крафтових продуктів</span>
                </div>
                {/* {ALL_CATEGORIES.map(category => (
                    <Button
                        key={category}
                        type='flat'
                        selected={categories.includes(category)}
                        onClickHandler={() => handleCategoriesChange(category)}>
                        {CATEGORY_TITLES[category].shortTitle}
                    </Button>
                ))} */}
            </div>
            <div className='main-co'>
                {items.map(item => <Item key={item.uiId} {...item} />)}
                {/* <Card>
                    сендвіч з куркою та томатами
                    вулиця Лесі Українки, 27 Львів
                    Цільнозерновий хліб, смажена курочка, моцарела, помідор, сир гауда, листя салату та шпинат
                    Доступно 12.11 - 24.12
                </Card>
                <Card>
                    Cмузі Tropcal  Bottle В Good Girl
                    Cмузі, що смакує наче літо Трохи сонячного ананаса, соковитого манго, а також — банан, авокадо, морква, родзинки, сік апельсина та лимона, здатні телепортувати до найтепліших країв
                    Доступно 12.11 - 24.12
                </Card>
                <Card>
                    Сирнички зі сметаною
                    Домашній сир, борошно, яйце куряче, цукор, сіль, сметана, абрикосове, малинове або будь-яке інше варення на вибір
                    Доступно 12.11 - 24.12
                </Card>
                <Card>
                    вареники з картоплею та сиром в маруся
                    Доступно 12.11 - 24.12
                </Card> */}
            </div>
        </div>
    );
}
const Item = (props) => {
    // , category, title, date, description, place, address, city
    const {id} = props;
    return (
        <Link to={`/discount/${id}`}>
            <ListItem
                item={props}
            >
                {/* <p>{category}</p>
                <p>{title}</p>
                <p>{date}</p>
                <p>{description}</p>
                <p>{place}</p>
                <p>{address}</p>
                <p>{city}</p> */}
            </ListItem>
        </Link>
    );
}