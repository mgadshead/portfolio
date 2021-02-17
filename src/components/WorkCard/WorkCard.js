import React from 'react';
import './WorkCard.scss';

const WorkCard = props => {
    const onClick = e => {
        props.getCardPosition(e);
        props.openCaseStudy(props.i, e);
    };

    return (
        <div
            className={`WorkCard${props.i === props.index && props.isActive ? ' active' : ''}`}
            onClick={e => onClick(e)}
        >
            <div
                className='expand-container'
                id={'card-' + props.i}
                style={{
                    background: props.backgroundColor,
                    top: props.i === props.index ? props.cardPosition.y + 'px' : 'auto',
                    left: props.i === props.index ? props.cardPosition.x + 'px' : 'auto',
                    position: props.i === props.index ? 'fixed' : 'absolute'
                }}
            >
                <img src={'/portfolio/img/' + props.logo} />
            </div>
        </div>
    );
};

export default WorkCard;
