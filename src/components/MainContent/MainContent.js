import React from 'react';
import './MainContent.scss';
import HorizontalScroller from '../HorizontalScroller/HorizontalScroller';
import { useScrollBoost } from 'react-scrollbooster';

const MainContent = props => {
    const [viewport, scrollbooster] = useScrollBoost({
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
                cardPosition={props.cardPosition}
                openCaseStudy={props.openCaseStudy}
                isActive={props.isActive}
                transition={props.transition}
                zIndex={props.zIndex}
                cardParallax={props.cardParallax}
                transitionTime={props.transitionTime}
                setCardPosition={props.setCardPosition}
                setStartOnCaseStudy={props.setStartOnCaseStudy}
                setTransition={props.setTransition}
                setZIndex={props.setZIndex}
                setIndex={props.setIndex}
                setIsActive={props.setIsActive}
            />
        </div>
    );
};

export default MainContent;
