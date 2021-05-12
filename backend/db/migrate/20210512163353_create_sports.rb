class CreateSports < ActiveRecord::Migration[6.1]
  def change
    create_table :sports do |t|
      t.string :teamname
      t.string :city
      t.references :employee, null: false, foreign_key: true
      t.timestamps
    end
  end
end
