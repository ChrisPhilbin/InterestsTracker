class RenameTypeColumnInPets < ActiveRecord::Migration[6.1]
  def change
    rename_column :pets, :type, :kind
  end
end
