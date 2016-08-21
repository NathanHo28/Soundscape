Meteor.publish('playlist', function() {
	return Playlists.find({ author: this.userId});
});