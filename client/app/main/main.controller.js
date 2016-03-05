'use strict';

(function() {

    class MainController {

        constructor($scope,uiGmapGoogleMapApi, RESTService) {
            this.uiGmapGoogleMapApi = uiGmapGoogleMapApi;
            this.$scope = $scope;
            this.RESTService;

            $scope.map = { center: { latitude: 53.5333, longitude: -113.5000 }, zoom: 12 };
            $scope.libraries = [];

            RESTService.getLibraries().then(function successCallback(response) {
                if(response.status === 200) {
                    console.log(response.data);
                    $scope.libraries = response.data;
                }
            }, function errorCallback(response) {
                console.log(response);
            })

            uiGmapGoogleMapApi.then(function(maps) {
                console.log(maps)
            });

        }


    }

    MainController.$inject = ['$scope','uiGmapGoogleMapApi','RESTService'];

    angular.module('eplBooksApp')
        .controller('MainController', MainController);

})();
