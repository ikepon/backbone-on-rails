var s;

s = SimpleNote;

s.NoteRouter = Backbone.Router.extend({
  routes: {
    "notes/new": "newNote",
    "notes/:id": "showNote",
    "notes": "indexNotes",
    ".*": "indexNotes"
  },

  initialize: function(options) {
    this.layout = new s.LayoutView({
      el: $("body")
    });

    return this.notes = new s.NoteCollection();
  },

  indexNotes: function() {
    var indexView;

    indexView = new s.Notes.IndexView({
      collection: this.notes
    });

    this.layout.setView(indexView);

    return this.notes.fetch({
      reset: true
    });
  },

  newNote: function() {
    this.note = new s.Note();

    this.__renderNoteView();

    return this.listenTo(this.note, 'sync', (function(_this) {
      return function() {
        return _this.navigate("notes", true);
      };
    })(this));
  },

  showNote: function(id) {
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
    var noteView;

    noteView = new s.Notes.NoteView({
      model: this.note
    });

    this.layout.setView(noteView);

    return this.listenTo(this.currentView, 'clickSubmit', (function(_this) {
      return function() {
        return _this.note.save();
      };
    })(this));
  }
});
