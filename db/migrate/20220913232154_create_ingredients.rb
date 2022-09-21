class CreateIngredients < ActiveRecord::Migration[7.0]
  def change
    create_table :ingredients do |t|
      t.string :name
      t.integer :calorie
      t.string :img
      t.boolean :active
      t.integer :itemable_id
      t.string :itemable_type

      t.timestamps
    end
  end
end