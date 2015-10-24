var s;

s = SimpleNote;

s.NoteCollection = Backbone.Collection.extend({
  model: s.Note,
  url: '/notes'
});
