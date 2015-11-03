StyleSample.Views.Styles ?= {}

StyleSample.Views.Styles.StyleView = Backbone.View.extend
  className: "new-style"

  template: JST["styles/style"]

  events:
    "click .submit-style-form": "submit"
    "click .back": "navigateToStyleIndex"

  bindings:
    ".radio-category": "category"
    "#input-style-title": "title"
    "#input-style": "raw_body"


  render: ->
    context = @model.toJSON()
    # TODO とりあえず動いた。あとでこの方法は見直す
    selections = ['button', 'header', 'paragraph', 'input']
    _.extend(context, selections: selections)
    @$el.html(@template(context))
    $("#styles-main").html(@el)
    preview = new StyleSample.Views.Styles.PreviewView(model: @model, el: @$(".preview-col"))
    preview.render()
    @stickit()
    this

  submit: (e) ->
    e.preventDefault()
    @trigger("clickSubmit")

  navigateToStyleIndex: (e) ->
    e.preventDefault()
    Backbone.history.navigate("styles", true)
