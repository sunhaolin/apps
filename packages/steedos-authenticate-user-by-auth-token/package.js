Package.describe({
	name: 'steedos:authenticate-user-by-auth-token',
	version: '1.0.0',

	// Brief, one-line summary of the package.
	summary: 'Authenticate user via auth access-token',

	// URL to the Git repository containing the source code for this package.
	git: '',

	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md',
});

Package.onUse(function (api) {

	api.use('coffeescript');

	api.use([
		'accounts-base',
		'simple:json-routes@2.1.0',
	], 'server');

	api.addFiles('auth_by_auth_token.coffee', 'server');
});
