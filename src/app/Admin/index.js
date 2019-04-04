import adminMain from './main';
import adminLogin from './login';
import testimonials from './testimonials';
import projects from './projects';

angular.module('mparker_design.admin', [])
    .component('adminMain', adminMain)
    .component('adminLogin', adminLogin)
    .component('testimonials', testimonials)
    .component('projects', projects);
