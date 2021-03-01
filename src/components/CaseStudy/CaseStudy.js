import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './CaseStudy.scss';
import HomeIcon from '../HomeIcon/HomeIcon';
import ChevronIcon from '../ChevronIcon/ChevronIcon';
import smoothscroll from 'smoothscroll-polyfill';
import { useSwipeable } from 'react-swipeable';

const CaseStudy = props => {
    const content = useRef(null);
    const history = useHistory();
    const [isTop, setIsTop] = useState(true);
    const homeButton = useRef(null);
    const scrollDown = useRef(null);

    smoothscroll.polyfill();

    useEffect(() => {
        // Listen for a change in route and fire the close animation whenever it happens
        // This means it'll work on back/forward
        return history.listen(location => {
            // I want the close animation to run when we go to the home page
            if (location.pathname === '/') {
                initCloseCaseStudy();
            }
        });
    }, [history]);

    useEffect(() => {
        let body = document.querySelector('html');

        const scrollFunction = () => {
            if (body.scrollTop === 0 && isTop === false) {
                closeCaseStudy();
            }
            if (body.scrollTop === 0 && isTop === true) {
                scrollDown.current.classList.add('show-scroll-down');
            }
            if (body.scrollTop > 0) {
                let cardParallaxPosition = body.scrollTop * -0.32;
                props.setCardParallax(cardParallaxPosition);
                scrollDown.current.classList.remove('show-scroll-down');
            } else {
                props.setCardParallax(0);
            }
        };

        setTimeout(() => {
            if (homeButton.current !== null) {
                homeButton.current.classList.add('show-home-button');
            }
        }, props.transitionTime);

        document.addEventListener('scroll', scrollFunction);

        return () => {
            document.removeEventListener('scroll', scrollFunction);
        };
    });

    useEffect(() => {
        props.startOpen(props.id);
        window.scrollTo(0, 0);
        setTimeout(() => {
            if (scrollDown.current !== null) {
                scrollDown.current.classList.add('show-scroll-down');
            }
        }, props.transitionTime);
    }, []);

    const initCloseCaseStudy = () => {
        let body = document.querySelector('html');
        props.setPreviousPage('/');
        if (homeButton.current === null) {
            closeCaseStudy();
        } else {
            if (body.scrollTop === 0) {
                closeCaseStudy();
            } else {
                setIsTop(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };

    const closeCaseStudy = () => {
        props.setTransition(true);
        let currentCardContainer = document.querySelector('.WorkCard.active');
        // Since this now fires on click as well as on page change we have to check if it's already run once
        // I should probably do something nicer later
        if (currentCardContainer !== null) {
            props.setCardParallax(0);
            let currentCardPosition = currentCardContainer.getBoundingClientRect();
            props.setCardPosition({ x: currentCardPosition.x, y: currentCardPosition.y });
            setIsTop(true);
            props.setIsActive(false);
            // Same deal down here, if it's already run once these return as null
            if (homeButton.current !== null) {
                homeButton.current.classList.remove('show-home-button');
            }
            if (scrollDown.current !== null) {
                scrollDown.current.classList.remove('show-scroll-down');
            }
            setTimeout(() => {
                props.setIndex(null);
                history.push('');
                props.setZIndex(false);
            }, props.transitionTime);
        }
    };

    const scrollDownEvent = () => {
        let scrollPosition = content.current.offsetTop;
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    };

    const previous = () => {
        if (props.caseStudies[props.id - 1]) {
            props.setPreviousPage(props.caseStudies[props.id].link);
            // Dammit another setTimeout
            setTimeout(() => {
                history.push(props.caseStudies[props.id - 1].link);
            }, 16);
        }
    };

    const next = () => {
        if (props.caseStudies[props.id + 1]) {
            props.setPreviousPage(props.caseStudies[props.id].link);
            // Dammit another setTimeout
            setTimeout(() => {
                history.push(props.caseStudies[props.id + 1].link);
            }, 16);
        }
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => next(),
        onSwipedRight: () => previous()
    });

    const tags = props.caseStudyPage.tags.map((tag, i) => {
        return <li key={i}>{tag}</li>;
    });

    const images = props.caseStudyPage.images.map((image, i) => {
        return <img key={i} src={process.env.PUBLIC_URL + image} alt={props.caseStudyPage.title} />;
    });

    return (
        <div className='CaseStudy' {...handlers}>
            <div
                className='home-button'
                id='home-button'
                role='button'
                ref={homeButton}
                onClick={() => {
                    initCloseCaseStudy();
                }}
            >
                <HomeIcon />
            </div>
            <div
                className='scroll-down'
                style={{ color: props.caseStudyPage.scrollDownColor }}
                ref={scrollDown}
                role='button'
            >
                <div
                    className='scroll-button'
                    onClick={() => {
                        scrollDownEvent();
                    }}
                >
                    Scroll Down
                    <ChevronIcon />
                </div>
            </div>
            <div className='content' ref={content}>
                <div className='wrapper'>
                    {props.caseStudyPage.mockup && (
                        <img
                            src={process.env.PUBLIC_URL + props.caseStudyPage.mockup}
                            alt={props.caseStudyPage.title}
                        />
                    )}
                    <div className='copy'>
                        <h1>{props.caseStudyPage.title}</h1>
                        <div dangerouslySetInnerHTML={props.caseStudyPage.copy}></div>
                        {props.caseStudyPage.externalPrettyLink && (
                            <a href={props.caseStudyPage.externalLink} target='_blank'>
                                {props.caseStudyPage.externalPrettyLink}
                            </a>
                        )}
                        {props.caseStudyPage.tags.length !== 0 && (
                            <div className='tags'>
                                <h2>Tags:</h2>
                                <ul>{tags}</ul>
                            </div>
                        )}
                    </div>
                    {props.caseStudyPage.images && <div className='images'>{images}</div>}
                    <div className='bottom-links'>
                        {props.caseStudies[props.id - 1] && (
                            <span className='previous' onClick={() => previous()}>
                                <ChevronIcon />
                                Previous
                            </span>
                        )}
                        {!props.caseStudies[props.id - 1] && (
                            <span className='no-link'>Previous</span>
                        )}
                        <span
                            id='home-link'
                            onClick={() => {
                                initCloseCaseStudy();
                            }}
                            role='button'
                        >
                            Home
                        </span>
                        {props.caseStudies[props.id + 1] && (
                            <span className='next' onClick={() => next()}>
                                Next
                                <ChevronIcon />
                            </span>
                        )}
                        {!props.caseStudies[props.id + 1] && <span className='no-link'>Next</span>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudy;
