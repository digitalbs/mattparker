import template from './index.html';

class MainCtrl {
    constructor($scope) {
        $scope.captchaKey = '6LeyOpoUAAAAAM5nz8FPqPhtH4i4j-zp-ICABaqI';


    }
}

export default {
    templateUrl: template,
    controller: MainCtrl
};

MainCtrl.$inject = ['$scope'];
