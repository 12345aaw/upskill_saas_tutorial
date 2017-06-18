class AddToProfiles < ActiveRecord::Migration[5.0]
  def change
    add_column :profiles, :user_id, :integer
    add_column :profiles, :first_name, :string
    add_column :profiles, :last_name, :string
    add_column :profiles, :job_title, :string
    add_column :profiles, :phone_number, :string
    add_column :profiles, :contact_email, :string
    add_column :profiles, :text, :description
  end
end
