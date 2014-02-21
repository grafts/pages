define([
	// All your tests go here.
	'spec/test',
	'spec/controller',
	'spec/parse'
], function () {
	'use strict';

	window.console = window.console || function() {};
	window.notrack = true;
	window.mocha.run();
});