import React from 'react';
import './WorkCard.scss';
import { Link } from 'react-router-dom';

const WorkCard = props => {
    const openCaseStudy = (e, i) => {
        if (props.index !== i) {
            // so evidently promise chains don't happen in a way that guarantees a repaint between them
            // i also can't figure out how to chain requestAnimationFrame functions yet
            // so there you go, a setTimeout hack, it seems to work I guess, not pretty though
            let currentCard = document.getElementById(e.target.id);
            let currentCardContainer = currentCard.parentElement;
            let currentCardPosition = currentCardContainer.getBoundingClientRect();
            props.setCardPosition({ x: currentCardPosition.x, y: currentCardPosition.y });
            props.setStartOnCaseStudy(false);
            props.setTransition(true);
            props.setZIndex(true);
            props.setIndex(i);
            setTimeout(() => {
                props.setCardPosition({ x: 0, y: 0 });
                props.setIsActive(true);
            }, 16);
        }
    };

    return (
        <div
            className={`WorkCard${props.i === props.index && props.isActive ? ' active' : ''}`}
            onClick={e => openCaseStudy(e, props.i)}
        >
            <Link
                to={props.link}
                className='expand-container'
                id={'card-' + props.i}
                style={{
                    background: props.backgroundColor,
                    top: props.i === props.index ? props.cardPosition.y + 'px' : 'auto',
                    left: props.i === props.index ? props.cardPosition.x + 'px' : 'auto',
                    position: props.i === props.index ? 'fixed' : 'absolute',
                    transition: props.transition
                        ? 'all ' + props.transitionTime + 'ms'
                        : 'opacity ' + props.transitionTime + 'ms',
                    zIndex: props.i === props.index && props.zIndex ? '1' : 'auto'
                }}
            >
                <img
                    src={process.env.PUBLIC_URL + '/img/' + props.logo}
                    style={{
                        transform:
                            props.i === props.index
                                ? 'translateY(' + props.cardParallax + 'px)'
                                : '0'
                    }}
                />
            </Link>
        </div>
    );
};

export default WorkCard;
