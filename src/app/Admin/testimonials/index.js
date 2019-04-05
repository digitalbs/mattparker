import template from './index.html';

class TestimonialsCtrl {
    constructor($scope, $resource, $mdDialog, $state) {
        $resource = $resource;
        $scope.editedTestimonial = null;
        $scope.state = $state;

        //fling toolbar
        $scope.testimonialResource = $resource('http://127.0.0.1:3000/api/testimonials/:id', {id:'@id'}, {
            update: {
                method: 'PUT'
            }
        });
        $scope.testimonials = $scope.testimonialResource.query();

        $scope.editTestimonial = function (testimonial, ev) {
            $scope.editedTestimonial = angular.copy(testimonial);

            $mdDialog.show({
                contentElement: '#editTestimonial',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        };

        $scope.createTestimonial = function (ev) {
            $mdDialog.show({
                contentElement: '#addTestimonial',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        };

        $scope.submitTestimonial = function () {
            $scope.testimonialResource.save($scope.newTestimonial).$promise.then(function (res) {
                $state.reload();
            });
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.updateEditedTestimonial = function () {
            $scope.testimonialResource.update({id: $scope.editedTestimonial._id}, {
                'author': $scope.editedTestimonial.author,
                'description': $scope.editedTestimonial.description
            }).$promise.then(function(res) {
                $state.reload();
            });
        };
    }
}

export default {
    templateUrl: template,
    controller: TestimonialsCtrl
};

TestimonialsCtrl.$inject = ['$scope', '$resource', '$mdDialog', '$state'];
