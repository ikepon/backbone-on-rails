class AddRawBodyToStyle < ActiveRecord::Migration
  def change
    add_column :styles, :raw_body, :text
  end
end
