var s;

s = this.SimpleNote;

s.NoteRouter = Backbone.Router.extend({
  routes: {
    "notes/new": "newNote",
    "notes/:id": "showNote",
    "notes": "indexNotes",
    ".*": "indexNotes"
  },

  indexNotes: function() {
    this.notes || (this.notes = new s.NoteCollection());

    if (this.currentView) {
      this.currentView.remove();
    }

    this.currentView = new s.Notes.IndexView({
      collection: this.notes
    });

    this.notes.fetch({
      reset: true
    });
  },

  newNote: function() {
    this.note = new s.Note();

    if (this.currentView) {
      this.currentView.remove();
    }

    this.currentView = new s.Notes.NewView({
      model: this.note
    });

    return this.currentView.render();
  }
});
