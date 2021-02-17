import React, { useState } from 'react';
import './HorizontalScroller.scss';
import WorkCard from '../WorkCard/WorkCard';

const HorizontalScroller = () => {
    const [index, setIndex] = useState(null);
    const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });
    const [isActive, setIsActive] = useState(false);

    const caseStudies = [
        { backgroundColor: '#F9FAF1', logo: 'archetto.svg' },
        { backgroundColor: '#fff', logo: 'annie-burgess.svg' },
        { backgroundColor: '#1C2E3B', logo: 'marlin-spring.svg' },
        { backgroundColor: '#fff', logo: 'polo.svg' },
        { backgroundColor: '#9F7750', logo: 'wolfecorp.svg' },
        { backgroundColor: '#DB373F', logo: 'political-campaign.svg' }
    ];

    const getCardPosition = e => {
        let currentCard = document.getElementById(e.target.id);
        let currentCardContainer = currentCard.parentElement;
        let currentCardPosition = currentCardContainer.getBoundingClientRect();
        setCardPosition({ x: currentCardPosition.x, y: currentCardPosition.y });
    };

    const openCaseStudy = (i, e) => {
        if (index !== i) {
            // so evidently promise chains don't happen in a way that guarantees a repaint between them
            // i also can't figure out how to chain requestAnimationFrame functions yet
            // so there you go, a setTimeout hack, it seems to work I guess, not pretty though
            setIndex(i);
            setTimeout(() => {
                setCardPosition({ x: 0, y: 0 });
                setIsActive(true);
            }, 16);
        } else {
            getCardPosition(e);
            setIsActive(false);
            setTimeout(() => {
                setIndex(null);
            }, 250);
        }
    };

    const caseStudiesList = caseStudies.map((caseStudy, i) => {
        return (
            <WorkCard
                key={i}
                backgroundColor={caseStudy.backgroundColor}
                logo={caseStudy.logo}
                openCaseStudy={openCaseStudy}
                getCardPosition={getCardPosition}
                cardPosition={cardPosition}
                i={i}
                index={index}
                isActive={isActive}
            />
        );
    });

    return <div className='HorizontalScroller'>{caseStudiesList}</div>;
};

export default HorizontalScroller;
