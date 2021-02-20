class Drink < ApplicationRecord
    belongs_to :coffee
    validates :roast, :milk, :sweetener, :espresso, presence: true
end
