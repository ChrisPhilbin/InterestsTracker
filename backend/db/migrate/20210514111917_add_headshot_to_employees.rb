class AddHeadshotToEmployees < ActiveRecord::Migration[6.1]
  def change
    add_column :employees, :headshot, :string
  end
end
