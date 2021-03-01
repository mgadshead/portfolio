import React, { useEffect } from 'react';
import './WorkCard.scss';
import { Link, useHistory } from 'react-router-dom';

const WorkCard = props => {
    const history = useHistory();

    useEffect(() => {
        // Stop the transition taking place if you're going from case study to case study
        if (props.previousPage === '/') {
            var transition = true;
        } else {
            var transition = false;
        }
        // Listen for a change in route and fire the open animation whenever it happens
        // This means it'll work on back/forward
        return history.listen(location => {
            // I don't want the open animation to run when we go to the home page
            if (location.pathname !== '/') {
                openCaseStudy(props.i, transition);
            }
        });
    });

    const openCaseStudy = (i, transition) => {
        // Get the correct card by checking if the href matches the current location
        let currentCard = document.querySelector("a[href='" + history.location.pathname + "']");
        // Grab the index from the id
        let currentCardId = currentCard.id.replace(/^\D+/g, '');
        if (currentCardId == i) {
            let currentCardContainer = currentCard.parentElement;
            // Get the current position of the card container
            let currentCardPosition = currentCardContainer.getBoundingClientRect();
            // Set the container to position fixed at it's current location to allow for animation
            props.setCardPosition({ x: currentCardPosition.x, y: currentCardPosition.y });
            props.setStartOnCaseStudy(false);
            props.setZIndex(true);
            props.setIndex(i);
            // Animate to full screen
            // Stop the transition taking place if you're going from case study to case study
            if (transition === true) {
                props.setTransition(true);
                // So evidently promise chains don't happen in a way that guarantees a repaint between them
                // I also can't figure out how to chain requestAnimationFrame functions yet
                // So there you go, a setTimeout hack, it seems to work I guess, not pretty though
                setTimeout(() => {
                    props.setCardPosition({ x: 0, y: 0 });
                    props.setIsActive(true);
                }, 16);
            } else {
                props.setTransition(false);
                props.setCardPosition({ x: 0, y: 0 });
                props.setIsActive(true);
            }
        }
    };

    return (
        <div className={`WorkCard${props.i === props.index && props.isActive ? ' active' : ''}`}>
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
                        transform: 'translateY(' + props.cardParallax + 'px)'
                    }}
                />
            </Link>
        </div>
    );
};

export default WorkCard;
