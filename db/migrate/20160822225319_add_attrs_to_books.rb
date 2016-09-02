class AddAttrsToBooks < ActiveRecord::Migration[5.0]
  def change
    add_column :books, :title, :string
    add_column :books, :author, :string
    add_column :books, :description, :text
    add_column :books, :isbn, :integer
  end
end
