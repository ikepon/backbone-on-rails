StyleSample.Routers.Style = Backbone.Router.extend
  routes:
    "/styles/:id": "showStyle"
    "/styles": "indexStyles"
    "/": "indexStyles"

  indexStyles: ->
    @styles ||= new StyleSample.Collections.StyleCollection()
    @styles.fetch reset: true
