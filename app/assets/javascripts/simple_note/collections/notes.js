var s;

s = this.SimpleNote;

s.NoteCollection = Backbone.Collection.extend({
  url: '/notes'
});
