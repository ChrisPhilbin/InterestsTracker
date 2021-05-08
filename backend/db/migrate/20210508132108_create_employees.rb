class CreateEmployees < ActiveRecord::Migration[6.1]
  def change
    create_table :employees do |t|
      t.string :name
      t.datetime :hire_date
      t.datetime :last_interaction

      t.timestamps
    end
  end
end
