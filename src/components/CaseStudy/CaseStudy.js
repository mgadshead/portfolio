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
    let body = document.querySelector('html');

    useEffect(() => {
        props.startOpen(props.id);
    }, []);

    useEffect(() => {
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
                }, 240);
            }
            if (body.scrollTop > 0) {
                scrollDown.current.classList.remove('show-scroll-down');
            }
            if (body.scrollTop === 0 && isTop === true) {
                scrollDown.current.classList.add('show-scroll-down');
            }
        };

        setTimeout(() => {
            if (homeButton.current !== null) {
                homeButton.current.classList.add('show-home-button');
            }
            if (scrollDown.current !== null) {
                scrollDown.current.classList.add('show-scroll-down');
            }
        }, 240);

        document.addEventListener('scroll', scrollFunction);

        return () => {
            document.removeEventListener('scroll', scrollFunction);
        };
    });

    const onClickFunctions = () => {
        props.closeCaseStudy(props.i);
        setIsTop(false);
    };

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
                role='button'
                ref={scrollDown}
                style={{ color: props.scrollDownColor }}
            >
                Scroll Down
                <ChevronIcon />
            </div>
            <div className='content'>
                <div className='wrapper'>
                    <div className='copy'>
                        <h1>{props.title}</h1>
                        <div dangerouslySetInnerHTML={props.copy}></div>
                        {props.externalPrettyLink && (
                            <a href={props.externalLink} target='_blank'>
                                {props.externalPrettyLink}
                            </a>
                        )}
                        {props.tags && (
                            <div className='tags'>
                                <h2>Tags:</h2>
                                <ul>
                                    <li>React</li>
                                    <li>Redux</li>
                                    <li>JavaScript</li>
                                    <li>WordPress</li>
                                    <li>REST API</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    {props.image && <img src={props.image} alt={props.title} />}
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
