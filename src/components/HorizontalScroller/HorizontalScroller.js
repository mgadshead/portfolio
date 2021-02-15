import React, { useState } from 'react';
import './HorizontalScroller.scss';
import WorkCard from '../WorkCard/WorkCard';

const HorizontalScroller = () => {
    const [index, setIndex] = useState(null);

    const caseStudies = [
        { backgroundColor: '#F9FAF1', logo: 'archetto.svg' },
        { backgroundColor: '#fff', logo: 'annie-burgess.svg' },
        { backgroundColor: '#1C2E3B', logo: 'marlin-spring.svg' },
        { backgroundColor: '#fff', logo: 'polo.svg' },
        { backgroundColor: '#9F7750', logo: 'wolfecorp.svg' },
        { backgroundColor: '#DB373F', logo: 'political-campaign.svg' }
    ];

    const openCaseStudy = i => {
        if (index !== i) {
            setIndex(i);
        } else {
            setIndex(null);
        }
    };

    const caseStudiesList = caseStudies.map((caseStudy, i) => {
        return (
            <WorkCard
                key={i}
                backgroundColor={caseStudy.backgroundColor}
                logo={caseStudy.logo}
                openCaseStudy={openCaseStudy}
                i={i}
                index={index}
                // setCardPosition={setCardPosition}
            />
        );
    });

    return <div className='HorizontalScroller'>{caseStudiesList}</div>;
};

export default HorizontalScroller;
