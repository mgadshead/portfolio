import React, { useState } from 'react';
import './WorkCard.scss';

const WorkCard = props => {
    const [cardPositionX, setCardPositionX] = useState(0);
    const [cardPositionY, setCardPositionY] = useState(0);
    const onClick = e => {
        props.openCaseStudy(props.i);
        function cardPromise() {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(getCardPosition(e));
                }, 2000);
            });
        }

        async function startAnimation() {
            await cardPromise();
            setFullScreen();
        }

        startAnimation();
    };

    const getCardPosition = e => {
        let currentCard = document.getElementById(e.target.id);
        let currentCardPosition = currentCard.getBoundingClientRect();
        setCardPositionX(currentCardPosition.x);
        setCardPositionY(currentCardPosition.y);
    };

    const setFullScreen = () => {
        setCardPositionX(0);
        setCardPositionY(0);
    };

    return (
        <div
            className={`WorkCard${props.i === props.index ? ' active' : ''}`}
            onClick={e => onClick(e)}
        >
            <div
                className='expand-container'
                id={'card-' + props.i}
                style={{
                    background: props.backgroundColor,
                    position: props.i === props.index ? 'fixed' : 'absolute',
                    // zIndex: props.i === props.index ? '1' : 'inherit',
                    top: props.i === props.index ? cardPositionY + 'px' : '0',
                    left: props.i === props.index ? cardPositionX + 'px' : '0'
                }}
            >
                <img src={'/img/' + props.logo} />
            </div>
        </div>
    );
};

export default WorkCard;
