import template from './index.html';

class MainCtrl {
    constructor($scope, $resource) {
        this.$scope = $scope;
        this.$resource = $resource;

        let testimonialResource = $resource('http://localhost:3000/api/testimonials');
        this.$scope.testimonials = testimonialResource.query();

    }
}

export default {
    templateUrl: template,
    controller: MainCtrl
};

MainCtrl.$inject = ['$scope', '$resource'];
