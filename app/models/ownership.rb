class Ownership < ApplicationRecord
    belongs_to :member
    belongs_to :playlist
    belongs_to :member_profile
end
