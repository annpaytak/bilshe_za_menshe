import React from 'react';
import styled, { css } from 'styled-components';

import New1 from '../../assets/images/badge-1.svg';
import New2 from '../../assets/images/badge-2.svg';
import New3 from '../../assets/images/badge-3.svg';
import New4 from '../../assets/images/badge-4.svg';

import Old1 from '../../assets/images/old_1.svg';
import Old2 from '../../assets/images/old_2.svg';
import Old3 from '../../assets/images/old_3.svg';
import Old4 from '../../assets/images/old_4.svg';

import constants from '../../constants';
const {CATEGORY_TITLES, CATEGORY_CONSTANTS, COLORS} = constants;

const colorTypeByCategory = {
    [CATEGORY_TITLES.CAFE_RESTAURANTS.field] : COLORS.CAFE_RESTAURANTS,
    [CATEGORY_TITLES.SUPERMARKETS_HYPERMARKETS.field] : COLORS.SUPERMARKETS_HYPERMARKETS,
    [CATEGORY_TITLES.COFFEE_HOUSE_BAKERY.field] : COLORS.COFFEE_HOUSE_BAKERY,
    [CATEGORY_TITLES.CRAFT_PRODUCTS_STORES.field]: COLORS.CRAFT_PRODUCTS_STORES
};
const rotateDegByCategory = {
    [CATEGORY_TITLES.CAFE_RESTAURANTS.field] : 'rotate(15deg)',
    [CATEGORY_TITLES.SUPERMARKETS_HYPERMARKETS.field] : 'rotate(-15deg)',
    [CATEGORY_TITLES.COFFEE_HOUSE_BAKERY.field] : 'rotate(21deg)',
    [CATEGORY_TITLES.CRAFT_PRODUCTS_STORES.field]: 'rotate(20deg)'
};
const TopByCategory = {
    [CATEGORY_TITLES.CAFE_RESTAURANTS.field] : '3px',
    [CATEGORY_TITLES.SUPERMARKETS_HYPERMARKETS.field] : '-12px',
    [CATEGORY_TITLES.COFFEE_HOUSE_BAKERY.field] : '-5px',
    [CATEGORY_TITLES.CRAFT_PRODUCTS_STORES.field]: '-4px'
};
const RightByCategory = {
    [CATEGORY_TITLES.CAFE_RESTAURANTS.field] : '-10px',
    [CATEGORY_TITLES.COFFEE_HOUSE_BAKERY.field] : '-4px'
};

const discountStyles = ({category, size}) => css`
    z-index: 1;
    border-top-right-radius: 50%;
    border-top-left-radius: 100%;
    border-bottom-right-radius: 100%;
    border-bottom-left-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 100px; */
    height: 30px;
    /* transform: rotate(-20deg); */
    /* background-image: url('../../assets/images/badge-1.svg'); */
    background-color: ${colorTypeByCategory[category]};

    width: ${({size}) => size ? `${size}px` : '90px'};
    p {
        font-size:  ${({size}) => size ? `${size}%` : '.9rem'};
    }
`;

const oldPriceStyles = ({category, size}) => css`
    top: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
//   color: tomato;
//   border-color: tomato;
    img {
        position: absolute;
        z-index: 1;
        width: ${({size}) => size ? `${size+50}px` : '80px'};
    }
`;

const newPriceStyles = ({category}) => css`
    top: -20px; //-12px;
    img {
        position: absolute;
        z-index: 1;
    }
    p {
        width: 100%;
        position: absolute;
        z-index: 2;
        transform: ${rotateDegByCategory[category]};
        right: ${RightByCategory[category]};
        top: ${TopByCategory[category]};
        /* span:first-of-type {
            letter-spacing: -1.5px;
            margin-right: 4px;
            font-size: .65rem; //.9rem
        }
        span:last-of-type {
            font-size: .6rem; //.9rem
        } */
    }
`;

const labelStylesByType = {
    'old-price' : oldPriceStyles,
    'new-price' : newPriceStyles,
    'discount' : discountStyles
};

const Div = styled.div`
    position: absolute;
    width: ${({size}) => size ? `${size}px` : '60px'}; //90px
    height: auto;
    p {
        text-transform: uppercase;
        font-family: 'Neutral Face', 'Inter', sans-serif;
        font-size: ${({size}) => size ? `${size}%` : '.6rem'}; //.9rem
        font-weight: bold;
    }
  ${({type}) => labelStylesByType[type]}
`;

