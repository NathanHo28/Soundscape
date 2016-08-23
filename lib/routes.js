FlowRouter.route('/', {
	name: 'home',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('HomeLayout')
	}
});

FlowRouter.route('/playlists', {
	name: 'playlists',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Playlists'});
	}
});

// FlowRouter.route('/songs', {
// 	name: 'songs',
// 	action() {
// 		GAnalytics.pageview();
// 		BlazeLayout.render('MainLayout', {main: 'Songs'});
// 	}
// });
