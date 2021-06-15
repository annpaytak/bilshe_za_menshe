import React from 'react';
import styled from 'styled-components';
// import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';

import Button from '../../components/Button';
import Badge from '../../components/Badge';

import Line from '../../assets/images/icon_line.svg';
import Location from '../../assets/images/loc_dark.svg';
import Arrow from '../../assets/images/icon_arrow.svg';

import constants from '../../constants';
const {CATEGORY_CONSTANTS, CATEGORY_TITLES, ALL_ITEMS, COLORS} = constants;

const colorTypeByCategory = {
  [CATEGORY_CONSTANTS.CAFE_RESTAURANTS] : COLORS.CAFE_RESTAURANTS,
  [CATEGORY_CONSTANTS.SUPERMARKETS_HYPERMARKETS] : COLORS.SUPERMARKETS_HYPERMARKETS,
  [CATEGORY_CONSTANTS.COFFEE_HOUSE_BAKERY] : COLORS.COFFEE_HOUSE_BAKERY,
  [CATEGORY_CONSTANTS.CRAFT_PRODUCTS_STORES]: COLORS.CRAFT_PRODUCTS_STORES
};

const Div = styled.div`
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;
  height: auto; //100%;
  padding-bottom: 140px;
  .background-image {
    overflow: hidden;
    position: relative;
    background: ${({image}) => `url(${image}) no-repeat center`};
    background-size: 125%;
    width: auto;
    height: 56vh;
    border-radius: 0 0 40px 40px;
    button {
      padding-left: 0;
      position: fixed;
      z-index: 4;
    }
    .da {
      position: relative;
      top: 50px;
      left: 10px;
    }
    button a {
      display: flex;
      align-items: center;
      .arrow {
        width: 25px;
        height: 25px;
        /* clip-path: polygon(50% 0, 45% 5%, 85% 50%, 45% 95%, 50% 100%, 100% 50%); */
        margin: 0;
        /* background-color: ${COLORS.BLACK}; */
        transform: rotate(180deg);
        /* height: 19px; */
        /* width: 30px; */
        /* margin-right: 10px; */
        /* position: relative; */
        /* top: 3px; */
        display: inline !important;
      }
      p {
        color: ${COLORS.BLACK};
        line-height: 19px;
        margin: 0;
        text-transform: uppercase;
        /* font-weight: normal; */
        font-family: 'Neutral Face','Inter',sans-serif;
        font-size: 1.1rem;
      }
    }
    .badges {
      position: absolute;
      right: 0;
      bottom: 0;//-50px;
      width: 30%;
      height: 25%;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      div:last-of-type {
        top: -50px;
      }
    }
    .logo {
      position: absolute;
      /* height: 65px; */
      width: auto;
      max-width: 40%;
      max-height: 50px;
      top: 56px; // 20px;
      right: 10px;
    }
  }
  .title {
    width: 91%;
    margin: 10px 0;
    line-height: 40px;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    font-family: 'Neutral Face','Inter',sans-serif;
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    text-align: left;
    padding-left: .25em;
    color: ${({category}) => category ? colorTypeByCategory[category] : COLORS.BLACK};
  }
  .date {
    display: flex;
    align-items: center;
    padding-left: .5em;
    font-size: .8rem;
    margin: 24px 0 14px 0;
    .circle {
      margin: 0 5px;
      width: 15px;
      height: 15px;
      clip-path: circle(50% at 50% 50%);
      background-color: ${({category}) => category ? colorTypeByCategory[category] : COLORS.DEFAULT}; //90px
    }
  }
  .location-cont {
    display: flex;
    align-items: flex-start;
    margin: 0 0 20px 0;
    padding-left: .5em;
  }
  .location {
    width: 15px;
    margin: 4px 0;
  }
  .place {
    width: 80%;
    text-transform: capitalize;
    font-size: .8rem;
    font-weight: bold;
    padding-left: .5em;
    margin: .25em 0;
  }
  .address {
    font-size: .8rem;
    padding-left: .5em;
    margin: .25em 0;
  }
  .city {
    font-size: .8rem;
    padding-left: .5em;
    margin: .25em 0;
  }
  .description, .about {
    font-family: 'Inter',sans-serif;
    font-size: .8rem;
    font-weight: normal;
    line-height: 1.2rem;
    padding: 0 1.5em 0 .5em;
    margin: .5em 0;
  }
  .about {
    margin-bottom: 30px;
  }
  .price-cont {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .from-to {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 180px;
      height: 40px;
      border: 1px solid ${COLORS.BLACK};
      border-radius: 50%;
      margin: .25em;
      p {
        font-family: 'Inter',sans-serif;
        font-size: .8rem;
        font-weight: normal;
        margin: .35em;
      }
      .line-icon {
        width: 20px;
      }
    }
    .discount-circle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border: 1px solid ${COLORS.BLACK};
      border-radius: 50%;
      font-family: 'Inter',sans-serif;
      font-size: .8rem;
      font-weight: normal;
      margin: .25em;
    }
    .weight-circle, .cal-circle {
      display: flex;
      align-items: center;
      justify-content: center;
      /* width: 70px; */
      padding: 0 .25em;
      height: 40px;
      border: 1px solid ${COLORS.BLACK};
      font-family: 'Inter',sans-serif;
      font-size: .8rem;
      font-weight: normal;
      margin: .25em;
    }
  }
  .fff {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 30px;
    button {
      width: calc(96% - 0.25em*2);
    }
  }
`;

