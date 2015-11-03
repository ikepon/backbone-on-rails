StyleSample.Routers.Style = Backbone.Router.extend
  routes:
    "styles/new": "newStyle"
    "styles/:id": "showStyle"
    "styles": "indexStyles"

  initialize: (options) ->
    @styles = new StyleSample.Collections.Styles()

  indexStyles: ->
    @currentView.remove() if @currentView

    @currentView = new StyleSample.Views.Styles.IndexView(collection: @styles)
    @styles.fetch(reset: true)

  newStyle: ->
    @currentView.remove() if @currentView

    @style = new StyleSample.Models.Style()
    @__renderStyleView()
    @listenTo @style, "sync", =>
      @navigate("styles", true)

  showStyle: (id) ->
    @currentView.remove() if @currentView

    @style = @styles.get(id)
    if @style
      @__renderStyleView()
    else
      @style = new StyleSample.Models.Style(id: id)
      @style.fetch
        success: => @__renderStyleView()

  __renderStyleView: ->
    @currentView = new StyleSample.Views.Styles.StyleView(model: @style)
    @listenTo @currentView, "clickSubmit", =>
      @style.save()
    @currentView.render()
