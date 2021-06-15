import React, {useEffect} from 'react';
import anime from 'animejs';

import Button from '../../components/Button';
import Line from '../../assets/images/icon_line.svg';
import Link from '../../assets/images/link.svg';

const Setup = ({isLoggedin = false, name = 'Анна'}) => {
    useEffect(() => {
        anime({
            targets: '.line',
            translateX: 20,
            delay: 800,
            direction: 'alternate',
            easing: 'easeInOutSine'
        });
    }, []);

    if (isLoggedin) {
        return (
            <div className='fff fbg'>
                <h2>Привіт, {name}</h2>
                <Button
                    className='signup-slider-page_button'
                    type='no-bg'
                    link='discounts'>
                    перейти
                </Button>
            </div>
        )
    }
    return (
        <div className='fff fbg'>
            <p className='signup-slider-page_label'>
                Пропонуємо тобі заповнити інформацію про себе, щоб ми підібрали саме ті знижки, що тобі потрібні
                <img className='line' src={Line} alt='' />
            </p>
            <h2>Привіт, незнайомцю</h2>
            <Button
                className='signup-slider-page_button'
                type='no-bg'
                link='signup'>
                познайомитись
            </Button>
        </div>
    );
};

export default Setup;