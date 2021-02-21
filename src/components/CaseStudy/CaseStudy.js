import React, { useEffect, useState, useRef, dangerouslySetInnerHTML } from 'react';
import './CaseStudy.scss';
import { useHistory } from 'react-router-dom';
import HomeIcon from '../HomeIcon/HomeIcon';
import ChevronIcon from '../ChevronIcon/ChevronIcon';

const CaseStudy = props => {
    const [isTop, setIsTop] = useState(true);
    const history = useHistory();
    const homeButton = useRef(null);
    const scrollDown = useRef(null);

    useEffect(() => {
        let body = document.querySelector('html');

        const scrollFunction = () => {
            if (body.scrollTop === 0 && isTop === false) {
                setIsTop(true);
                props.getFullCardPosition();
                props.setIsActive(false);
                homeButton.current.classList.remove('show-home-button');
                scrollDown.current.classList.remove('show-scroll-down');
                setTimeout(() => {
                    props.setIndex(null);
                    history.push('/portfolio');
                    props.setZIndex(false);
                }, 240);
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
        }, 240);

        document.addEventListener('scroll', scrollFunction);

        return () => {
            document.removeEventListener('scroll', scrollFunction);
        };
    });

    useEffect(() => {
        props.startOpen(props.id);
        setTimeout(() => {
            if (scrollDown.current !== null) {
                scrollDown.current.classList.add('show-scroll-down');
            }
        }, 240);
    }, []);

    const onClickFunctions = () => {
        props.closeCaseStudy(props.i);
        setIsTop(false);
    };

    const scrollDownEvent = () => {
        let windowHeight = window.innerHeight;
        window.scrollTo({ top: windowHeight, behavior: 'smooth' });
    };

    const tags = props.tags.map((tag, i) => {
        return <li key={i}>{tag}</li>;
    });

    const images = props.images.map((image, i) => {
        return <img key={i} src={image} alt={props.title} />;
    });

    return (
        <div className='CaseStudy'>
            <div
                className='home-button'
                id='home-button'
                role='button'
                ref={homeButton}
                onClick={() => {
                    onClickFunctions();
                }}
            >
                <HomeIcon />
            </div>
            <div
                className='scroll-down'
                style={{ color: props.scrollDownColor }}
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
            <div className='content'>
                <div className='wrapper'>
                    {props.mockup && <img src={props.mockup} alt={props.title} />}
                    <div className='copy'>
                        <h1>{props.title}</h1>
                        <div dangerouslySetInnerHTML={props.copy}></div>
                        {props.externalPrettyLink && (
                            <a href={props.externalLink} target='_blank'>
                                {props.externalPrettyLink}
                            </a>
                        )}
                        {props.tags[0] && (
                            <div className='tags'>
                                <h2>Tags:</h2>
                                <ul>{tags}</ul>
                            </div>
                        )}
                    </div>
                    {props.images && <div className='images'>{images}</div>}
                    <div className='home-link'>
                        <span
                            id='home-link'
                            onClick={() => {
                                onClickFunctions();
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
