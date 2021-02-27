import React, { useState, useRef } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CaseStudy from '../CaseStudy/CaseStudy';
import Site from '../Site/Site';
import { caseStudies } from '../../data/data';

const Router = () => {
    const [index, setIndex] = useState(null);
    const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });
    const [isActive, setIsActive] = useState(false);
    const [transition, setTransition] = useState(false);
    const [zIndex, setZIndex] = useState(false);
    const [cardParallax, setCardParallax] = useState(null);
    const [isTop, setIsTop] = useState(true);
    const [startOnCaseStudy, setStartOnCaseStudy] = useState(true);
    const homeButton = useRef(null);
    const scrollDown = useRef(null);
    const transitionTime = 240; // Change $transition in App.scss to match

    const startOpen = i => {
        if (startOnCaseStudy) {
            setIndex(i);
            setCardPosition({ x: 0, y: 0 });
            setIsActive(true);
            setZIndex(true);
        }
    };

    const caseStudyPages = caseStudies.map((caseStudyPage, i) => {
        return (
            <Route path={caseStudyPage.link} key={i}>
                <CaseStudy
                    caseStudyPage={caseStudyPage}
                    setIsActive={setIsActive}
                    setIndex={setIndex}
                    id={i}
                    setZIndex={setZIndex}
                    setCardParallax={setCardParallax}
                    setIsTop={setIsTop}
                    isTop={isTop}
                    transitionTime={transitionTime}
                    homeButton={homeButton}
                    scrollDown={scrollDown}
                    setTransition={setTransition}
                    setCardPosition={setCardPosition}
                    startOpen={startOpen}
                />
            </Route>
        );
    });

    return (
        <BrowserRouter>
            <Site
                caseStudies={caseStudies}
                setCardPosition={setCardPosition}
                index={index}
                setIndex={setIndex}
                setIsActive={setIsActive}
                cardPosition={cardPosition}
                isActive={isActive}
                transition={transition}
                zIndex={zIndex}
                cardParallax={cardParallax}
                transitionTime={transitionTime}
                setStartOnCaseStudy={setStartOnCaseStudy}
                setTransition={setTransition}
                setZIndex={setZIndex}
                setIndex={setIndex}
                setIsActive={setIsActive}
            ></Site>
            <Switch>{caseStudyPages}</Switch>
        </BrowserRouter>
    );
};

export default Router;
