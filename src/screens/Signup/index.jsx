import React, {useState, useRef, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import Slider from 'react-slick';
import anime from 'animejs';

import Button from '../../components/Button';
import TextField from '../../components/TextField';
import Card from '../../components/Card';
import Line from '../../assets/images/icon_line.svg';

// import cafeRestaurantsImg from '../../assets/images/01_cafe_restaurants/0101.jpg';
// import supermarketsHypermarketsImg from '../../assets/images/02_super_hipermarkets/0201.jpg';
// import coffeeHouseBakeryImg from '../../assets/images/03_bakery/0301.jpg';
// import craftProductsStoresImg from '../../assets/images/04_craft/0401.jpg';

import constants from '../../constants';
const {CATEGORY_TITLES, ALL_CATEGORIES, COLORS} = constants;

const Signup = () => {
    const [name, setName] = useState(''); //Анна
    const [location, setLocation] = useState(''); //Львів
    const [categories, setCategories] = useState([]);

    const [start, setStart] = useState(false);

    const pagesEl = useRef(null);
    const [swipePagesEnabled, setPagesSwipeEnabled] = useState(true);

    // const catEl = useRef(null);
    // const [pageIndex, setPageIndex] = useState(0);
    // const beforeChange = (oldIndex, newIndex) => {
    //     console.log(oldIndex, newIndex);
    //     if(newIndex === 2) {
    //         setPagesSwipeEnabled(false);
    //     }
    // };

    // useEffect(() => {
    // }, []);

    const afterChange = current => {
        if (current === 2) {
            setPagesSwipeEnabled(false);
            anime({
                targets: '.line',
                translateX: 20,
                delay: 800,
                direction: 'alternate',
                easing: 'easeInOutSine'
            });
            // anime({
            //     targets: '.cardd',
            //     // translateY: 10,
            //     // width: '68%',
            //     // height: '52%',
            //     // translateX: 250,
            //     scale: 0.95,
            //     duration: 200,
            //     backgroundColor: 'rgba(211, 8, 28, .3)',
            //     direction: 'alternate',
            //     easing: 'easeInOutSine'
            // });
        }
    };

    const pagesSliderSettings = {
        afterChange: afterChange,
        swipe: swipePagesEnabled,
        infinite: false,
        arrows: false,
    };

    const categoriesSliderSettings = {
        arrows: false,
        dots: true,
        // slidesToShow: 1.05
    };

    // useEffect(() => {
    //     console.log(categories)
    //     // if all send const all
    //     // if some send array
    // }, [categories])

    const getNamePage = () => {
        const saveName = () => {
            localStorage.setItem('name', name);
            pagesEl.current.slickNext();
        };
        return (
            <div className='fbg signup-slider-page signup-slider-page--name'>
                <p className='signup-slider-page_label'>Як до тебе звертатись?</p>
                <TextField
                    type='text'
                    placeholder='Ім’я'
                    value={name}
                    onChangeHandler={e => setName(e.target.value)}/>
                {name &&
                    <Button
                        className='signup-slider-page_button rere'
                        type='no-bg'
                        onClickHandler={saveName}>
                        продовжити
                    </Button>}
            </div>
        );
    };

     const getLocationPage = () => {
        const saveLocation = () => {
            localStorage.setItem('location', location);
            pagesEl.current.slickNext();
        };

        return (
            <div className='fbg signup-slider-page signup-slider-page--location'>
                <p className='signup-slider-page_label'>Де шукати знижки для тебе?</p>
                <TextField
                    type='text'
                    placeholder='Місто'
                    value={location}
                    onChangeHandler={({target}) => setLocation(target.value)}/>
                {location &&
                    <Button
                        className='signup-slider-page_button rere'
                        type='no-bg'
                        onClickHandler={saveLocation}>
                        продовжити
                    </Button>}
            </div>
        );
    };

     const getCategoriesPage = () => {
        const saveCategoriesAndStart = () => {
            localStorage.setItem('categories', categories);
            setStart(true);
        };

        const setSelectedCategories = (selectedCategory) => {
            // setCategoriesId(categoriesId+1);
            if (categories.includes(selectedCategory)) {
                let filtered = categories.filter(e=> e !== selectedCategory);
                setCategories(filtered);
                return;
            }
            setCategories([...categories, selectedCategory]);
        };

        const isCategorySelected = category => {
            return categories.includes(category);
        };

        return (
            <div className='fbg signup-slider-page signup-slider-page--categories'>
                <p className='signup-slider-page_label'>
                    Ми пропонуємо знижки на такі категорії. Обирай
                    <img className='line' src={Line} alt='' />
                </p>
                <Slider {...categoriesSliderSettings}>
                    {ALL_CATEGORIES.map(categoryConstant => (
                        <Card
                            selected={isCategorySelected(categoryConstant)}
                            category={categoryConstant}
                            // type='no-bg'
                            title={CATEGORY_TITLES[categoryConstant].title}
                            onClickHandler={() => setSelectedCategories(categoryConstant)} />
                    ))}
                    {/*<button
                        className={isCategorySelected(CATEGORY_CONSTANTS.CAFE_RESTAURANTS)}
                        onClick={() => setSelectedCategories(CATEGORY_CONSTANTS.CAFE_RESTAURANTS)}>
                        onClick={() => console.log('ddd')}>
                        <img className='category-card_image' src={cafeRestaurantsImg} alt="" />
                        <h2 className='category-card_title'>{CATEGORY_TITLES.CAFE_RESTAURANTS.title}</h2>
                    </button>
                    <button
                        className={isCategorySelected(CATEGORY_CONSTANTS.SUPERMARKETS_HYPERMARKETS)}
                        onClick={() => setSelectedCategories(CATEGORY_CONSTANTS.SUPERMARKETS_HYPERMARKETS)}>
                        <img className='category-card_image' src={supermarketsHypermarketsImg} alt="" />
                        <h2 className='category-card_title'>{CATEGORY_TITLES.SUPERMARKETS_HYPERMARKETS.title}</h2>
                    </button>
                    <button
                        className={isCategorySelected(CATEGORY_CONSTANTS.COFFEE_HOUSE_BAKERY)}
                        onClick={() => setSelectedCategories(CATEGORY_CONSTANTS.COFFEE_HOUSE_BAKERY)}>
                        <img className='category-card_image' src={coffeeHouseBakeryImg} alt="" />
                        <h2 className='category-card_title'>{CATEGORY_TITLES.COFFEE_HOUSE_BAKERY.title}</h2>
                    </button>
                    <button
                        className={isCategorySelected(CATEGORY_CONSTANTS.CRAFT_PRODUCTS_STORES)}
                        onClick={() => setSelectedCategories(CATEGORY_CONSTANTS.CRAFT_PRODUCTS_STORES)}>
                        <img className='category-card_image' src={craftProductsStoresImg} alt="" />
                        <h2 className='category-card_title'>{CATEGORY_TITLES.CRAFT_PRODUCTS_STORES.title}</h2>
                    </button>*/}
                </Slider>
                {/* {categories && */}
                    <Button
                        disabled={!categories.length}
                        className='signup-slider-page_button signup-slider-page_button--last'
                        type='rounded'
                        onClickHandler={saveCategoriesAndStart}>
                        почати
                    </Button>
                    {/* } */}
            </div>
        )
    }

    const namePage = getNamePage();
    const locationPage = getLocationPage();
    const categoriesPage = getCategoriesPage();
    const pages = [namePage, locationPage, categoriesPage];

    if(start) {
        return <Redirect to='/discounts' />
    }
    return (
        <Slider ref={pagesEl} {...pagesSliderSettings}>
            {/* enableMouseEvents */}
            {pages.map(e => e)}
        </Slider>
    );
};

export default Signup;