const Badge = ({type, children, category, size}) => {
    const isOldPrice = type === 'old-price';
    const isNewPrice = type === 'new-price';
    const isDiscount = type === 'discount';
    return (
        <Div
            type={type}
            size={size}
            category={category}>
                {isNewPrice && category === CATEGORY_CONSTANTS.CAFE_RESTAURANTS && <img src={New1} alt="" />}
                {isNewPrice && category === CATEGORY_CONSTANTS.SUPERMARKETS_HYPERMARKETS && <img src={New2} alt="" />}
                {isNewPrice && category === CATEGORY_CONSTANTS.COFFEE_HOUSE_BAKERY && <img src={New3} alt="" />}
                {isNewPrice && category === CATEGORY_CONSTANTS.CRAFT_PRODUCTS_STORES && <img src={New4} alt="" />}
                {isOldPrice && category === CATEGORY_CONSTANTS.CAFE_RESTAURANTS && <img src={Old1} alt="" />}
                {isOldPrice && category === CATEGORY_CONSTANTS.SUPERMARKETS_HYPERMARKETS && <img src={Old2} alt="" />}
                {isOldPrice && category === CATEGORY_CONSTANTS.COFFEE_HOUSE_BAKERY && <img src={Old3} alt="" />}
                {isOldPrice && category === CATEGORY_CONSTANTS.CRAFT_PRODUCTS_STORES && <img src={Old4} alt="" />}
                {isOldPrice && <p>{children} uah</p>}
                {isNewPrice && <p>
                        {/* <span>зараз</span> */}
                        {children} uah
                    </p>}
                {isDiscount && <p>{children}%</p>}
        </Div>
    )
};

export default Badge;


// const handleColorType = category => {
//   switch (category) {
//     case CATEGORY_TITLES.CAFE_RESTAURANTS.field:
//       return COLORS.CAFE_RESTAURANTS;
//     case CATEGORY_TITLES.SUPERMARKETS_HYPERMARKETS.field:
//       return COLORS.SUPERMARKETS_HYPERMARKETS;
//     case CATEGORY_TITLES.COFFEE_HOUSE_BAKERY.field:
//       return COLORS.COFFEE_HOUSE_BAKERY;
//     case CATEGORY_TITLES.CRAFT_PRODUCTS_STORES.field:
//       return COLORS.CRAFT_PRODUCTS_STORES;
//     default:
//         return COLORS.DEFAULT;
//   }
// };
// const handleRotateDeg = (category) => {
//     switch (category) {
//         case CATEGORY_TITLES.CAFE_RESTAURANTS.field:
//             return 'rotate(15deg)';
//         case CATEGORY_TITLES.SUPERMARKETS_HYPERMARKETS.field:
//             return 'rotate(-15deg)';
//         case CATEGORY_TITLES.COFFEE_HOUSE_BAKERY.field:
//             return 'rotate(21deg)';
//         case CATEGORY_TITLES.CRAFT_PRODUCTS_STORES.field:
//             return 'rotate(20deg)';
//         default:
//             return 'rotate(15deg)';
//     }
// };
// const handleTop = (category) => {
//     switch (category) {
//         case CATEGORY_TITLES.CAFE_RESTAURANTS.field:
//             return '4px';
//         case CATEGORY_TITLES.SUPERMARKETS_HYPERMARKETS.field:
//             return '-15px';
//         case CATEGORY_TITLES.COFFEE_HOUSE_BAKERY.field:
//             return '-8px';
//         case CATEGORY_TITLES.CRAFT_PRODUCTS_STORES.field:
//             return '-6px';
//         default:
//             return '2px';
//     }
// };
// const handleRight = (category) => {
//     switch (category) {
//         case CATEGORY_TITLES.CAFE_RESTAURANTS.field:
//             return '-8px';
//         case CATEGORY_TITLES.SUPERMARKETS_HYPERMARKETS.field:
//             return '6px';
//         case CATEGORY_TITLES.COFFEE_HOUSE_BAKERY.field:
//             return '2px';
//         case CATEGORY_TITLES.CRAFT_PRODUCTS_STORES.field:
//             return '0';
//         default:
//             return '2px';
//     }
// };