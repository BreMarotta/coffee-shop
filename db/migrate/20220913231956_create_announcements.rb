class CreateAnnouncements < ActiveRecord::Migration[7.0]
  def change
    create_table :announcements do |t|
      t.string :title
      t.string :msg
      t.string :img
      t.boolean :active

      t.timestamps
    end
  end
end
