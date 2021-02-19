import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainContent from '../MainContent/MainContent';
import CaseStudy from '../CaseStudy/CaseStudy';

const Router = () => {
    const caseStudies = [
        {
            title: 'Archetto Towns',
            link: '/portfolio/archetto-towns',
            copy:
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
            externalLink: 'https://sales.archettotowns.com/',
            externalPrettyLink: 'sales.archettotowns.com',
            tags: ['React', 'Redux', 'JavaScript', 'WordPress', 'REST API'],
            image: '/portfolio/img/archetto.png'
        },
        {
            title: 'Annie Burgess',
            link: '/portfolio/annie-burgess',
            copy:
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
            externalLink: 'http://annieburgessart.com/',
            externalPrettyLink: 'annieburgessart.com',
            tags: ['JavaScript', 'WordPress', 'Barba'],
            image: '/portfolio/img/annie-burgess.png'
        },
        {
            title: 'Marlin Spring',
            link: '/portfolio/marlin-spring',
            copy:
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
            externalLink: 'https://marlinspring.com/',
            externaPrettylLink: 'marlinspring.com',
            tags: ['WordPress', 'JavaScript', 'jQuery'],
            image: '/portfolio/img/marlin-spring.png'
        },
        {
            title: 'Polo Travel',
            link: '/portfolio/polo-travel',
            copy:
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
            externalLink: 'https://polotravelltd.com/',
            externalPrettyLink: 'polotravelltd.com',
            tags: ['WordPress', 'JavaScript', 'jQuery'],
            image: '/portfolio/img/polo-travel.png'
        },
        {
            title: 'Wolfecorp',
            link: '/portfolio/wolfecorp',
            copy:
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
            externalLink: 'https://wolfecorp.com/',
            externalPrettyLink: 'wolfecorp.com',
            tags: ['WordPress', 'JavaScript', 'jQuery'],
            image: '/portfolio/img/wolfecorp.png'
        }
        // {
        //     title: 'Political Campaign',
        //     link: '/portfolio/political-campaign',
        //     copy:
        //         'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        //     externalLink: 'https://google.com/',
        //     externalPrettyLink: 'google.com',
        //     tags: ['WordPress', 'JavaScript', 'jQuery'],
        //     image: '/portfolio/img/political-campaign.png'
        // }
    ];

    const [index, setIndex] = useState(null);
    const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });
    const [isActive, setIsActive] = useState(false);

    const getCardPosition = e => {
        let currentCard = document.getElementById(e.target.id);
        let currentCardContainer = currentCard.parentElement;
        let currentCardPosition = currentCardContainer.getBoundingClientRect();
        setCardPosition({ x: currentCardPosition.x, y: currentCardPosition.y });
    };

    const getFullCardPosition = () => {
        let currentCardContainer = document.querySelector('.WorkCard.active');
        let currentCardPosition = currentCardContainer.getBoundingClientRect();
        setCardPosition({ x: currentCardPosition.x, y: currentCardPosition.y });
    };

    const openCaseStudy = i => {
        if (index !== i) {
            // so evidently promise chains don't happen in a way that guarantees a repaint between them
            // i also can't figure out how to chain requestAnimationFrame functions yet
            // so there you go, a setTimeout hack, it seems to work I guess, not pretty though
            setIndex(i);
            setTimeout(() => {
                setCardPosition({ x: 0, y: 0 });
                setIsActive(true);
            }, 16);
        }
    };

    const closeCaseStudy = i => {
        if (index !== i) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            // setTimeout(() => {
            //     getFullCardPosition();
            //     setIsActive(false);
            //     setTimeout(() => {
            //         setIndex(null);
            //     }, 250);
            // }, 1000);
        }
    };

    const caseStudyPages = caseStudies.map((caseStudyPage, i) => {
        return (
            <Route path={caseStudyPage.link} key={i}>
                <CaseStudy
                    title={caseStudyPage.title}
                    copy={caseStudyPage.copy}
                    externalLink={caseStudyPage.externalLink}
                    externalPrettyLink={caseStudyPage.externalPrettyLink}
                    image={caseStudyPage.image}
                    closeCaseStudy={closeCaseStudy}
                    getFullCardPosition={getFullCardPosition}
                    setIsActive={setIsActive}
                    setIndex={setIndex}
                />
            </Route>
        );
    });

    return (
        <BrowserRouter>
            <MainContent
                closeCaseStudy={closeCaseStudy}
                setCardPosition={setCardPosition}
                index={index}
                setIndex={setIndex}
                setIsActive={setIsActive}
                cardPosition={cardPosition}
                getCardPosition={getCardPosition}
                openCaseStudy={openCaseStudy}
                isActive={isActive}
            ></MainContent>
            <Switch>{caseStudyPages}</Switch>
        </BrowserRouter>
    );
};

export default Router;
