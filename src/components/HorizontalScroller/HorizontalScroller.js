import React from 'react';
import './HorizontalScroller.scss';
import WorkCard from '../WorkCard/WorkCard';

const HorizontalScroller = props => {
    const caseStudiesList = props.caseStudies.map((caseStudy, i) => {
        return (
            <WorkCard
                backgroundColor={caseStudy.backgroundColor}
                logo={caseStudy.logo}
                link={caseStudy.link}
                cardPosition={props.cardPosition}
                setCardPosition={props.setCardPosition}
                i={i}
                key={i}
                index={props.index}
                isActive={props.isActive}
                openCaseStudy={props.openCaseStudy}
                transition={props.transition}
                zIndex={props.zIndex}
                cardParallax={props.cardParallax}
                transitionTime={props.transitionTime}
                setStartOnCaseStudy={props.setStartOnCaseStudy}
                setTransition={props.setTransition}
                setZIndex={props.setZIndex}
                setIndex={props.setIndex}
                setIsActive={props.setIsActive}
            />
        );
    });

    return <div className='HorizontalScroller'>{caseStudiesList}</div>;
};

export default HorizontalScroller;
