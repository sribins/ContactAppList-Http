 var app = angular.module("myContactApp",[]);

app.controller("myContactController", ["$scope","$http","contactFactory",function($scope,$http,contactFactory){
/*	var contact1 = {
		name : "Srikanth",
		email : "srikanth@",
		mobile : "8985045561"
	} 
	var contact2 = {
		name : "bin",
		email : "bin@",
		mobile : "9985045561"
	}
	var contact3 = {
		name : "raj",
		email : "raj@",
		mobile : "857495561"
	}

	var contactList = [contact1,contact2,contact3]
	$scope.contactList = contactList; 
}])*/
fetchContact();
/*$scope.createContact = function(){
	$http.post("/createContact",$scope.contact)
		.then(function(response){
			console.log(response.data)
			$scope.contact = {};
			//refresh()
		})
	}*/

	 function fetchContact(){
		contactFactory.fetchContact()
			.then(function(response){
				console.log(response)
				$scope.contactList = response.data
			})
	}

	$scope.createContact = function(){
	
		contactFactory.addContact($scope.contact)
			.then(function(response){
				console.log(response)
				$scope.contact = {};
				fetchContact()
			})
	}
     

	$scope.updateContact = function(){
	
		contactFactory.updateContactinfo($scope.contact._id,$scope.contact)
			.then(function(response){
				console.log(response)
				$scope.contact = {};
				fetchContact()
			})
	}

	$scope.editContact = function(id){
		contactFactory.editContactinfo(id)
			.then(function(response){
				console.log(response)
				$scope.contact = response.data;
				fetchContact()
			})
	}

	

	$scope.deleteContact = function(id){
		contactFactory.deleteContactinfo(id)
			.then(function(response){
				console.log(response)
				$scope.contact = response.data;
				fetchContact()
			})
	}
	/*$scope.editContact = function(id){
		$http.get("/getContactById/" +id)
		.then(function(response){
			$scope.contact = response.data
		})
	}
	$scope.updateContact = function(){
		$http.put("/updateContact/" +$scope.contact._id ,$scope.contact)
		.then(function(response){
	 		//refresh()
		})

	}

	$scope.deleteContact = function(id){
		$http.delete("/deleteContact/" +id)
		.then(function(response){
			//refresh()
		})
	}
*/




}])