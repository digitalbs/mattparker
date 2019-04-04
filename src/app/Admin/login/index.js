import template from './index.html';

class AdminLoginCtrl {
    constructor($scope, $resource, $state) {
        this.authenticate = $resource('http://localhost:3000/api/users/authenticate');

        this.$scope = $scope;
        this.$resource = $resource;
        this.$scope.adminAuthorize = () => {
            this.authenticate.save({
                username: this.$scope.loginForm.username,
                password: this.$scope.loginForm.password
            }).$promise.then((res) => {
                localStorage.setItem('mparker_id_token', res.id_token);

                $state.go('admin');
            }).catch((err) => {
                this.$scope.loginForm.error = err;

                this.$scope.adminLoginForm.$setValidity('serverError', false);
            });
        };
    }
}

export default {
    templateUrl: template,
    controller: AdminLoginCtrl
};

AdminLoginCtrl.$inject = ['$scope', '$resource', '$state'];
