class Member < ApplicationRecord
    has_many :created_playlists, class_name: :Playlist, foreign_key: :creator_id
    has_many :requested_playlists, class_name: :Playlist, foreign_key: :requester_id

    has_secure_password
end
