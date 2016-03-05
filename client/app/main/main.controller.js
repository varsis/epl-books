'use strict';

(function() {

    class MainController {

        constructor($scope,uiGmapGoogleMapApi) {
            this.uiGmapGoogleMapApi = uiGmapGoogleMapApi;
            this.$scope = $scope;

            $scope.map = { center: { latitude: 53.5333, longitude: -113.5000 }, zoom: 12 };

            uiGmapGoogleMapApi.then(function(maps) {
            });

        }


    }

    MainController.$inject = ['$scope','uiGmapGoogleMapApi'];

    angular.module('eplBooksApp')
        .controller('MainController', MainController);

})();
