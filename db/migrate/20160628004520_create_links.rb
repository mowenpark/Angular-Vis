class CreateLinks < ActiveRecord::Migration
  def change
    create_table :links do |t|
      t.integer :source
      t.integer :target
      t.float :value

      t.timestamps null: false
    end
  end
end
