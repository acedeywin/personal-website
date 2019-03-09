'use strict';

eventsApp.controller('maincontroller', 
    function maincontroller($scope){

        $scope.event = {
            fullname: 'Okpalaononuju Stephen Ifeamarame',
            subname: 'Nigerian | Software Developer | True Africa Believer',
            logoImgUrl: '/img/web-logo.png',
            nigerianFlag: '/img/naija.gif',
            rastaFlag: '/img/rasta.png',
        }
        $scope.date = new Date();
    }    
);


