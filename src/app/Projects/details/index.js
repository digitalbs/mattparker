import template from './index.html';

class DetailsCtrl {
    constructor($scope, $resource, $stateParams) {
        this.$scope = $scope;

        $scope.projectResource = $resource('http://127.0.0.1:3000/api/project/:id', {id:'@id'}, {
            update: {
                method: 'PUT'
            }
        });

        $scope.project = $scope.projectResource.get({id: $stateParams.id});

        $scope.project.$promise.then((project) => {
            $scope.currentImage = project.gallery.images[0].url;
        });

        $scope.activeImage = function() {
            $scope.currentImage = this.image.url;
        };

        $scope.isActiveImage = function () {
            return $scope.currentImage === this.image.url;
        };
    }
}

export default {
    templateUrl: template,
    controller: DetailsCtrl
};

DetailsCtrl.$inject = ['$scope', '$resource', '$stateParams'];
