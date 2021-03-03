import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './CaseStudy.scss';
import HomeIcon from '../HomeIcon/HomeIcon';
import ChevronIcon from '../ChevronIcon/ChevronIcon';
import smoothscroll from 'smoothscroll-polyfill';
import { useSwipeable } from 'react-swipeable';
import LazyLoad from 'vanilla-lazyload';

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

        document.addEventListener('scroll', scrollFunction);

        return () => {
            document.removeEventListener('scroll', scrollFunction);
        };
    });

    useEffect(() => {
        var lazyLoadInstance = new LazyLoad();

        setTimeout(() => {
            if (homeButton.current !== null) {
                homeButton.current.classList.add('show-home-button');
            }
        }, props.transitionTime);
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
        let index = props.caseStudies.findIndex(function (obj) {
            return obj.id == props.caseStudyPage.id;
        });
        if (index - 1 > -1) {
            // Resolves to false without the greater than statement
            props.setPreviousPage(props.caseStudies[index].acf.link);
            // Dammit another setTimeout
            setTimeout(() => {
                history.push(props.caseStudies[index - 1].acf.link);
            }, 16);
        }
    };

    const next = () => {
        let index = props.caseStudies.findIndex(function (obj) {
            return obj.id == props.caseStudyPage.id;
        });
        if (props.caseStudies[index + 1]) {
            props.setPreviousPage(props.caseStudies[index].acf.link);
            // Dammit another setTimeout
            setTimeout(() => {
                history.push(props.caseStudies[index + 1].acf.link);
            }, 16);
        }
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => next(),
        onSwipedRight: () => previous()
    });

    const copy = {
        __html: props.caseStudyPage.acf.content
    };

    const tagsArray = Object.values(props.caseStudyPage.acf.tags);

    const tags = tagsArray.map((tag, i) => {
        return <li key={i}>{Object.values(tag)}</li>;
    });

    const images = props.caseStudyPage.acf.images.map((image, i) => {
        return (
            <img
                key={i}
                className='lazy'
                data-srcset={
                    image.image.sizes.mobile +
                    ' 500w, ' +
                    image.image.sizes.tablet +
                    ' 800w, ' +
                    image.image.sizes.desktop +
                    ' 1200w'
                }
                alt={image.image.alt}
            />
        );
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
                style={{
                    color: props.caseStudyPage.acf.scroll_down_color === 'Dark' ? '#333' : '#fff'
                }}
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
                        <h1>{props.caseStudyPage.acf.title}</h1>
                        <div dangerouslySetInnerHTML={copy}></div>
                        {props.caseStudyPage.acf.external_pretty_link && (
                            <a href={props.caseStudyPage.acf.external_link} target='_blank'>
                                {props.caseStudyPage.acf.external_pretty_link}
                            </a>
                        )}
                        {tags.length !== 0 && (
                            <div className='tags'>
                                <h2>Tags:</h2>
                                <ul>{tags}</ul>
                            </div>
                        )}
                    </div>
                    {props.caseStudyPage.acf.images && <div className='images'>{images}</div>}
                    <div className='bottom-links'>
                        {props.caseStudies[props.id - 1] && (
                            <span className='previous' onClick={() => previous()}>
                                <ChevronIcon />
                            </span>
                        )}
                        {!props.caseStudies[props.id - 1] && (
                            <span className='no-link previous'>
                                <ChevronIcon />
                            </span>
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
                                <ChevronIcon />
                            </span>
                        )}
                        {!props.caseStudies[props.id + 1] && (
                            <span className='no-link next'>
                                <ChevronIcon />
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudy;
