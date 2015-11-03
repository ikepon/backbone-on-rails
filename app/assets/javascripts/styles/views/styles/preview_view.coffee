StyleSample.Views.Styles ?= {}

StyleSample.Views.Styles.PreviewView = Backbone.View.extend
  template: JST["styles/preview"]

  bindings:
    "#style-title": "title"
    "#style-body":
      observe: "raw_body"
      update: _.debounce(($el, val, model, options) =>
        model.renderBody().done (data) ->
          $el.html(data.body)
      , 400)

  render: ->
    @$el.html(@template(@model.toJSON()))
    @model.trigger("change:raw_body")
    @stickit()
