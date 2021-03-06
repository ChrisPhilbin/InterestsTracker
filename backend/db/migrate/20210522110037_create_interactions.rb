class CreateInteractions < ActiveRecord::Migration[6.1]
  def change
    create_table :interactions do |t|
      t.string :type
      t.text :notes
      t.references :employee, null: false, foreign_key: true

      t.timestamps
    end
  end
end
