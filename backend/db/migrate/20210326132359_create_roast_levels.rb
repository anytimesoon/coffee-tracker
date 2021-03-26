class CreateRoastLevels < ActiveRecord::Migration[5.1]
  def change
    create_table :roast_levels do |t|
      t.string :name

      t.timestamps
    end
  end
end
