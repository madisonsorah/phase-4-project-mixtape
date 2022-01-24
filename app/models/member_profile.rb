class MemberProfile < ApplicationRecord
    has_many :ownerships
    has_many :members, through :ownerships
end
