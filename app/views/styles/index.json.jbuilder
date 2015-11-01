json.array!(@styles) do |style|
  json.extract! style, :id, :title, :category, :body
  json.url style_url(style, format: :json)
end
