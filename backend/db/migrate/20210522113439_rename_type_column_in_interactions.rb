class RenameTypeColumnInInteractions < ActiveRecord::Migration[6.1]
  def change
    rename_column :interactions, :type, :kind
  end
end
