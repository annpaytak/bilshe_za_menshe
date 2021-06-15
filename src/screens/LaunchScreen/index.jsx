import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import anime from 'animejs';

import LogoTop from '../../assets/images/logo_dark_top.svg';
import LogoCenter from '../../assets/images/logo_dark_center.svg';
import LogoBottom from '../../assets/images/logo_dark_bottom.svg';
import LogoDark from '../../assets/images/logo_dark_c.svg';
import Logo from '../../assets/images/logo_elem_dark.svg';

const LaunchScreen = () => {
    const [timerState, setTimerState] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimerState(true);
        }, 5500);

        return () => {
            clearTimeout(timer);
        }
    }, []);

    useEffect(() => {
        anime({
            targets: '.launch-screen-logo-left',
            right: 0,
            left: 0,
            duration: 1000
        });
        anime({
            targets: '.launch-screen-logo-right',
            right: 0,
            left: 0,
            duration: 1000
        });
    }, []);

    // if (timerState) return <Redirect to='/setup' />
    return (
        <div className='launch-screen'>
            <img className='launch-screen-logo-left ff' src={LogoTop} alt='' />
            <img className='launch-screen-logo-left vv' src={LogoDark} alt='' />
            <img  className='launch-screen-logo-center' src={LogoCenter} alt='' />
            <img className='launch-screen-logo-right ss' src={LogoDark} alt='' />
            <img className='launch-screen-logo-right aa' src={LogoBottom} alt='' />
        </div>
    );
};

export default LaunchScreen;