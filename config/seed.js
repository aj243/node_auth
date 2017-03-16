var seeder = require('mongoose-seed');

seeder.connect('mongodb://localhost/user_auth_database', function(){//database connection

	seeder.loadModels([
		'./models/product'
	]);

	seeder.clearModels(['Product'], function() {
 
		// Callback to populate DB once collections have been cleared 
		seeder.populateModels(data);

	});

});

var data = [
	{
		"model" : "Product",
		"documents" : [
			{
				"title" : "The Lightning Thief",
				"author" : "Rick Riordan",
				"details" : "Percy Jackson and the Olympians",
				"language" : "English",
				"category" : "fantasy",
				"summary" : "Its is a story about a Thief......",
				"price" : 12.50,
				"pages" : 384
			},
			{
				"title" : "The Sea of Monsters",
				"author" : "Rick Riordan",
				"details" : "Percy Jackson and the Olympians",
				"language" : "English",
				"category" : "fantasy",
				"summary" : "Its is a story about of a sea......",
				"price" : 6.49,
				"pages" : 304
			},
			{
				"title" : "Sophie's World : The Greek Philosophers",
				"author" : "Jostein Gaarder",
				"details" : "About Greek culture",
				"language" : "English",
				"category" : "fantasy",
				"summary" : "based on the true incedents ...",
				"price" : 3.07,
				"pages" : 64
			},
			{
				"title" : "Lucene in Action, Second Edition",
				"author" : "Michael McCandless",
				"details" : "Thesis on force of action",
				"language" : "English",
				"category" : "IT",
				"summary" : "the modern version of theory ...",
				"price" : 30.50,
				"pages" : 475
			}
		]
	}
];
