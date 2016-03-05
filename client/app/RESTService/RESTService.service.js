'use strict';
(function() {

    var edmontonApiHeaders = {'X-App-Token': 'kdWvbN0GpawjtgtILoblWw3gG' };

    class RESTService {
        
        constructor($http) {
            this.$http = $http;
        }

        getLibraries() {
            return this.$http({
                method: 'GET',
                url: 'https://data.edmonton.ca/resource/jn25-zspi.json',
                headers: edmontonApiHeaders
            });
        }


    }

    RESTService.$inject = ['$http'];
    

    angular.module('eplBooksApp')
        .service('RESTService', RESTService);
})();
