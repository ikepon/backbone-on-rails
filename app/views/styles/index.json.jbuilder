json.array!(@styles) do |style|
  json.extract! style, :id, :title, :category, :body, :raw_body
  json.url style_url(style, format: :json)
end
