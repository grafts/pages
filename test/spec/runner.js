define([
	// All your tests go here.
	'spec/test',
	'spec/controller',
	'spec/parse'
	// 'spec/parse_for_dummyData'
], function () {
	'use strict';

	window.console = window.console || function() {};
	window.notrack = true;
	window.mocha.run();
});