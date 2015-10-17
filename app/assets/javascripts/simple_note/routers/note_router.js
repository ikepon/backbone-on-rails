var s;

s = this.SimpleNote;

if (s.Routers == null) {
  s.Routers = {};
}

s.Routers.NoteRouter = Backbone.Router.extend({
  routes: {
    "notes/new": "newNote",
    "notes/:id": "showNote",
    "notes": "indexNotes",
    ".*": "indexNotes"
  },

  initialize: function(options) {
    this.layout = new s.Views.LayoutView({
      el: $("body")
    });
    return this.notes = new s.Collections.NoteCollection();
  },

  indexNotes: function() {
    var indexView;
    indexView = new s.Views.Notes.IndexView({
      collection: this.notes
    });
    this.layout.setView(indexView);
    return this.notes.fetch({
      reset: true
    });
  },

  newNote: function() {
    this.note = new s.Models.Note();
    this.__renderNoteView();
    return this.listenTo(this.note, 'sync', (function(_this) {
      return function(note) {
        _this.navigate("notes", true);
        return _this.stopListening(note);
      };
    })(this));
  },

  showNote: function(id) {
    this.note = this.notes.get(id);
    if (this.note) {
      return this.__renderNoteView();
    } else {
      this.note = new s.Models.Note({
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
    noteView = new s.Views.Notes.NoteView({
      model: this.note
    });
    this.layout.setView(noteView);
    return this.listenTo(this.layout.currentView, 'clickSubmit', (function(_this) {
      return function() {
        return _this.note.save();
      };
    })(this));
  }
});
