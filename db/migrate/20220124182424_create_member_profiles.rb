class CreateMemberProfiles < ActiveRecord::Migration[6.1]
  def change
    create_table :member_profiles do |t|
      t.string :bio
      t.string :avatar_url

      t.timestamps
    end
  end
end
