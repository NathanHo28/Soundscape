FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('HomeLayout')
	}
});

FlowRouter.route('/playlists', {
	name: 'playlists',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Playlists'});
	}
});