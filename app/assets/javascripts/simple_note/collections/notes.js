var s;

s = this.SimpleNote;

s.NoteCollection = Backbone.Collection.extend({
  model: s.Note,
  url: '/notes'
});
