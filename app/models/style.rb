class Style < ActiveRecord::Base
  before_save :update_body

  private

  def update_body
    self.body = raw_body
  end
end
