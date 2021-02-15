import React from 'react';
import './MainContent.scss';
import HorizontalScroller from '../HorizontalScroller/HorizontalScroller';
import { useScrollBoost } from 'react-scrollbooster';
// import ScrollBooster from 'scrollbooster';

const MainContent = () => {
    const [viewport, scrollbooster] = useScrollBoost({
        direction: 'horizontal',
        scrollMode: 'native',
        emulateScroll: true
        // shouldScroll: (state, event) => {
        //     return !event.target.classList.contains('expand-container');
        // }
    });

    // const scroll = () => {
    //     if (scrollbooster) {
    //         console.log('scrollbooster');
    //     } else {
    //         console.log('no scrollbooster');
    //     }
    // };

    // useEffect(() => {
    //     let scrollbooster = new ScrollBooster({
    //         viewport: document.querySelector('.MainContent'),
    //         scrollMode: 'transform',
    //         direction: 'horizontal'
    //     });

    //     console.log(scrollbooster);

    //     scroll(scrollbooster);
    // });

    // const scroll = scrollbooster => {
    //     scrollbooster.scrollTo({ x: 500, y: 0 });
    // };

    return (
        <div className='MainContent' ref={viewport} /*onClick={scroll}*/>
            <HorizontalScroller />
        </div>
    );
};

export default MainContent;
