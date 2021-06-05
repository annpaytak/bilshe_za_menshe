import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import DiscountBadge from '../DiscountBadge';
// import cafeRestaurantsImg from '../../assets/images/01_cafe_restaurants/0101.jpg';
// import supermarketsHypermarketsImg from '../../assets/images/02_super_hipermarkets/0201.jpg';
// import coffeeHouseBakeryImg from '../../assets/images/03_bakery/0301.jpg';
// import craftProductsStoresImg from '../../assets/images/04_craft/0401.jpg';

// import Pizza from '../../assets/images/01_cafe_restaurants/0102.png';
// import Shakshuka from '../../assets/images/01_cafe_restaurants/0103.jpg';
// import Chicken from '../../assets/images/01_cafe_restaurants/0104.jpg';
// import Salmon from '../../assets/images/01_cafe_restaurants/0105.jpg';
// import Sandwich from '../../assets/images/01_cafe_restaurants/0107.jpg';
// import GreenSalad from '../../assets/images/01_cafe_restaurants/0109.png';
// import Cheesecake from '../../assets/images/01_cafe_restaurants/0110.jpg';
// import Varenyku from '../../assets/images/01_cafe_restaurants/0111.jpg';

// import Baguette from '../../assets/images/02_super_hipermarkets/0203.jpg';
// import Bread from '../../assets/images/02_super_hipermarkets/0206.jpg';
// import Vegetables from '../../assets/images/02_super_hipermarkets/0207.png';
// import Fruits from '../../assets/images/02_super_hipermarkets/0208.jpg';
// import Hamon from '../../assets/images/02_super_hipermarkets/0210.jpg';
// import Drink from '../../assets/images/02_super_hipermarkets/0213.jpg';
// import Flour from '../../assets/images/02_super_hipermarkets/0216.jpg';
// import ProteinBar from '../../assets/images/02_super_hipermarkets/0217.jpg';
// import GlazedCheese from '../../assets/images/02_super_hipermarkets/0218.jpg';

// import Sandwich2 from '../../assets/images/03_bakery/0302.jpg';
// import Breakfast from '../../assets/images/03_bakery/0303.jpg';
// import EspressoTonic from '../../assets/images/03_bakery/0304.jpg';
// import PuffPastry from '../../assets/images/03_bakery/0305.png';
// import Sandwich3 from '../../assets/images/03_bakery/0306.jpg';
// import Brioche from '../../assets/images/03_bakery/0307.jpg';
// import Salad from '../../assets/images/03_bakery/0309.jpg';
// import Coffee from '../../assets/images/03_bakery/0315.jpg';

// import ApricotMarmalade from '../../assets/images/04_craft/0401.jpg';
// import UgerskyyCheese from '../../assets/images/04_craft/0402.jpg';
// import YellowLemonMarmalade from '../../assets/images/04_craft/0403.jpg';
// import GuavaMarmalade from '../../assets/images/04_craft/0404.jpg';
// import Granola from '../../assets/images/04_craft/0405.jpg';
// import Pesto from '../../assets/images/04_craft/0406.jpg';
// import RawSausage from '../../assets/images/04_craft/0407.jpg';
// import Chedder from '../../assets/images/04_craft/0409.jpg';
// CHEDDER FROM GOAT'S MILK OF ANNUAL EXPIRATION. CHEESE BELZ

import constants from '../../constants';
const {CATEGORY_TITLES, CATEGORY_CONSTANTS, COLORS} = constants;
// const restaurantsImages = [Pizza, Shakshuka, Chicken, Salmon, Sandwich, GreenSalad, Cheesecake, Varenyku];
// const supermarketsimages = [Baguette, Bread, Vegetables, Fruits, Hamon, Drink, Flour, ProteinBar, GlazedCheese];
// const bakeryImages = [Sandwich2, Breakfast, EspressoTonic, PuffPastry, Sandwich3, Brioche, Salad, Coffee];
// const craftImages = [ApricotMarmalade, UgerskyyCheese, YellowLemonMarmalade, GuavaMarmalade, Granola, Pesto, RawSausage, Chedder];

