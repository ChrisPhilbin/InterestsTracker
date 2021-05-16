class AddBirthdayColumnToEmployees < ActiveRecord::Migration[6.1]
  def change
    add_column :employees, :birthday, :date
  end
end
