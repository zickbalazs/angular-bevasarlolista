let app = angular.module('app', []);


app.controller('lista', function ($scope){
    $scope.statics = {
        title: 'Bevasarlólista Alkalmazás',
        madeby:'Zick Balázs',
        year: 2022
    }
    $scope.categories = [ "Pékárú", "Élelmiszerek", "Takarítási szerek", "Egyéb" ]
    $scope.tableHeaders = [ "#.", "Termék neve", "Mennyiség", "Ár", "" ]
    $scope.addItem = {};
    $scope.cart = [];
    $scope.total = 0;
    $scope.cart = angular.fromJson(window.localStorage.getItem('bevasarlolist'));
    console.log($scope.cart)
    $scope.add = function(){
        if ($scope.cart == null) $scope.cart=[];
        _newitem = new Termek({
            name: $scope._add.name,
            unit: $scope._add.unit.toString(),
            price: $scope._add.price.toString().split(' ')[0],
            category: $scope._add.category,
            amount: $scope._add.amount
        }, $scope.cart.length)
        $scope.cart.push(_newitem);
        window.localStorage.setItem('bevasarlolist', angular.toJson($scope.cart))
        console.log($scope.cart);
    };
    $scope.remove = function(what){
        $scope.cart.splice($scope.cart.findIndex(item=>item.id==what), 1);
        window.localStorage.setItem('bevasarlolist', angular.toJson($scope.cart))
    };
    $scope.count = function(){
        let total = 0;
        for (let i = 0; i < $scope.cart.length; i++) {
            total += $scope.cart[i].fullprice;
        }
        return total;
    }
});
