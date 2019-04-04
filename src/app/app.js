'use strict';

//Vendors
import vendors from './config/app.vendors';

//mparker_design Modules
import modules from './config/app.modules';

//Configuration
import constants from './config/app.constants';
import langConfig from './config/app.lang';
// import themeConfig from './config/app.theme';

//Routing
import routing from './routing';

const modulesToLoad = modules.concat(vendors);

angular.module('mparker_design', modulesToLoad)
    .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$logProvider', '$locationProvider', 'DEBUG_MODE', 'HTML5_HISTORY', 'jwtOptionsProvider', '$mdThemingProvider', function ($stateProvider, $urlRouterProvider, $httpProvider, $logProvider, $locationProvider, DEBUG_MODE, HTML5_HISTORY, jwtOptionsProvider, $mdThemingProvider) {
        $logProvider.debugEnabled(DEBUG_MODE);
        $locationProvider.html5Mode(true);

        routing($stateProvider);

        jwtOptionsProvider.config({
            unauthenticatedRedirectPath: '/admin-login',
            unauthenticatedRedirector: ['$state', function ($state) {
                $state.go('adminLogin');
            }],
            whiteListedDomains: ['localhost'],
            tokenGetter: function () {
                return localStorage.getItem('mparker_id_token');
            }
        });

        $urlRouterProvider.when('', '/');
        $urlRouterProvider.when('/', ['$state', function ($state) {
            $state.go('app');
        }]);

        $urlRouterProvider.otherwise('/');
        $httpProvider.interceptors.push('jwtInterceptor');

        $mdThemingProvider.definePalette('mattParker', {
            '50': 'c93621',
            '100': 'de4631',
            '200': 'ee513b',
            '300': 'f2604b',
            '400': 'de6351',
            '500': 'f26d5a',
            '600': 'ea7e6f',
            '700': 'de6351',
            '800': 'f26d5a',
            '900': 'ea7e6f',
            'A100': '2693e0',
            'A200': '1981ca',
            'A300': '0b69aa',
            'A400': '2693e0',
            'A700': '1981ca',
            'default': '500',
            'hue-1': '400',
            'hue-2': '600',
            'hue-3': '700',
            'contrastDefaultColor': 'light'
        });

        $mdThemingProvider.theme('default')
            .primaryPalette('mattParker')
            .accentPalette('mattParker');
    }])
    .config(langConfig)
    .constant(constants)
    .run(['authManager', function (authManager) {
        authManager.checkAuthOnRefresh();
        authManager.redirectWhenUnauthenticated();
    }]);
