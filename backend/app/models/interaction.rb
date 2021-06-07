class Interaction < ApplicationRecord
  belongs_to :employee
  default_scope { order('created_at DESC') }

  validates_presence_of :kind, message: "The kind of interaction cannot be blank"
  validates_presence_of :notes, message: "Each interaction needs to have notes documenting what was discussed"
  
end
