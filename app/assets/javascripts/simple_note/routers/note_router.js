var s;

s = this.SimpleNote;

s.NoteRouter = Backbone.Router.extend({
  routes: {
    "notes/new": "newNote",
    "notes/:id": "showNote",
    "notes": "indexNotes",
    ".*": "indexNotes"
  },

  initialize: function(options) {
    return this.notes = new s.NoteCollection();
  },

  indexNotes: function() {
    if (this.currentView) {
      this.currentView.remove();
    }

    this.currentView = new s.Notes.IndexView({
      collection: this.notes
    });

    return this.notes.fetch({
      reset: true
    });
  },

  newNote: function() {
    if (this.currentView) {
      this.currentView.remove();
    }

    this.note = new s.Note();

    this.__renderNoteView();

    return this.listenTo(this.note, 'sync', (function(_this) {
      return function() {
        return _this.navigate("notes", true);
      };
    })(this));
  },

  showNote: function(id) {
    if (this.currentView) {
      this.currentView.remove();
    }

    this.note = this.notes.get(id);

    if (this.note) {
      return this.__renderNoteView();
    } else {
      this.note = new s.Note({
        id: id
      });
      return this.note.fetch({
        success: (function(_this) {
          return function() {
            return _this.__renderNoteView();
          };
        })(this)
      });
    }
  },

  __renderNoteView: function() {
    this.currentView = new s.Notes.NoteView({
      model: this.note
    });

    this.listenTo(this.currentView, 'clickSubmit', (function(_this) {
      return function() {
        return _this.note.save();
      };
    })(this));

    return this.currentView.render();
  }
});
