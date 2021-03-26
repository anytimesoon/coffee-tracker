class AddNotesToBeans < ActiveRecord::Migration[5.1]
  def change
  	add_column :beans, :notes, :text
  end
end
