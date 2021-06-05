import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';

const DiscountItem = () => {
    const [timerState, setTimerState] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimerState(true);
        }, 1500);

        return () => {
            clearTimeout(timer);
        }
    }, []);

    if (timerState) return <Redirect to="/setup" />
    return (
        <div>
            logo
        </div>
    );
};

export default DiscountItem;