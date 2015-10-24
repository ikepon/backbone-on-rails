var s;

s = this.SimpleNote;

s.LayoutView = Backbone.View.extend({
  viewContainer: "#main",
  currentView: null,
  setView: function(view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;
    return this.$(this.viewContainer).html(view.render().el);
  }
});
