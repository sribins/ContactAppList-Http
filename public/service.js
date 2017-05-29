app.factory("contactFactory", ['$http',function($http){  
    var obj = {};
    
    obj.fetchContact = function(){ 
        return $http.get('/getContacts');
    }


    obj.addContact = function(contact){ 
        return $http.post('/createContact',contact);
    }

    obj.editContactinfo = function(id){ 
        return $http.get('/getContactById/'+id);
    }

 obj.updateContactinfo = function(id,contact){ 
        return $http.put('/updateContact/'+id,contact);
    }

    obj.deleteContactinfo = function(id){ 
        return $http.delete('/deleteContact/'+id);
    }

 return obj;
}]);