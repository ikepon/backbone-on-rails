StyleSample.Routers.Style = Backbone.Router.extend
  routes:
    "styles/:id": "showStyle"
    "styles": "indexStyles"

  indexStyles: ->
    @styles ||= new StyleSample.Collections.Styles()
    @currentView = new StyleSample.Views.Styles.IndexView(collection: @styles)
    @styles.fetch(reset: true)
