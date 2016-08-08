(function(){


	var buttonWithoutWebworker = document.getElementById('withoutwebworker'),
		buttonWithWebworker	= document.getElementById('withwebworker'),
		worker = new Worker('webworker.js');

	buttonWithoutWebworker.addEventListener('click', calculateWithoutWebworker);
	buttonWithWebworker.addEventListener('click', calculateWithWebworker);

	worker.addEventListener('message', function(event) {
		done(event.data);
	});

	function calculateWithoutWebworker () {
		var j = 0;

		for (var i = 0; i < 1000000000; i++) {
			j = j + i;
		};

		done(j);
	};

	function calculateWithWebworker () {
		worker.postMessage('calculate');
	};

	function done (amount) {
		alert('calculation done, result: ' + amount);
	};


})();
