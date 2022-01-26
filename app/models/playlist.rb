class Playlist < ApplicationRecord
    belongs_to :creator, class_name: :Member, foreign_key: :creator_id
    belongs_to :requester, class_name: :Member, foreign_key: :requester_id
end
