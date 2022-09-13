class CreateFoods < ActiveRecord::Migration[7.0]
  def change
    create_table :foods do |t|
      t.string :name
      t.string :description
      t.string :img
      t.string :notes
      t.boolean :active

      t.timestamps
    end
  end
end
