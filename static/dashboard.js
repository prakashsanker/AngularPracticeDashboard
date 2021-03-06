(function() {
	var app = angular.module('dashboard', []);
	app.config(function($interpolateProvider) {
    	$interpolateProvider.startSymbol('[{');
    	$interpolateProvider.endSymbol('}]');
	});
	var currentJob = null;

	app.directive('contactInfo', function() {
		return {
			restrict: 'E',
			templateUrl: 'contact-info.html'
		};
	});

	app.directive('requesterInfo', function() {
		return {
			restrict: 'E',
			templateUrl: 'requester-info.html'
		};
	});

	app.directive('jobsList', function() {
		return {
			restrict: 'E',
			templateUrl: 'jobs.html'
		};
	});

	app.directive('reviewsForm', function(){
		return {
			restrict: 'E',
			templateUrl: 'notes.html'
		};
	});

	app.controller("JobsController", ['$scope', '$http', function($scope, $http) {
		$http.get("http://localhost:8200/requesters")
			.success(function(data, status, headers, config){
				
			})
			.error(function(err, status, headers, config) {
        		console.log("Well, this is embarassing.");
    		});
		this.currentJob = null;
		this.jobs = jobs;
		this.setCurrentJob = function(index) {
			this.currentJob = index;
			currentJob = index;
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

	app.controller("NotesController", function() {
		this.noteContent = '';
		this.addNote = function(job) {
			var currentDate = new Date().getTime();
			var note = {"date": currentDate, "content": this.noteContent};
			job.notes.push(note);
			this.noteContent = '';
		};
	});


	var jobs = [
		{
			'id': 1,
			'requester': 'Prakash Sanker',
			'description': 'I want you to give me the entire world. Jk. The new Lebron10s will do',
			'phoneNumber': '18008080',
			'jobStatus': 'new',
			'notes': [{"date": "06/15/15" , "content": "We haven't started looking at this case yet"}],
			'contacts': {'company': 'Nike', 'companyPhone': '(415) 544-9918', 'representativeName': 'Mr. Jacob Mueller', 'repPhoneNumber': '(415) 5509-432', 'repEmail': 'jmueller@nike.com', 'helpfulInfo': 'Contact between 7pm and 10pm on Thursdays - he will pick up more often'}
		},
		{
			'id': 2,
			'requester': 'MJ Watson',
			'description': 'Please tell me who Spiderman is!',
			'phoneNumber': '650848405',
			'jobStatus': 'new',
			'notes': [{"date": "06/15/15",  "content": "We haven't started this case yet - not as important as the others"}],
			'contacts': {'company': 'Marvel', 'companyPhone': '(852) 123-4568', 'representativeName': 'Peter Parker', 'repPhoneNumber': '(514) 445-8199', 'repEmail': 'pparker@marvel.com', 'helpfulInfo': "It's better to contact him on this number - (650)804-5509" }
		},
		{	'id': 3,
			'requester': 'Josh Lyman',
			'description': 'Matthew Santos as president...or Jed Bartlet..but please not anyone Republican',
			'phoneNumber': '1234456',
			'jobStatus': 'progress',
			'notes': [],
			'contacts' : []
		}, 
		{
			'id': 4,
			'requester': 'Barry Allen',
			'description': 'A frictionless suit that wont burst into flames when I run at a zillion miles an hour...its for a friend',
			'phoneNumber': '6508045509',
			'jobStatus': 'progress',
			'notes': [],
			'contacts': []
		},
		{
			'id': 5,
			'requester': 'A. Bambaata',
			'description': 'Boombox, prime condition, from the 80s. Go back in time if you have to',
			'phoneNumber': '6508045509',
			'jobStatus': 'resolved',
			'contacts': {'company': 'Zulu Nation', 'companyPhone': '(714) 898-113', 'representativeName': 'G. Flash', 'repPhoneNumber': '(526) 7719-521', 'repEmail': 'gflash@zulunation.com', 'helpfulInfo': 'Call in the morning'},
			'notes': [{"date": "04/02/15", "content": "Started the case, made contact with representative"}, {"date": "04/03/15", "content": "Contact responded - will take two weeks for boombox to come back"}, {"date": "05/03/15", "content": "Update from contact - delivery time down to 4 days"}, {"date": "09/03/15", "content": "Delivered to client"}]
		}
	];

})();