const DiscountItem = () => {
    let { id } = useParams();
    const item = ALL_ITEMS.find(i => i.id === Number(id));
    const {category, title, date, description, place, address, city, image, price, discount, weight, logo, about, cal} = item;

    const dateObj = new Date(date);
    const dayStart = dateObj.getDate();
    const dayEnd = new Date().getDate();
    const month = 'червня'; //dateObj.toLocaleString('uk-UK',{month: 'long'});

    return (
      <Div
        image={image}
        category={category}>
        <div className='background-image'>
          <Button
            type='no-bg'
            link='discounts'>
            <img src={Arrow} className='arrow' />
            <p>Всі</p>
          </Button>

          <div className='da'>
            <Badge
              size={120}
              type='discount'
              category={category}>
              {discount? discount : '56'}
            </Badge>
          </div>

          {price && discount && <div className='badges'>
            <Badge
              size={140}
              type='old-price'
              category={category}>
              {price}
            </Badge>
            <Badge
              size={140}
              type='new-price'
              category={category}>
              {(price-((discount/100)*price)).toFixed()}
            </Badge>
          </div>}

          {logo && <img className='logo' src={logo} alt='' />}
        </div>

        <p className='title'>{title}</p>

        <p className='date'>
          <div className='circle'></div>
          {dayStart? dayStart : 2}-{dayEnd} {month}
        </p>

        <div className='location-cont'>
          <img className='location' src={Location} alt="" />
          <div>
            <p className='place'>{place}</p>
            <p className='address'>{address}</p>
            <p className='city'>Львів</p>
          </div>
        </div>

        <p className='description'>{description}</p>
        {about && <p className='about'>{about}</p>}

        <div className='price-cont'>
          {price && discount && (
            <div className='from-to'>
              <p>{price} uah</p>
              <img className='line-icon' src={Line} alt="" />
              <p>{(price-((discount/100)*price)).toFixed()} uah</p>
            </div>
          )}
          <p className='discount-circle'>{discount}%</p>
          {weight && <p className='weight-circle'>{weight} g</p>}
          {cal && <p className='cal-circle'>{cal} ccal</p>}
        </div>

        <div className="fff">
          <Button
            type='rounded'
            onClickHandler={() => console.log('hello')}>
            вибрати
          </Button>
          </div>
      </Div>
    );
};

export default DiscountItem;