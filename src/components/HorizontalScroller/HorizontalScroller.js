import React from 'react';
import './HorizontalScroller.scss';
import WorkCard from '../WorkCard/WorkCard';

const HorizontalScroller = props => {
    const caseStudiesList = props.caseStudies.map((caseStudy, i) => {
        return (
            <WorkCard
                backgroundColor={caseStudy.acf.background_color}
                logo={caseStudy.acf.logo}
                link={caseStudy.acf.link}
                cardPosition={props.cardPosition}
                setCardPosition={props.setCardPosition}
                isActive={props.isActive}
                setIsActive={props.setIsActive}
                transition={props.transition}
                setTransition={props.setTransition}
                zIndex={props.zIndex}
                setZIndex={props.setZIndex}
                setIndex={props.setIndex}
                index={props.index}
                i={i}
                key={i}
                cardParallax={props.cardParallax}
                transitionTime={props.transitionTime}
                setStartOnCaseStudy={props.setStartOnCaseStudy}
                openCaseStudy={props.openCaseStudy}
                previousPage={props.previousPage}
            />
        );
    });

    return <div className='HorizontalScroller'>{caseStudiesList}</div>;
};

export default HorizontalScroller;
