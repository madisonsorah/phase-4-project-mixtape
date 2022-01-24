class CreatePlaylists < ActiveRecord::Migration[6.1]
  def change
    create_table :playlists do |t|
      t.string :title
      t.string :cover_url
      t.string :playlist_url
      t.string :description

      t.timestamps
    end
  end
end
