class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :story_id, null: false
      t.integer :liker_id, null: false
      t.timestamps
    end
      add_index :likes, :liker_id
      add_index :likes, :story_id
  end
end
