import React from 'react';
import './MainContent.scss';
import HorizontalScroller from '../HorizontalScroller/HorizontalScroller';
import { useScrollBoost } from 'react-scrollbooster';

const MainContent = props => {
    const [viewport] = useScrollBoost({
        direction: 'horizontal',
        scrollMode: 'native',
        emulateScroll: true,
        onClick: (state, event) => {
            if (state.isDragging) {
                event.preventDefault();
                event.stopImmediatePropagation();
            }
        }
    });

    return (
        <div className='MainContent' ref={viewport}>
            <HorizontalScroller
                caseStudies={props.caseStudies}
                index={props.index}
                setIndex={props.setIndex}
                cardPosition={props.cardPosition}
                setCardPosition={props.setCardPosition}
                isActive={props.isActive}
                setIsActive={props.setIsActive}
                zIndex={props.zIndex}
                setZIndex={props.setZIndex}
                transition={props.transition}
                setTransition={props.setTransition}
                cardParallax={props.cardParallax}
                transitionTime={props.transitionTime}
                setStartOnCaseStudy={props.setStartOnCaseStudy}
            />
        </div>
    );
};

export default MainContent;
