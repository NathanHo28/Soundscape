Playlists = new Mongo.Collection('playlist');

Playlists.allow({
	insert: function(userId, doc) {
		return !!userId;
	}
});

Song = new SimpleSchema({
	title: {
		type: String
	},
	artist: {
		type: String
	},
	album: {
		type: String,
		optional: true
	}
});

PlaylistSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	desc: {
		type: String,
		label: 'Description'
	},
	songs: {
		type: [Song]
	},
	inQueue: {
		type: Boolean,
		defaultValue: false,
		optional: true,
		autoform: {
			type: "hidden"
		}
	},
	author: {
		type: String,
		label: "Author",
		autoValue: function() {
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
			return new Date()
		},
		autoform: {
			type: "hidden"
		}
	}
});

Playlists.attachSchema(PlaylistSchema);