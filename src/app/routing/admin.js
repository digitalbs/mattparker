/**
 * Route config for Admin
 */

const ROUTES = {
    'adminLogin': {
        url: '/admin-login',
        views: {
            'perspective': {
                template: '<admin-login></admin-login>'
            }
        }
    },
    'admin': {
        url: '/admin',
        views: {
            'perspective': {
                template: '<admin-main></admin-main>'
            }
        },
        data: {
            requiresLogin: true
        }
    },
    'admin.testimonials': {
        url: '/testimonials',
        views: {
            'admin': {
                template: '<testimonials></testimonials>'
            }
        },
        data: {
            requiresLogin: true
        }
    },
    'admin.projects': {
        url: '/projects',
        views: {
            'admin': {
                template: '<projects></projects>'
            }
        },
        data: {
            requiresLogin: true
        }
    }
};

export default ROUTES;
