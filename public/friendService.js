angular.module('userProfiles')
.service('friendService', function( $http ) {
  
    
    this.login = function( user ) {
      /* FIX ME */
			return $http({
				method: 'POST',
				url: 'http://localhost:8000/api/login',
				data: {
					name: user.name, 
					password: user.password
				}
			}).then(function(res){
				return res.data
			})
    };

    this.getFriends = function() {
    	/* FIX ME */
			return $http({
				method: 'GET',
				url: 'http://localhost:8000/api/profiles',
			}).then(function(res){
				return res.data
			})
    };
  
});
