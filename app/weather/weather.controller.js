angular.module('myApp')
    .controller('WeatherController', WeatherController);

function WeatherController($http) {
    var vm = this;
    vm.APIKey = 'a604dac39694bb758668989e417c4580';
    vm.location;
    vm.cityInput;
    vm.currentLocation;
    vm.locationsHistory = [];

    vm.APICall = function APICall(city) {
        $http({
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/weather?q='
            + city
            + '&units=imperial&appid='
            + vm.APIKey
        }).then(function successCallback(response) {
            vm.currentLocation = response.data;
            vm.locationsHistory.unshift(vm.currentLocation);
            console.log(vm.currentLocation);
        }, function errorCallback(response) {
            console.log("Something was wrong");
        });
    }

    vm.setSanDiegoWeather = function() {
        vm.APICall('SanDiego');
    }
    vm.setNewYorkWeather = function() {
        vm.APICall('NewYork');
    }
    vm.setWashingtonDCWeather = function() {
        vm.APICall('WashingtonDC');
    }
    vm.setLondonWeather = function() {
        vm.APICall('London');
    }
    vm.setTokyoWeather = function() {
        vm.APICall('Tokyo');
    }

    vm.searchCity = function() {
        vm.APICall(vm.cityInput);
        vm.cityInput = '';
    }
}


//
// $http({
//     method: 'GET',
//     url: 'http://www.omdbapi.com/?s=harry%20potter'
// }).then(function successCallback(response) {
//     console.log(response.data);
// }, function errorCallback(response) {
//     console.log("Something was wrong");
// });
