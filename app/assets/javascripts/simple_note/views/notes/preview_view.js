var base, s;

s = this.SimpleNote;

if ((base = s.Views).Notes == null) {
  base.Notes = {};
}

s.Views.Notes.PreviewView = Backbone.View.extend({
  template: JST['notes/preview'],
  bindings: {
    '#note-title': 'title'
  },

  initialize: function() {
    return this.listenTo(this.model, 'change:body', _.bind(this._updatePreview, this));
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this._updatePreview();
    return this.stickit();
  },

  _updatePreview: function() {
    this.$('#note-body').html(this.model.get("body"));
    return this.$("code").each(function(i, e) {
      return hljs.highlightBlock(e);
    });
  }
});
