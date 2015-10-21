var s;

s = this.SimpleNote;

s.Note = Backbone.Model.extend({
  urlRoot: '/notes',

  previewText: function(length) {
    var ref;

    if (length == null) {
      length = 140;
    }

    return (ref = this.get("raw_body")) != null ? ref.substring(0, length) : void 0;
  }
});