const handleColorType = category => {
  switch (category) {
    case CATEGORY_TITLES.CAFE_RESTAURANTS.field:
      return COLORS.CAFE_RESTAURANTS;
    case CATEGORY_TITLES.SUPERMARKETS_HYPERMARKETS.field:
      return COLORS.SUPERMARKETS_HYPERMARKETS;
    case CATEGORY_TITLES.COFFEE_HOUSE_BAKERY.field:
      return COLORS.COFFEE_HOUSE_BAKERY;
    case CATEGORY_TITLES.CRAFT_PRODUCTS_STORES.field:
      return COLORS.CRAFT_PRODUCTS_STORES;
    default:
        return COLORS.DEFAULT;
  }
};

const Div = styled.div`
    width: calc(100% - 0.25em*2);
    height: 100%;
    display: grid;
    grid-template-columns: 26% 54% 20%;
    grid-template-rows: 40% 20% 50%;
    margin: 0.5em auto;
    padding: 0;
    // border: 2px solid ${({category, selected}) => selected ? handleColorType(category) : COLORS.WHITE};
    // background-color: ${({category, selected}) => selected ? handleColorType(category) : COLORS.DEFAULT};
    .image {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 4;
        position: relative;
        border-radius: 50px;
        width: 90px;
    }
    .title {
        line-height: 16px;
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
        font-family: 'Neutral Face', 'Inter', sans-serif;
        font-size: .75rem;
        font-weight: bold;
        text-transform: uppercase;
        text-align: left;
        margin: 0;
        // margin-bottom: 1.2em;
    }
    .description {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 4;
        font-family: 'Inter', sans-serif;
        font-size: .5rem;
        font-weight: normal;
        margin: 0;
    }
    .date {
        margin: 4px 4px 0 0;
        text-align: right;
        font-size: .5rem;
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 2;
    }
    .badges {
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 2;
        grid-row-end: 4;
    }
`;

// const images = [
//     ...restaurantsImages,
//     ...supermarketsimages,
//     ...bakeryImages,
//     ...craftImages
// ];

const ListItem = ({item}) => { // selected, category, title, onClickHandler
    const {id, category, title, date, description, place, address, city, image, price, discount, weight} = item;
    // id: 1,
    // category: constants.CAFE_RESTAURANTS,
    // title: 'Піца Маргарита',
    // date: 'Thu Jun 03 17:50:26',
    // description: 'Томатна основа, сир моцарела, базилік, оливкова олія',
    // place: 'Mimosa Brooklyn Pizza',
    // address: 'вулиця Басейна, 1/2',
    // city: cities.KYIV,
    // image: Pizza,
    // price: 215,
    // discount: 40,
    // weight: 400

    return (
      <Div
        category={category}
        // type={type}
        // placeholder={placeholder}
        // value={value}
        // onChange={onChangeHandler}
        >
            <DiscountBadge
                type='discount'
                category={category}>
                {discount}
            </DiscountBadge>
            <img className='image' src={image} alt="" />
            {/* {images.map(image => ({images}))} */}
            <p className='title'>{title}</p>
            <p className='description'>{description}</p>
            <p className='date'>{moment(date).startOf('day').fromNow()}</p>
            {/* moment().startOf(date).fromNow() */}
            <div className='badges'>
                 <DiscountBadge
                    type='old-price'
                    category={category}>
                    {price? price : '56'}
                </DiscountBadge>
                 {/* <DiscountBadge
                    type='new-price'
                    category={category}>
                    {price && discount && ((100 * discount) / price).toFixed()}
                </DiscountBadge> */}
            </div>
            {/* <p>{category}</p>
            <p>{title}</p>
            <p>{date}</p>
            <p>{description}</p>
            <p>{place}</p>
            <p>{address}</p>
            <p>{city}</p> */}
        </Div>
    )
};

export default ListItem;