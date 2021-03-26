class CreateBeans < ActiveRecord::Migration[5.1]
  def change
    create_table :beans do |t|
      t.string :name
      t.string :tasting_notes
      t.integer :score
      t.integer :roast_level_id

      t.timestamps
    end
  end
end
