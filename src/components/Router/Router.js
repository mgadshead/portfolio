import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CaseStudy from '../CaseStudy/CaseStudy';
import MainContent from '../MainContent/MainContent';
import { caseStudies } from '../../data/data';

const Router = () => {
    const [index, setIndex] = useState(null);
    const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });
    const [isActive, setIsActive] = useState(false);
    const [transition, setTransition] = useState(false);
    const [zIndex, setZIndex] = useState(false);
    const [cardParallax, setCardParallax] = useState(null);
    const [startOnCaseStudy, setStartOnCaseStudy] = useState(true);
    const [previousPage, setPreviousPage] = useState('/');
    const transitionTime = 240; // Change $transition in App.scss to match

    const startOpen = i => {
        // THIS FUNCTION MUST BE AT ROOT/ROUTER. STOP TRYING TO MOVE IT!
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
                    transitionTime={transitionTime}
                    setTransition={setTransition}
                    setCardPosition={setCardPosition}
                    startOpen={startOpen}
                    caseStudies={caseStudies}
                    setPreviousPage={setPreviousPage}
                    setCardParallax={setCardParallax}
                />
            </Route>
        );
    });

    return (
        <BrowserRouter>
            <MainContent
                caseStudies={caseStudies}
                index={index}
                setIndex={setIndex}
                cardPosition={cardPosition}
                setCardPosition={setCardPosition}
                isActive={isActive}
                setIsActive={setIsActive}
                zIndex={zIndex}
                setZIndex={setZIndex}
                transition={transition}
                setTransition={setTransition}
                cardParallax={cardParallax}
                setCardParallax={setCardParallax}
                transitionTime={transitionTime}
                setStartOnCaseStudy={setStartOnCaseStudy}
                previousPage={previousPage}
            ></MainContent>
            <Switch>{caseStudyPages}</Switch>
        </BrowserRouter>
    );
};

export default Router;
