import template from './index.html';

class ProjectsCtrl {
    constructor($scope, $resource, $mdDialog, $state) {
        $scope.state = $state;
        $scope.newProject = {
            name: null,
            description: null,
            gallery: {
                images: []
            }
        };
        this.scope = $scope;

        //fling toolbar
        $scope.selectedMode = 'md-fling';
        $scope.isOpen = false;

        $scope.projectResource = $resource('http://127.0.0.1:3000/api/project/:id', {id:'@id'}, {
            update: {
                method: 'PUT'
            }
        });

        $scope.projects = $scope.projectResource.query();

        $scope.createProject = function (ev) {
            $mdDialog.show({
                contentElement: '#addProject',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        };

        $scope.modifyProject = function (project, ev) {
            $scope.editableProject = angular.copy(project);

            $mdDialog.show({
                contentElement: '#editProject',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        };

        $scope.submitProject = function () {
            $scope.projectResource.save($scope.newProject).$promise.then(function (res, code) {

                $state.reload();
            });
        };

        $scope.updateProject = function () {
            let updatedProject = {
                name: $scope.editableProject.name,
                description: $scope.editableProject.description,
                gallery: $scope.editableProject.gallery
            };

            $scope.projectResource.update({id: $scope.editableProject._id}, updatedProject).$promise.then(function(res) {
                $state.reload();
            });
        };

        $scope.removeProject = function (project) {
            $scope.projectResource.delete({id: project._id}).$promise.then(() => {
                $state.reload();
            });
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        let input = document.querySelector('#galleryImageUploader');
        let input2 = document.querySelector('#galleryImageUploaderEdit');
        input.addEventListener('change', updateImageDisplay);
        input2.addEventListener('change', updateImageDisplay2);

        function updateImageDisplay() {
            let curFiles = input.files;
            if(curFiles.length === 0) {

            } else {
                for(let i = 0; i < curFiles.length; i++) {
                    let image = {};
                    let reader  = new FileReader();

                    if(validFileType(curFiles[i])) {
                        reader.readAsDataURL(curFiles[i]);

                        reader.onload = function() {
                            image.text = `${curFiles[i].name}`;
                            image.title= curFiles[i].name;
                            image.url = reader.result;

                            $scope.newProject.gallery.images.push(image);
                            $scope.$apply();
                        };

                    } else {
                        image.text = 'Invalid file type';

                        $scope.newProject.gallery.images.push(image);
                        $scope.$apply();
                    }
                }
            }

            function validFileType(file) {
                let fileTypes = [
                    'image/jpeg',
                    'image/pjpeg',
                    'image/png'
                ];

                for(var i = 0; i < fileTypes.length; i++) {
                    if(file.type === fileTypes[i]) {
                        return true;
                    }
                }

                return false;
            }

            function returnFileSize(number) {
                if(number < 1024) {
                    return number + 'bytes';
                } else if(number >= 1024 && number < 1048576) {
                    return (number/1024).toFixed(1) + 'KB';
                } else if(number >= 1048576) {
                    return (number/1048576).toFixed(1) + 'MB';
                }
            }
        }

        function updateImageDisplay2() {
            let curFiles = input2.files;
            if(curFiles.length === 0) {

            } else {
                for(let i = 0; i < curFiles.length; i++) {
                    let image = {};
                    let reader  = new FileReader();

                    if(validFileType(curFiles[i])) {
                        reader.readAsDataURL(curFiles[i]);

                        reader.onload = function() {
                            image.text = `${curFiles[i].name}`;
                            image.title= curFiles[i].name;
                            image.url = reader.result;

                            $scope.editableProject.gallery.images.push(image);
                            $scope.$apply();
                        };

                    } else {
                        image.text = 'Invalid file type';

                        $scope.editableProject.gallery.images.push(image);
                        $scope.$apply();
                    }
                }
            }

            function validFileType(file) {
                let fileTypes = [
                    'image/jpeg',
                    'image/pjpeg',
                    'image/png'
                ];

                for(var i = 0; i < fileTypes.length; i++) {
                    if(file.type === fileTypes[i]) {
                        return true;
                    }
                }

                return false;
            }

            function returnFileSize(number) {
                if(number < 1024) {
                    return number + 'bytes';
                } else if(number >= 1024 && number < 1048576) {
                    return (number/1024).toFixed(1) + 'KB';
                } else if(number >= 1048576) {
                    return (number/1048576).toFixed(1) + 'MB';
                }
            }
        }
    }
}

export default {
    templateUrl: template,
    controller: ProjectsCtrl
};

ProjectsCtrl.$inject = ['$scope', '$resource', '$mdDialog', '$state'];
