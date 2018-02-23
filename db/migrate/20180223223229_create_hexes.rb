class CreateHexes < ActiveRecord::Migration[5.1]
  def change
    create_table :hexes do |t|
      t.integer :group_id
      t.integer :color_id
      t.string :code
      t.timestamps
    end
  end
end
