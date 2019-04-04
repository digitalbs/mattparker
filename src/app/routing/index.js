import home from './home';
import projects from './projects';
import about from './about';
import contact from './contact';
import admin from './admin';

const routes = [
    home,
    projects,
    about,
    contact,
    admin
];

export default function routing($stateProvider) {
    routes.forEach(routeConfig => {
        const configs = Object.keys(routeConfig);

        configs.forEach((configKey) => {
            if (typeof configKey === 'string') {
                $stateProvider.state(configKey, routeConfig[configKey]);
            }
        });
    });
}

routing.$inject = ['$stateProvider'];
