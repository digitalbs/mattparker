import angular from 'angular';
import './app/app';

angular.element(document).ready(() => {
    angular.bootstrap(document, ['mparker_design'], {
        strictDi: true
    });
});
