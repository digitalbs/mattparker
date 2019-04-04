import template from './index.html';

class MainCtrl {
    constructor($scope, $resource) {
        this.$scope = $scope;
        this.$resource = $resource;

        let instagramFeed = $resource('https://api.instagram.com/v1/users/self/media/recent?access_token=2158452436.a0bb6d5.3d447a232a4a414388741974d71f9827');

        this.$scope.feedList = instagramFeed.get();
    }
}

export default {
    templateUrl: template,
    controller: MainCtrl
};

MainCtrl.$inject = ['$scope', '$resource'];
