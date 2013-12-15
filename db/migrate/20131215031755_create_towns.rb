class CreateTowns < ActiveRecord::Migration
  def up
    create_table :towns do |t|
     t.text :name
     t.text :state
     t.text :town_mascot
     t.timestamps :timestamps
    end
  end

  def down
    drop_table towns
  end
end
