import React from 'react';
import './WorkCard.scss';
import { Link } from 'react-router-dom';

const WorkCard = props => {
    const onClick = e => {
        props.getCardPosition(e);
        props.openCaseStudy(props.i);
    };

    return (
        <div
            className={`WorkCard${props.i === props.index && props.isActive ? ' active' : ''}`}
            onClick={e => onClick(e)}
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
                    transition: props.transition ? 'all 0.24s' : 'none'
                }}
            >
                <img src={'/portfolio/img/' + props.logo} />
            </Link>
        </div>
    );
};

export default WorkCard;
