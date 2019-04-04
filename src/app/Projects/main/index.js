import template from './index.html';

class MainCtrl {
    constructor($scope) {

    }
}

export default {
    templateUrl: template,
    controller: MainCtrl
};

MainCtrl.$inject = ['$scope'];
