const caseStudies = [
    {
        title: 'About Me',
        mockup: '',
        link: '/about-me',
        scrollDownColor: '#333',
        copy: {
            __html:
                "<h2>Hi! I’m a web developer and designer.</h2><p>I like to make things on the internet that are pretty and easy to use. I strongly dislike things that are pretty at the expense of being easy to use. But sometimes that's what people want, and I'm also a pathological people pleaser.</p><p>I like to use cool new technologies, but I'm agnostic about which ones for the most part. I hold a seemingly controversial belief that a stable, well written plugin that saves time and makes projects more maintainable is a good thing.</p><h2>Get in touch:</h2><p>If you'd like to get in touch to build something cool or just to argue about which text editor is best, please get in touch via <a href='mailto:matthew.adshead@gmail.com'>email</a> or <a href='https://www.linkedin.com/in/matthew-adshead-072a3596/' target='_blank'>LinkedIn</a>.</p>"
        },
        tags: [],
        images: ['/img/matthew-adshead.jpg'],
        backgroundColor: '#fff',
        logo: 'about-me.svg'
    },
    {
        title: 'Archetto Towns',
        mockup: '/img/archetto-towns-ipad.jpg',
        link: '/archetto-towns',
        scrollDownColor: '#333',
        copy: {
            __html:
                '<p>Archetto Towns is a community of townhomes in Woodbridge, Ontario. Developed by frequent 52 Pick-up collaborators Marlin Spring, the project required a web app that would serve double duty as a touchscreen installation in the Archetto sales centre.</p><p>The application required some complex data management concerning the floorplans and site plan, and the dev team at 52 chose to build a React app to handle those issues. The client also needed to be able to edit the entire site through a dashboard, including hiding/showing available units on the site plan and floorplan lists. Since the client was already familiar with the WordPress dashboard, we decided to leverage the WordPress REST API to build out our back end.</p><p>To offer the best touchscreen experience, the design for larger viewports is a horizontal scrolling layout. While this posed a great number of technical difficulties in creating the responsive layouts for smaller screens/mobile, the final product is very satisfying to use on all devices.</p><p>As is common on this type of project, there are a large number of high res images that make page speed optimization challenging. But despite this concession, the React ecosystem provides a lightning fast and snappy user experience, particularly when images are cached.</p><p>Overall, this was a challenging but ultimately rewarding build working with a tight deadline.</p>'
        },
        externalLink: 'https://sales.archettotowns.com/',
        externalPrettyLink: 'sales.archettotowns.com',
        tags: ['React', 'Redux', 'JavaScript', 'WordPress', 'REST API'],
        images: [
            '/img/archetto-towns-home.jpg',
            '/img/archetto-towns-area.jpg',
            '/img/archetto-towns-site-plan.jpg',
            '/img/archetto-towns-floorplan-list.jpg',
            '/img/archetto-towns-floorplan-grid.jpg',
            '/img/archetto-towns-floorplan.jpg',
            '/img/archetto-towns-compare-list.jpg',
            '/img/archetto-towns-gallery-renderings.jpg',
            '/img/archetto-towns-contact.jpg'
        ],
        backgroundColor: '#F9FAF1',
        logo: 'archetto.svg'
    },
    {
        title: 'Annie Burgess',
        mockup: '/img/annie-burgess-ipad.jpg',
        link: '/annie-burgess',
        scrollDownColor: '#333',
        copy: {
            __html:
                '<p>Annie Burgess is an artist based in Guelph, Ontario. She came to me looking to create a portfolio that showcases her work and history. I designed a simple layout that puts the focus squarely on the art itself.</p><p>Given the massive number of images being showcased, I separated the pieces by category and lazy loaded the assets to improve page speed. To provide a more satisfying and smoother experience, I leveraged Barba.js to create no refresh page transition animations.</p><p>This was a fun, quick build that I believe showcases the client’s art as it should be seen.</p>'
        },
        externalLink: 'http://annieburgessart.com/',
        externalPrettyLink: 'annieburgessart.com',
        tags: ['JavaScript', 'jQuery', 'PHP', 'WordPress', 'Barba'],
        images: ['/img/annie-burgess-gallery.jpg', '/img/annie-burgess-content.jpg'],
        backgroundColor: '#fff',
        logo: 'annie-burgess.svg'
    },
    {
        title: 'Marlin Spring',
        mockup: '/img/marlin-spring-ipad.jpg',
        link: '/marlin-spring',
        scrollDownColor: 'white',
        copy: {
            __html:
                '<p>Marlin Spring is a real estate developer based out of Toronto, Ontario. This build was done on a very tight schedule and I’m very pleased with the outcome under those circumstances.</p><p>Built in PHP, leveraging WordPress and the Advanced Custom Fields plugin, this project is a beautiful and easy-to-use site that functions well and projects an image of a professional and experienced organization.</p><p>As the umbrella brand for many developments, the site maintains a strong sense of self while leaving plenty of room for the client to explore unique branding opportunities in their developments, all while maintaining a cohesive brand as a whole.</p>'
        },
        externalLink: 'https://marlinspring.com/',
        externalPrettyLink: 'marlinspring.com',
        tags: ['WordPress', 'JavaScript', 'jQuery', 'PHP'],
        images: [
            '/img/marlin-spring-home.jpg',
            '/img/marlin-spring-our-story.jpg',
            '/img/marlin-spring-development.jpg',
            '/img/marlin-spring-foundation.jpg',
            '/img/marlin-spring-contact.jpg'
        ],
        backgroundColor: '#1C2E3B',
        logo: 'marlin-spring.svg'
    },
    {
        title: 'Polo Travel',
        mockup: '/img/polo-travel-ipad.jpg',
        link: '/polo-travel',
        scrollDownColor: '#333',
        copy: {
            __html:
                '<p>Polo Travel is a travel agency in Toronto, Ontario. They were looking to create a site that updated their brand in a fun, engaging way.</p><p>The site has a massive amount of content in many organizational layers. Designing and coding the site architecture was a rewarding challenge. I utilized nested WordPress custom post types in order to navigate through the client’s serviced regions, countries and cities. Of particular note was a multistep form built in a slider, that required some novel code structure to accomplish.</p><p>The client was extremely happy with the final result, and I was happy to create this site for them.</p>'
        },
        externalLink: 'https://polotravelltd.com/',
        externalPrettyLink: 'polotravelltd.com',
        tags: ['WordPress', 'JavaScript', 'jQuery', 'PHP'],
        images: [
            '/img/polo-travel-home.jpg',
            '/img/polo-travel-plan-your-trip.jpg',
            '/img/polo-travel-travel-styles.jpg',
            '/img/polo-travel-country.jpg',
            '/img/polo-travel-contact.jpg'
        ],
        backgroundColor: '#fff',
        logo: 'polo.svg'
    },
    {
        title: 'Wolfecorp',
        mockup: '/img/wolfecorp-ipad.jpg',
        link: '/wolfecorp',
        scrollDownColor: 'white',
        copy: {
            __html:
                '<p>Wolfecorp is a real estate development and management company based in Toronto, Ontario. This site projects an image of a competent, modern and cool company.</p><p>The opening animation on the homepage focuses the user on the Wolfecorp logo, reinforcing the brand of the company from the beginning. Large, beautiful hero images of Wolfecorp properties are the first thing the user sees, again reinforcing the kind of company this is.</p><p>Of note in this build, the image slider on the property pages was an interesting challenge from both a design and code perspective. The client wanted to showcase their properties, but wanted to avoid the use of a standard image slider. I built a free moving slider of images in a seemingly random grid, showcasing their assets while still projecting a cool, modern brand.</p><p>In closing, this project was a thoroughly enjoyable build. A rare adequate timeline allowed me to optimize features like responsive images, lazy loading and some fun parallax scrolling.</p>'
        },
        externalLink: 'https://wolfecorp.com/',
        externalPrettyLink: 'wolfecorp.com',
        tags: ['WordPress', 'JavaScript', 'jQuery', 'PHP'],
        images: [
            '/img/wolfecorp-home.jpg',
            '/img/wolfecorp-properties.jpg',
            '/img/wolfecorp-property.jpg',
            '/img/wolfecorp-about-us.jpg',
            '/img/wolfecorp-blog.jpg',
            '/img/wolfecorp-contact.jpg'
        ],
        backgroundColor: '#9F7750',
        logo: 'wolfecorp.svg'
    }
];

export { caseStudies };
