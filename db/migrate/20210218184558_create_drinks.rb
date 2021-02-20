class CreateDrinks < ActiveRecord::Migration[6.1]
  def change
    create_table :drinks do |t|
      t.string :roast
      t.string :milk
      t.string :sweetener
      t.string :espresso
      t.belongs_to :coffee

      t.timestamps
    end
  end
end
