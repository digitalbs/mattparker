import template from './index.html';

class MainCtrl {
    constructor($rootScope, $scope, $resource, $state) {
        this.$scope = $scope;
        this.$resource = $resource;

        $scope.currentNavItem= 'Projects';
        $state.go('admin.projects');

        this.$scope.signout = function () {
            $rootScope.isAuthenticated = false;
            localStorage.removeItem('mparker_id_token');
            $state.reload();
        };
    }
}

export default {
    templateUrl: template,
    controller: MainCtrl,
    data: {
        requiresLogin: true
    }
};

MainCtrl.$inject = ['$rootScope', '$scope', '$resource', '$state'];
