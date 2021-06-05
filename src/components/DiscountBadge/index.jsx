import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import Badge1 from '../../assets/images/badge-1.svg';
import Badge2 from '../../assets/images/badge-2.svg';
import Badge3 from '../../assets/images/badge-3.svg';
import Badge4 from '../../assets/images/badge-4.svg';


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

const handleRotateDeg = (category, type) => {
    if(type === 'old-price') {
        switch (category) {
            case CATEGORY_TITLES.CAFE_RESTAURANTS.field:
                return 'rotate(15deg)';
            case CATEGORY_TITLES.SUPERMARKETS_HYPERMARKETS.field:
                return 'rotate(-15deg)';
            case CATEGORY_TITLES.COFFEE_HOUSE_BAKERY.field:
                return 'rotate(21deg)';
            case CATEGORY_TITLES.CRAFT_PRODUCTS_STORES.field:
                return 'rotate(20deg)';
            default:
                return 'rotate(15deg)';
        }
    }
};

const handleTop = (category, type) => {
    if(type === 'old-price') {
        switch (category) {
            case CATEGORY_TITLES.CAFE_RESTAURANTS.field:
                return '4px';
            case CATEGORY_TITLES.SUPERMARKETS_HYPERMARKETS.field:
                return '-15px';
            case CATEGORY_TITLES.COFFEE_HOUSE_BAKERY.field:
                return '-8px';
            case CATEGORY_TITLES.CRAFT_PRODUCTS_STORES.field:
                return '-6px';
            default:
                return '2px';
        }
    }
};

const handleRight = (category, type) => {
    if(type === 'old-price') {
        switch (category) {
            case CATEGORY_TITLES.CAFE_RESTAURANTS.field:
                return '-8px';
            case CATEGORY_TITLES.SUPERMARKETS_HYPERMARKETS.field:
                return '6px';
            case CATEGORY_TITLES.COFFEE_HOUSE_BAKERY.field:
                return '2px';
            case CATEGORY_TITLES.CRAFT_PRODUCTS_STORES.field:
                return '0';
            default:
                return '2px';
        }
    }
};

const Div = styled.div`
    // grid-column-start: 1;
    // grid-column-end: 2;
    // grid-row-start: 1;
    // grid-row-end: 2;
    // gap: 10px;

    position: absolute;
    width: 90px;
    height: auto;
    img {
        position: absolute;
        z-index: 1;
    }
    p {
        text-transform: uppercase;
        position: absolute;
        z-index: 2;
        font-family: 'Neutral Face', 'Inter', sans-serif;
        font-size: .9rem;
        width: 100%;

        transform: ${({category, type}) => handleRotateDeg(category, type)};
        right: ${({category, type}) => handleRight(category, type)};
        top: ${({category, type}) => handleTop(category, type)};
    }
    // border-top-right-radius: 50%;
    // border-top-left-radius: 100%;
    // border-bottom-right-radius: 100%;
    // border-bottom-left-radius: 50%;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // width: 100px;
    // height: 34px;
    // transform: rotate(-20deg);
    // background-image: url('../../assets/images/badge-1.svg');
    // background-color: ${({category}) => handleColorType(category)};
`;

const DiscountBadge = ({type, children, category}) => {
    return (
        // <Button
        //   disabled={disabled}
        //   id={id}
        //   className={className}
        //   type={type}
        //   selected={selected}
        //   category={children? children : category}
        //   onClick={onClickHandler}
        // >{children}
        // </Button>
        <Div
            type={type}
            category={category}
        // className=''
        >
            {type === 'old-price' && category === CATEGORY_CONSTANTS.CAFE_RESTAURANTS && <img className='dd' src={Badge1} alt="" />}
            {type === 'old-price' && category === CATEGORY_CONSTANTS.SUPERMARKETS_HYPERMARKETS && <img className='dd' src={Badge2} alt="" />}
            {type === 'old-price' && category === CATEGORY_CONSTANTS.COFFEE_HOUSE_BAKERY && <img className='dd' src={Badge3} alt="" />}
            {type === 'old-price' && category === CATEGORY_CONSTANTS.CRAFT_PRODUCTS_STORES && <img className='dd' src={Badge4} alt="" />}
            {type === 'discount' && <p>{children}%</p>}
            {type === 'old-price' && <p>{children} uah</p>}
            {type === 'new-price' && <p>зараз {children}</p>}
        </Div>

    )
};

export default DiscountBadge;