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
  },

  renderBody: function() {
    return $.ajax("/notes/rendering", {
      type: "GET",
      dataType: "json",
      data: {
        raw_body: this.get("raw_body")
      }
    }).done((function(_this) {
      return function(data) {
        _this.set("body", data);
        return _this.trigger("renderBody", data);
      };
    })(this));
  }
});
