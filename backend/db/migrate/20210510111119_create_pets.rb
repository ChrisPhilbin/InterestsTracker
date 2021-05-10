class CreatePets < ActiveRecord::Migration[6.1]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :type
      t.text :notes
      t.date :birthday
      t.references :employee, null: false, foreign_key: true

      t.timestamps
    end
  end
end
