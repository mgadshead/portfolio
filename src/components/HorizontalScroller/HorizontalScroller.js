import React, { useState } from 'react';
import './HorizontalScroller.scss';
import WorkCard from '../WorkCard/WorkCard';

const HorizontalScroller = props => {
    const caseStudies = [
        { backgroundColor: '#fff', logo: 'about-me.svg', link: '/portfolio/about-me' },
        { backgroundColor: '#F9FAF1', logo: 'archetto.svg', link: '/portfolio/archetto-towns' },
        { backgroundColor: '#fff', logo: 'annie-burgess.svg', link: '/portfolio/annie-burgess' },
        { backgroundColor: '#1C2E3B', logo: 'marlin-spring.svg', link: '/portfolio/marlin-spring' },
        { backgroundColor: '#fff', logo: 'polo.svg', link: '/portfolio/polo-travel' },
        { backgroundColor: '#9F7750', logo: 'wolfecorp.svg', link: '/portfolio/wolfecorp' }
        // { backgroundColor: '#DB373F', logo: 'political-campaign.svg', link: '/portfolio/political-campaign' }
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
            />
        );
    });

    return <div className='HorizontalScroller'>{caseStudiesList}</div>;
};

export default HorizontalScroller;
