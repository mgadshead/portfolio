import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './CaseStudy.scss';
import HomeIcon from '../HomeIcon/HomeIcon';
import ChevronIcon from '../ChevronIcon/ChevronIcon';

const CaseStudy = props => {
    const content = useRef(null);
    const history = useHistory();

    const initCloseCaseStudy = () => {
        props.setTransition(true);
        props.setIsTop(false);
        // window.scrollTo({ top: 0, behavior: 'smooth' });
        // window.scrollTo(window.scrollX, window.scrollY + 1);
        setTimeout(() => {
            // window.scrollTo(window.scrollX, window.scrollY - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1);
    };

    const closeCaseStudy = () => {
        let currentCardContainer = document.querySelector('.WorkCard.active');
        let currentCardPosition = currentCardContainer.getBoundingClientRect();
        props.setCardPosition({ x: currentCardPosition.x, y: currentCardPosition.y });
        props.setIsTop(true);
        props.setIsActive(false);
        props.homeButton.current.classList.remove('show-home-button');
        props.scrollDown.current.classList.remove('show-scroll-down');
        setTimeout(() => {
            props.setIndex(null);
            history.push('');
            props.setZIndex(false);
        }, props.transitionTime);
    };

    useEffect(() => {
        let body = document.querySelector('html');

        const scrollFunction = () => {
            if (body.scrollTop === 0 && props.isTop === false) {
                closeCaseStudy();
            }
            if (body.scrollTop === 0 && props.isTop === true) {
                props.current.classList.add('show-scroll-down');
            }
            if (body.scrollTop > 0) {
                let cardParallaxPosition = body.scrollTop * -0.32;
                props.setCardParallax(cardParallaxPosition);
                props.scrollDown.current.classList.remove('show-scroll-down');
            } else {
                props.setCardParallax(0);
            }
        };

        setTimeout(() => {
            if (props.homeButton.current !== null) {
                props.homeButton.current.classList.add('show-home-button');
            }
        }, props.transitionTime);

        document.addEventListener('scroll', scrollFunction);

        window.onpopstate = function () {
            window.location.reload();
        };

        return () => {
            document.removeEventListener('scroll', scrollFunction);
        };
    });

    useEffect(() => {
        props.startOpen(props.id);
        setTimeout(() => {
            if (props.scrollDown.current !== null) {
                props.scrollDown.current.classList.add('show-scroll-down');
            }
        }, props.transitionTime);
    }, []);

    const scrollDownEvent = () => {
        let scrollPosition = content.current.offsetTop;
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    };

    const tags = props.caseStudyPage.tags.map((tag, i) => {
        return <li key={i}>{tag}</li>;
    });

    const images = props.caseStudyPage.images.map((image, i) => {
        return <img key={i} src={process.env.PUBLIC_URL + image} alt={props.caseStudyPage.title} />;
    });

    return (
        <div className='CaseStudy'>
            <div
                className='home-button'
                id='home-button'
                role='button'
                ref={props.homeButton}
                onClick={() => {
                    initCloseCaseStudy();
                }}
            >
                <HomeIcon />
            </div>
            <div
                className='scroll-down'
                style={{ color: props.caseStudyPage.scrollDownColor }}
                ref={props.scrollDown}
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
                        {props.caseStudyPage.tags[0] && (
                            <div className='tags'>
                                <h2>Tags:</h2>
                                <ul>{tags}</ul>
                            </div>
                        )}
                    </div>
                    {props.caseStudyPage.images && <div className='images'>{images}</div>}
                    <div className='home-link'>
                        <span
                            id='home-link'
                            onClick={() => {
                                initCloseCaseStudy();
                            }}
                            role='button'
                        >
                            Home
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudy;
