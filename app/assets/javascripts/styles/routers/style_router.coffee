StyleSample.Routers.Style = Backbone.Router.extend
  routes:
    "styles/new": "newStyle"
    "styles/:id": "showStyle"
    "styles": "indexStyles"

  indexStyles: ->
    @styles ||= new StyleSample.Collections.Styles()
    @currentView.remove() if @currentView
    @currentView = new StyleSample.Views.Styles.IndexView(collection: @styles)
    @styles.fetch(reset: true)

  newStyle: ->
    @style = new StyleSample.Models.Style()
    @currentView.remove() if @currentView
    @currentView = new StyleSample.Views.Styles.NewView(model: @style)
    @listenTo @currentView, "clickSubmit", =>
      @style.save()
    @currentView.render()
