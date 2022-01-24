class CreatePlaylistRequests < ActiveRecord::Migration[6.1]
  def change
    create_table :playlist_requests do |t|
      t.string :description
      t.integer :member_id

      t.timestamps
    end
  end
end
