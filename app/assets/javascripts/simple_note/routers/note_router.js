var s;

s = this.SimpleNote;

s.NoteRouter = Backbone.Router.extend({
  routes: {
    "notes/:id": "showNote",
    "notes": "indexNotes",
    "": "indexNotes"
  },

  indexNotes: function() {
    this.notes || (this.notes = new s.NoteCollection());

    this.currentView = new s.Notes.IndexView({
      collection: this.notes
    });

    this.notes.fetch({
      reset: true
    });
  }
});
