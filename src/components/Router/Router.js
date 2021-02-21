import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainContent from '../MainContent/MainContent';
import CaseStudy from '../CaseStudy/CaseStudy';

const Router = () => {
    const caseStudies = [
        {
            title: 'About Me',
            mockup: '',
            link: '/portfolio/about-me',
            scrollDownColor: '#333',
            copy: {
                __html:
                    "<h2>Hi! I’m a web developer and designer.</h2><p>I like to make things on the internet that are pretty and easy to use. I strongly dislike things that are pretty at the expense of being easy to use. But sometimes that's what people want, and I'm also a pathological people pleaser.</p><p>I like to use cool new technologies, but I'm agnostic about which ones for the most part. I hold a seemingly controversial belief that a stable, well written plugin that saves time and makes projects more maintainable is a good thing.</p><h2>Get in touch:</h2><p>If you'd like to get in touch to build something cool or just to argue about which text editor is best, please get in touch via <a href='mailto:matthew.adshead@gmail.com'>email</a> or <a href='https://www.linkedin.com/in/matthew-adshead-072a3596/' target='_blank'>LinkedIn</a>.</p>"
            },
            tags: [],
            images: ['/portfolio/img/matthew-adshead.jpg']
        },
        {
            title: 'Archetto Towns',
            mockup: '/portfolio/img/archetto-towns-ipad.jpg',
            link: '/portfolio/archetto-towns',
            scrollDownColor: '#333',
            copy: {
                __html:
                    '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>'
            },
            externalLink: 'https://sales.archettotowns.com/',
            externalPrettyLink: 'sales.archettotowns.com',
            tags: ['React', 'Redux', 'JavaScript', 'WordPress', 'REST API'],
            images: [
                '/portfolio/img/archetto-towns-home.jpg',
                '/portfolio/img/archetto-towns-area.jpg',
                '/portfolio/img/archetto-towns-site-plan.jpg',
                // '/portfolio/img/archetto-towns-site-plan-open.jpg',
                // '/portfolio/img/archetto-towns-floorplans-select-product.jpg',
                '/portfolio/img/archetto-towns-floorplan-list.jpg',
                '/portfolio/img/archetto-towns-floorplan-grid.jpg',
                '/portfolio/img/archetto-towns-floorplan.jpg',
                // '/portfolio/img/archetto-towns-floorplan-zoom.jpg',
                // '/portfolio/img/archetto-towns-email.jpg',
                '/portfolio/img/archetto-towns-compare-list.jpg',
                // '/portfolio/img/archetto-towns-compare.jpg',
                // '/portfolio/img/archetto-towns-features.jpg',
                // '/portfolio/img/archetto-towns-gallery-video.jpg',
                '/portfolio/img/archetto-towns-gallery-renderings.jpg',
                // '/portfolio/img/archetto-towns-gallery-area.jpg',
                // '/portfolio/img/archetto-towns-about.jpg',
                '/portfolio/img/archetto-towns-contact.jpg'
            ]
        },
        {
            title: 'Annie Burgess',
            mockup: '/portfolio/img/annie-burgess-ipad.jpg',
            link: '/portfolio/annie-burgess',
            scrollDownColor: '#333',
            copy: {
                __html:
                    '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>'
            },
            externalLink: 'http://annieburgessart.com/',
            externalPrettyLink: 'annieburgessart.com',
            tags: ['JavaScript', 'jQuery', 'PHP', 'WordPress', 'Barba'],
            images: [
                '/portfolio/img/annie-burgess-gallery.jpg',
                '/portfolio/img/annie-burgess-content.jpg'
            ]
        },
        {
            title: 'Marlin Spring',
            mockup: '/portfolio/img/marlin-spring-ipad.jpg',
            link: '/portfolio/marlin-spring',
            scrollDownColor: 'white',
            copy: {
                __html:
                    '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>'
            },
            externalLink: 'https://marlinspring.com/',
            externalPrettyLink: 'marlinspring.com',
            tags: ['WordPress', 'JavaScript', 'jQuery', 'PHP'],
            images: [
                '/portfolio/img/marlin-spring-home.jpg',
                '/portfolio/img/marlin-spring-our-story.jpg',
                '/portfolio/img/marlin-spring-development.jpg',
                '/portfolio/img/marlin-spring-foundation.jpg',
                '/portfolio/img/marlin-spring-contact.jpg'
            ]
        },
        {
            title: 'Polo Travel',
            mockup: '/portfolio/img/polo-travel-ipad.jpg',
            link: '/portfolio/polo-travel',
            scrollDownColor: '#333',
            copy: {
                __html:
                    '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>'
            },
            externalLink: 'https://polotravelltd.com/',
            externalPrettyLink: 'polotravelltd.com',
            tags: ['WordPress', 'JavaScript', 'jQuery', 'PHP'],
            images: [
                '/portfolio/img/polo-travel-home.jpg',
                '/portfolio/img/polo-travel-plan-your-trip.jpg',
                '/portfolio/img/polo-travel-travel-styles.jpg',
                '/portfolio/img/polo-travel-country.jpg',
                '/portfolio/img/polo-travel-contact.jpg'
            ]
        },
        {
            title: 'Wolfecorp',
            mockup: '/portfolio/img/wolfecorp-ipad.jpg',
            link: '/portfolio/wolfecorp',
            scrollDownColor: 'white',
            copy: {
                __html:
                    '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>'
            },
            externalLink: 'https://wolfecorp.com/',
            externalPrettyLink: 'wolfecorp.com',
            tags: ['WordPress', 'JavaScript', 'jQuery', 'PHP'],
            images: [
                '/portfolio/img/wolfecorp-home.jpg',
                '/portfolio/img/wolfecorp-properties.jpg',
                '/portfolio/img/wolfecorp-property.jpg',
                '/portfolio/img/wolfecorp-about-us.jpg',
                '/portfolio/img/wolfecorp-blog.jpg',
                '/portfolio/img/wolfecorp-contact.jpg'
            ]
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
        //     tags: ['WordPress', 'JavaScript', 'jQuery', 'PHP],
        // images: ['/portfolio/img/matthew-adshead.jpg']
        // }
    ];

    const [index, setIndex] = useState(null);
    const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });
    const [isActive, setIsActive] = useState(false);
    const [transition, setTransition] = useState(false);
    const [zIndex, setZIndex] = useState(false);
    const [cardParallax, setCardParallax] = useState(null);
    const [startOnCaseStudy, setStartOnCaseStudy] = useState(true);

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
            setStartOnCaseStudy(false);
            setTransition(true);
            setZIndex(true);
            setIndex(i);
            setTimeout(() => {
                setCardPosition({ x: 0, y: 0 });
                setIsActive(true);
            }, 16);
        }
    };

    const startOpen = i => {
        if (startOnCaseStudy) {
            setIndex(i);
            setCardPosition({ x: 0, y: 0 });
            setIsActive(true);
            setZIndex(true);
        }
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
                    setZIndex={setZIndex}
                    setCardParallax={setCardParallax}
                    cardParallax={cardParallax}
                    tags={caseStudyPage.tags}
                    images={caseStudyPage.images}
                    mockup={caseStudyPage.mockup}
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
                zIndex={zIndex}
                cardParallax={cardParallax}
            ></MainContent>
            <Switch>{caseStudyPages}</Switch>
        </BrowserRouter>
    );
};

export default Router;
