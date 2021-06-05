import React from 'react';

import Button from '../../components/Button';

const Setup = ({isLoggedin = false, name = 'Анна'}) => {
    if (isLoggedin) {
        return (
            <div className='fff'>
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
        <div className='fff'>
            <p  className='signup-slider-page_label'>Пропонуємо тобі заповнити інформацію про себе, щоб ми підібрали саме ті знижки, що тобі потрібні</p>
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