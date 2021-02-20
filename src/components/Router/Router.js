import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainContent from '../MainContent/MainContent';
import CaseStudy from '../CaseStudy/CaseStudy';

const Router = () => {
    const caseStudies = [
        {
            title: 'About Me',
            link: '/portfolio/about-me',
            scrollDownColor: '#333',
            copy: {
                __html:
                    "<h2>Hi! I’m a web developer and designer.</h2><p>I like to make things on the internet that are pretty and easy to use. I strongly dislike things that are pretty at the expense of being easy to use. But sometimes that's what people want, and I'm also a pathological people pleaser.</p><p>I like to use cool new technology, but I'm agnostic about which ones for the most part. I hold a seemingly controversial belief that a stable, well written plugin that saves time and makes projects more maintainable is a good thing.</p><h2>Get in touch:</h2><p>If you'd like to get in touch to build something cool or just to argue about which text editor is best, please get in touch at <a href='mailto:matthew.adshead@gmail.com'>matthew.adshead@gmail.com</a> or via <a href='https://www.linkedin.com/in/matthew-adshead-072a3596/' target='_blank'>LinkedIn</a>.</p>"
            },
            image: '/portfolio/img/matthew-adshead.jpg'
        },
        {
            title: 'Archetto Towns',
            link: '/portfolio/archetto-towns',
            scrollDownColor: '#333',
            copy: {
                __html:
                    '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>'
            },
            externalLink: 'https://sales.archettotowns.com/',
            externalPrettyLink: 'sales.archettotowns.com',
            tags: ['React', 'Redux', 'JavaScript', 'WordPress', 'REST API'],
            image: '/portfolio/img/archetto.jpg'
        },
        {
            title: 'Annie Burgess',
            link: '/portfolio/annie-burgess',
            scrollDownColor: '#333',
            copy: {
                __html:
                    '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>'
            },
            externalLink: 'http://annieburgessart.com/',
            externalPrettyLink: 'annieburgessart.com',
            tags: ['JavaScript', 'WordPress', 'Barba'],
            image: '/portfolio/img/annie-burgess.jpg'
        },
        {
            title: 'Marlin Spring',
            link: '/portfolio/marlin-spring',
            scrollDownColor: 'white',
            copy: {
                __html:
                    '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>'
            },
            externalLink: 'https://marlinspring.com/',
            externalPrettyLink: 'marlinspring.com',
            tags: ['WordPress', 'JavaScript', 'jQuery'],
            image: '/portfolio/img/marlin-spring.jpg'
        },
        {
            title: 'Polo Travel',
            link: '/portfolio/polo-travel',
            scrollDownColor: '#333',
            copy: {
                __html:
                    '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>'
            },
            externalLink: 'https://polotravelltd.com/',
            externalPrettyLink: 'polotravelltd.com',
            tags: ['WordPress', 'JavaScript', 'jQuery'],
            image: '/portfolio/img/polo-travel.jpg'
        },
        {
            title: 'Wolfecorp',
            link: '/portfolio/wolfecorp',
            scrollDownColor: 'white',
            copy: {
                __html:
                    '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>'
            },
            externalLink: 'https://wolfecorp.com/',
            externalPrettyLink: 'wolfecorp.com',
            tags: ['WordPress', 'JavaScript', 'jQuery'],
            image: '/portfolio/img/wolfecorp.jpg'
        }
        // {
        //     title: 'Political Campaign',
        //     link: '/portfolio/political-campaign',
        // scrollDownColor: 'white',
        // copy: {
        //     __html:
        //         '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>'
        // },
        //     externalLink: 'https://google.com/',
        //     externalPrettyLink: 'google.com',
        //     tags: ['WordPress', 'JavaScript', 'jQuery'],
        //     image: '/portfolio/img/political-campaign.png'
        // }
    ];

    const [index, setIndex] = useState(null);
    const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });
    const [isActive, setIsActive] = useState(false);
    const [transition, setTransition] = useState(false);

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
            setTransition(true);
            setIndex(i);
            setTimeout(() => {
                setCardPosition({ x: 0, y: 0 });
                setIsActive(true);
            }, 16);
        }
    };

    const startOpen = i => {
        setIndex(i);
        setCardPosition({ x: 0, y: 0 });
        setIsActive(true);
    };

    const closeCaseStudy = i => {
        if (index !== i) {
            setTransition(true);
            window.scrollTo(window.scrollX, window.scrollY + 1);
            // Gross
            setTimeout(() => {
                window.scrollTo(window.scrollX, window.scrollY - 1);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 1);
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
                    startOpen={startOpen}
                    id={i}
                    scrollDownColor={caseStudyPage.scrollDownColor}
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
                transition={transition}
            ></MainContent>
            <Switch>{caseStudyPages}</Switch>
        </BrowserRouter>
    );
};

export default Router;
