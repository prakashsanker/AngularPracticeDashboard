(function() {
	var app = angular.module('dashboard', []);

	app.config(function($interpolateProvider) {
    	$interpolateProvider.startSymbol('[{');
    	$interpolateProvider.endSymbol('}]');
	});
	app.controller("JobsController", function() {
		this.currentJob = 0;
		this.jobs = jobs;
		this.setCurrentJob = function(index) {
			this.currentJob = index; 
		};		
	});


	var jobs = [
		{
			'id': 1,
			'requester': 'Prakash Sanker',
			'description': 'I want you to give me the entire world',
			'phoneNumber': '18008080',
			'jobStatus': 'new'
		},
		{
			'id': 2,
			'requester': 'MJ Watson',
			'description': 'Please give me Spiderman, preferably upside down...but Im not fussy',
			'phoneNumber': '650848405',
			'jobStatus': 'new'
		},
		{	'id': 3,
			'requester': 'Josh Lyman',
			'description': 'Matthew Santos as president...or Jed Bartlet..but please not anyone Republican',
			'phoneNumber': '1234456',
			'jobStatus': 'progress'
		}, 
		{
			'id': 4,
			'requester': 'Barry Allen',
			'description': 'A frictionless suit that wont burst into flames when I run at a zillion miles an hour...its for a friend',
			'phoneNumber': '6508045509',
			'jobStatus': 'progress'
		},
		{
			'id': 5,
			'requester': 'A. Bambaata',
			'description': 'Boombox, prime condition, from the 80s. Go back in time if you have to',
			'phoneNumber': '6508045509',
			'jobStatus': 'resolved'
		}
	];

})();