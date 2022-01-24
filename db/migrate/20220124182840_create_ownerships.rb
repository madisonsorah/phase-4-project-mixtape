class CreateOwnerships < ActiveRecord::Migration[6.1]
  def change
    create_table :ownerships do |t|
      t.integer :member_id
      t.integer :playlist_id
      t.integer :member_profile_id

      t.timestamps
    end
  end
end
