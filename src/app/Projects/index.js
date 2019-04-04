import projectsMain from './main';
import projectsLanding from './landing';
import projectsDetails from './details';

angular.module('mparker_design.projects', [])
    .component('projectsMain', projectsMain)
    .component('projectsLanding', projectsLanding)
    .component('projectsDetails', projectsDetails);
