angular.module('myApp')
    .controller('WeatherController', WeatherController);

function WeatherController($http) {
    var vm = this;
    vm.APIKey = 'a604dac39694bb758668989e417c4580';
    vm.location;
    vm.currentLocation;
    vm.locationsHistory = [{
            name: 'Tijuana',
            date: 'date',
            time: 'time:00'
        },
        {
            name: 'Tijuana',
            date: 'date',
            time: 'time:00'
        },
        {
            name: 'Tijuana',
            date: 'date',
            time: 'time:00'
        },
        {
            name: 'Tijuana',
            date: 'date',
            time: 'time:00'
        },
        {
            name: 'Tijuana',
            date: 'date',
            time: 'time:00'
        }
    ];

    vm.APICall = function APICall(city) {
        $http({
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city +
                '&appid=' + vm.APIKey
        }).then(function successCallback(response) {
            vm.currentLocation = response.data;
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
