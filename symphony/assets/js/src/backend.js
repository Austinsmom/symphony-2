/**
 * Symphony backend initialisation
 *
 * @package assets
 */

(function($) {

	// Set environment
	var environment = JSON.parse(document.getElementById('environment').textContent);
	Symphony.Context.add(null, environment);

	// Get translations
	Symphony.Language.add({
		'Are you sure you want to proceed?': false,
		'Reordering was unsuccessful.': false,
		'Change Password': false,
		'Remove File': false,
		'Untitled Field': false,
		'The field “{$title}” ({$type}) has been removed.': false,
		'Undo?': false,
		'untitled': false,
		'Expand all fields': false,
		'Collapse all fields': false,
		'drag to reorder': false,
		'Please reset your password': false,
		'required': false
	});

	// Initialise backend
	$(document).ready(function() {

		// Cache main elements
		Symphony.Elements.window = $(window);
		Symphony.Elements.html = $('html').addClass('js-active');
		Symphony.Elements.body = $('body');
		Symphony.Elements.wrapper = $('#wrapper');
		Symphony.Elements.header = $('#header');
		Symphony.Elements.nav = $('#nav');
		Symphony.Elements.session = $('#session');
		Symphony.Elements.context = $('#context');
		Symphony.Elements.breadcrumbs = $('#breadcrumbs');
		Symphony.Elements.contents = $('#contents');

		// Create context id
		var contextId = (Symphony.Context.get('path') + Symphony.Context.get('route')).split('/').filter(function(part) {
			return (part != 'edit' && part != 'new' && part != 'created' && part != 'saved' && part != '');
		}).join('.');
		Symphony.Context.add('context-id', contextId);

		// Render view
		Symphony.View.render();
	});

})(window.jQuery);