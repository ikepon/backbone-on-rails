class RenameStyleColumnToBody < ActiveRecord::Migration
  def change
    rename_column :styles, :style, :body
  end
end
