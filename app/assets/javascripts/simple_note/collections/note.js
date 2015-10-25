var s;

s = this.SimpleNote;

s.Collections.NoteCollection = Backbone.Collection.extend({
  model: s.Models.Note,
  url: '/notes'
});
