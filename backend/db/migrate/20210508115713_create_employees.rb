class CreateEmployees < ActiveRecord::Migration[6.1]
  def change
    create_table :employees do |t|
      t.string :name
      t.datetime :lastInteraction
      t.datetime :hireDate

      t.timestamps
    end
  end
end
