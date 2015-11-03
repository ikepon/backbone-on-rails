StyleSample.Models.Style = Backbone.Model.extend
  urlRoot: '/styles'

  previewStyle: (length = 140) ->
    @get("raw_body").substring(0, length)

  renderBody: ->
    $.ajax("/styles/rendering",
      type: "GET"
      dataType: "json"
      data: {raw_body: @get("raw_body")}
    ).done (data) =>
      @set("body", data)
      @trigger("renderBody", data)
