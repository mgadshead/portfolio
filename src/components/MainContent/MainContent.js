import React from 'react';
import './MainContent.scss';
import HorizontalScroller from '../HorizontalScroller/HorizontalScroller';
import { useScrollBoost } from 'react-scrollbooster';

const MainContent = () => {
    const [viewport, scrollbooster] = useScrollBoost({
        direction: 'horizontal',
        scrollMode: 'native',
        emulateScroll: true
    });

    return (
        <div className='MainContent' ref={viewport}>
            <HorizontalScroller />
        </div>
    );
};

export default MainContent;
