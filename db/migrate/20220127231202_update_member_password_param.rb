class UpdateMemberPasswordParam < ActiveRecord::Migration[6.1]
  def change
    rename_column :members, :password, :password_digest
  end
end
