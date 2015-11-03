StyleSample.Models.Style = Backbone.Model.extend
  urlRoot: '/styles'

  previewText: (length = 140) ->
    @get("raw_body")?.substring(0, length)

  renderBody: ->
    $.ajax("/styles/rendering",
      type: "GET"
      dataType: "json"
      data: {raw_body: @get("raw_body")}
    ).done (data) =>
      @set("body", data.body)
      @trigger("renderBody", data)
