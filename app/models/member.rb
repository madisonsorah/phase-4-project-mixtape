class Member < ApplicationRecord
    has_many :ownerships
    has_many :member_profiles, through: :ownerships
    has_many :playlists, through: :ownerships
end
