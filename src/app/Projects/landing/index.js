import template from './index.html';

class MainCtrl {
    constructor($scope, $resource) {
        this.$scope = $scope;

        $scope.projectResource = $resource('http://localhost:3000/api/project/:id', {id:'@id'}, {
            update: {
                method: 'PUT'
            }
        });

        $scope.projects = $scope.projectResource.query();
    }
}

export default {
    templateUrl: template,
    controller: MainCtrl
};

MainCtrl.$inject = ['$scope', '$resource'];
