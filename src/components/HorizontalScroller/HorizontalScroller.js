import React, { useState } from 'react';
import './HorizontalScroller.scss';
import WorkCard from '../WorkCard/WorkCard';

const HorizontalScroller = props => {
    const caseStudies = [
        { backgroundColor: '#fff', logo: 'about-me.svg', link: '/about-me' },
        { backgroundColor: '#F9FAF1', logo: 'archetto.svg', link: '/archetto-towns' },
        { backgroundColor: '#fff', logo: 'annie-burgess.svg', link: '/annie-burgess' },
        { backgroundColor: '#1C2E3B', logo: 'marlin-spring.svg', link: '/marlin-spring' },
        { backgroundColor: '#fff', logo: 'polo.svg', link: '/polo-travel' },
        { backgroundColor: '#9F7750', logo: 'wolfecorp.svg', link: '/wolfecorp' }
        // { backgroundColor: '#DB373F', logo: 'political-campaign.svg', link: '/political-campaign' }
    ];

    const caseStudiesList = caseStudies.map((caseStudy, i) => {
        return (
            <WorkCard
                key={i}
                backgroundColor={caseStudy.backgroundColor}
                logo={caseStudy.logo}
                getCardPosition={props.getCardPosition}
                cardPosition={props.cardPosition}
                i={i}
                index={props.index}
                isActive={props.isActive}
                link={caseStudy.link}
                getCardPosition={props.getCardPosition}
                openCaseStudy={props.openCaseStudy}
                transition={props.transition}
                zIndex={props.zIndex}
                cardParallax={props.cardParallax}
            />
        );
    });

    return <div className='HorizontalScroller'>{caseStudiesList}</div>;
};

export default HorizontalScroller;
