/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var VideoView = Backbone.View.extend({
        template: JST['app/scripts/templates/video.hbs']
    });

    return VideoView;
});
