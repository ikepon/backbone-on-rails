class CreateStyles < ActiveRecord::Migration
  def change
    create_table :styles do |t|
      t.string :title, null: false
      t.string :category, null: false
      t.text :style, null: false

      t.timestamps null: false
    end
  end
end
