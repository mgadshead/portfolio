import React from 'react';
import MainContent from '../MainContent/MainContent';

const Site = props => {
    return (
        <div className='Site'>
            <MainContent
                setCardPosition={props.setCardPosition}
                index={props.index}
                setIndex={props.setIndex}
                setIsActive={props.setIsActive}
                cardPosition={props.cardPosition}
                openCaseStudy={props.openCaseStudy}
                isActive={props.isActive}
                transition={props.transition}
                zIndex={props.zIndex}
                cardParallax={props.cardParallax}
                transitionTime={props.transitionTime}
                caseStudies={props.caseStudies}
                setCardPosition={props.setCardPosition}
                setStartOnCaseStudy={props.setStartOnCaseStudy}
                setTransition={props.setTransition}
                setZIndex={props.setZIndex}
                setIndex={props.setIndex}
                setIsActive={props.setIsActive}
            ></MainContent>
        </div>
    );
};

export default Site;
