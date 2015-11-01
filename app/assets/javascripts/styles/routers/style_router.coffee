StyleSample.Routers.Style = Backbone.Router.extend
  routes:
    "styles/new": "newStyle"
    "styles/:id": "showStyle"
    "styles": "indexStyles"

  indexStyles: ->
    @currentView.remove() if @currentView

    @styles ||= new StyleSample.Collections.Styles()
    @currentView = new StyleSample.Views.Styles.IndexView(collection: @styles)
    @styles.fetch(reset: true)

  newStyle: ->
    @currentView.remove() if @currentView

    @style = new StyleSample.Models.Style()
    @currentView = new StyleSample.Views.Styles.StyleView(model: @style)
    @listenTo @currentView, "clickSubmit", =>
      @style.save()
    @currentView.render()

  showStyle: (id) ->
    @currentView.remove() if @currentView

    @style = @styles.get(id)
    @currentView = new StyleSample.Views.Styles.StyleView(model: @style)
    @listenTo @currentView, "clickSubmit", =>
      @style.save()
    @currentView.render()
