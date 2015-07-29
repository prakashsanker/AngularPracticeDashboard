(function() {
	var app = angular.module('dashboard', []);

	app.controller("JobsController", function() {
		this.currentJob = 0;
		this.setCurrentJob = function(index) {
			this.currentJob = index; 
		};		
	});


	var jobs = [
		{
			'id': 1,
			'requester': 'Prakash Sanker',
			'description': 'I want you to give me the entire world'
		},
		{
			'id': 2,
			'requester': 'MJ Watson',
			'description': 'Please give me Spiderman, preferably upside down...but Im not fussy'
		},
		{	'id': 3,
			'requester': 'Josh Lyman',
			'description': 'Matthew Santos as president...or Jed Bartlet..but please not anyone Republican'
		}, 
		{
			'id': 4,
			'requester': 'Barry Allen',
			'description': 'A frictionless suit that wont burst into flames when I run at a zillion miles an hour...its for a friend'
		},
		{
			'id': 5,
			'requeter': 'A. Bambaata',
			'description': 'Boombox, prime condition, from the 80s. Go back in time if you have to'
		}
	];

})();