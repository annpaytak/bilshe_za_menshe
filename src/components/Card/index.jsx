import React from 'react';
import styled from 'styled-components';

import cafeRestaurantsImg from '../../assets/images/01_cafe_restaurants/0101.jpg';
import supermarketsHypermarketsImg from '../../assets/images/02_super_hipermarkets/0201.jpg';
import coffeeHouseBakeryImg from '../../assets/images/03_bakery/0301.jpg';
import craftProductsStoresImg from '../../assets/images/04_craft/0401.jpg';

import constants from '../../constants';
const {CATEGORY_TITLES, CATEGORY_CONSTANTS, COLORS} = constants;

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

const Button = styled.button`
    width: 70%;
    height: 54%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-self: flex-end;
    margin: 1em auto; //0.25em auto;
    padding: 0;
    border: 2px solid ${({category, selected}) => selected ? handleColorType(category) : COLORS.WHITE};
    background-color: ${({category, selected}) => selected ? handleColorType(category) : COLORS.DEFAULT};
    .category-card_image {
        height: 180px; // 130px
        border-radius: 50%;
        align-self: flex-end;
        margin: 1.8em 0.8em 0 0;
    }
    .category-card_title {
        width: 100%;
        font-family: 'Neutral Face', 'Inter', sans-serif;
        font-size: .9rem;
        font-weight: bold;
        text-transform: uppercase;
        text-align: left;
        margin-left: 0.5em;
        margin-bottom: 2.2em;
    }
`;

const Card = ({selected, category, title, onClickHandler}) => {
    return (
      <Button
        className='ds cardd'
        category={category}
        selected={selected}
        onClick={onClickHandler}>
            {category === CATEGORY_CONSTANTS.CAFE_RESTAURANTS &&
            <img className='category-card_image' src={cafeRestaurantsImg} alt="" />}
            {category === CATEGORY_CONSTANTS.SUPERMARKETS_HYPERMARKETS &&
            <img className='category-card_image' src={supermarketsHypermarketsImg} alt="" />}
            {category === CATEGORY_CONSTANTS.COFFEE_HOUSE_BAKERY &&
            <img className='category-card_image' src={coffeeHouseBakeryImg} alt="" />}
            {category === CATEGORY_CONSTANTS.CRAFT_PRODUCTS_STORES &&
            <img className='category-card_image' src={craftProductsStoresImg} alt="" />}
            <h2 className='category-card_title'>{title}</h2>
        </Button>
    )
};

export default Card;