class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.text :content
      t.boolean :is_private
      t.references :sender, foreign_key: {to_table: :chat_users}
      t.timestamps
    end
  end
end
