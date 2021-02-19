import React, { useEffect, useState } from 'react';
import './CaseStudy.scss';
import { useHistory } from 'react-router-dom';

const CaseStudy = props => {
    const [isTop, setIsTop] = useState(false);
    const history = useHistory();

    useEffect(() => {
        const scrollFunction = () => {
            let body = document.querySelector('html');
            console.log(body.scrollTop);
            if (body.scrollTop === 0 && isTop === false) {
                setIsTop(true);
                props.getFullCardPosition();
                props.setIsActive(false);
                setTimeout(() => {
                    props.setIndex(null);
                    history.push('/portfolio');
                }, 250);
            }
        };

        document.addEventListener('scroll', scrollFunction);

        return () => {
            document.removeEventListener('scroll', scrollFunction);
        };
    });

    const onClickFunctions = () => {
        props.closeCaseStudy(props.i);
    };
    return (
        <div className='CaseStudy'>
            <div className='content'>
                <div className='wrapper'>
                    <div className='copy'>
                        <h1>{props.title}</h1>
                        <p>{props.copy}</p>
                        <a href={props.externalLink} target='_blank'>
                            {props.externalPrettyLink}
                        </a>
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
                    </div>
                    <img src='/portfolio/img/archetto.png' alt='Archetto Towns' />
                    <div className='home-link'>
                        <span
                            id='home-link'
                            onClick={e => {
                                onClickFunctions(e);
                            }}
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
