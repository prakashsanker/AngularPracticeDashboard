(function() {
	var app = angular.module('dashboard', []);

	// var filters = angular.module('filters', []).filter('sortJobsByStatus', function() {
	// 	return function(job) {

	// 	}
	// });

	app.config(function($interpolateProvider) {
    	$interpolateProvider.startSymbol('[{');
    	$interpolateProvider.endSymbol('}]');
	});
	app.controller("JobsController", ['$scope', function($scope) {
		this.currentJob = null;
		this.jobs = jobs;
		this.setCurrentJob = function(index) {
			this.currentJob = index; 
		};
		this.getCurrentJob = function() {
			for(var i = 0; i < jobs.length; i++) {
				if (jobs[i].id === this.currentJob) {
					return jobs[i];
				}
			}
		};

		$scope.sortJobsByStatus = function(job) {
			if (job.jobStatus === "new") {
				return 0;
			} else if (job.jobStatus === "progress") {
				return 1;
			} else {
				return 2;
			}
		};
	}]);

	app.controller("ContentController", function() {


	});

	app.controller("NotesController", function() {


	});


	var jobs = [
		{
			'id': 1,
			'requester': 'Prakash Sanker',
			'description': 'I want you to give me the entire world. Jk. The new Lebron10s will do',
			'phoneNumber': '18008080',
			'jobStatus': 'new',
			'notes': "We haven't started looking at this case yet",
			'contacts': {'company': 'Nike', 'companyPhone': '(415) 544-9918', 'representativeName': 'Mr. Jacob Mueller', 'repPhoneNumber': '(415) 5509-432', 'repEmail': 'jmueller@nike.com', 'helpfulInfo': 'Contact between 7pm and 10pm on Thursdays - he will pick up more often'}
		},
		{
			'id': 2,
			'requester': 'MJ Watson',
			'description': 'Please tell me who Spiderman is!',
			'phoneNumber': '650848405',
			'jobStatus': 'new',
			'notes': "We haven't started this case yet - not as important as the others",
			'contacts': {'company': 'Marvel', 'companyPhone': '(852) 123-4568', 'representativeName': 'Peter Parker', 'repPhoneNumber': '(514) 445-8199', 'repEmail': 'pparker@marvel.com', 'helpfulInfo': "It's better to contact him on this number - (650)804-5509" }
		},
		{	'id': 3,
			'requester': 'Josh Lyman',
			'description': 'Matthew Santos as president...or Jed Bartlet..but please not anyone Republican',
			'phoneNumber': '1234456',
			'jobStatus': 'progress',
			'notes': '',
			'contacts' : []
		}, 
		{
			'id': 4,
			'requester': 'Barry Allen',
			'description': 'A frictionless suit that wont burst into flames when I run at a zillion miles an hour...its for a friend',
			'phoneNumber': '6508045509',
			'jobStatus': 'progress',
			'notes': ''
		},
		{
			'id': 5,
			'requester': 'A. Bambaata',
			'description': 'Boombox, prime condition, from the 80s. Go back in time if you have to',
			'phoneNumber': '6508045509',
			'jobStatus': 'resolved',
			'notes': ''
		}
	];

})();