var app = angular.module("app", []);

        app.controller("controlador", function ($scope, $http) {

             $scope.registros = [];

            var carregarDados = function(){
            	 $http.get("https://api.myjson.com/bins/1ensyd").then(function(response) {
				    $scope.registros = response.data;
				  });
            };

            $scope.categorias = [
	            {categoria: "Ovh"},
	            {categoria: "Comercial"},
	            {categoria: "Antigo"},
	            {categoria: "Automaçao"},
	            {categoria: "Tutoriais"},
	            {categoria: "Dicas"},
	            {categoria: "Envios"},
	            {categoria: "Landing Pages"},
	            {categoria: "UTM"},
	            {categoria: "Lead Tracking"},
	            {categoria: "Teste"},
	            {categoria: "PRO"},
	            {categoria: "Erro"},
	            {categoria: "Importaçao"},
	            {categoria: "Cancelamento"},
	            {categoria: "Telefone"},
	            {categoria: "Foto"},
	            {categoria: "URL"},
	            {categoria: "Dominio"},
	            {categoria: "Integracao"},
	            {categoria: "Lista"},
	            {categoria: "SPAM"},
	            {categoria: "GTM"},
	            {categoria: "Configuraçoes"},
	            {categoria: "SMS"},
	            {categoria: "Relatorio"},
	            {categoria: "Contatos"},
	            {categoria: "Usuario"},
	            {categoria: "Campos"},
	            {categoria: "Facebook"},
	            {categoria: "API"},
            ];
            						
            $scope.novoCad = {};

            $scope.addCad = function(){
            	var cad = angular.copy($scope.novoCad);
            	$scope.registros.push(cad);
            	var todo = angular.copy($scope.registros);
            	$http.put("https://api.myjson.com/bins/1ensyd", todo).then(function(response){
            		console.log(response);		            		
            	});
       	
            	$scope.novoCad = {};
            }
			
            carregarDados();

             $scope.remover = function(titulo){
             	angular.forEach($scope.registros, function(registro, i){
             		if(registro.titulo == titulo){
             			$scope.registros.splice(i,1);
             		}
             	});

             	var todo = angular.copy($scope.registros);
             	$http.put("https://api.myjson.com/bins/1ensyd", todo).then(function(response){
            		console.log(response);           		
            	});

            }

        });
