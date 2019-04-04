/**
 * Route config for Projects
 */

const ROUTES = {
    'projects': {
        url: '/projects',
        views: {
            'perspective': {
                template: '<projects-main></projects-main>'
            }
        },
        abstract: true
    },
    'projects.landing': {
        url:'/list',
        views: {
            'projectPerspective': {
                template: '<projects-landing></projects-landing>'
            }
        }
    },
    'projects.details': {
        url: '/details/:id',
        views: {
            'projectPerspective': {
                template: '<projects-details></projects-details>'
            }
        }
    }
};

export default ROUTES;
