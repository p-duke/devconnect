module UsersHelper
  def self.guest_user
    guest = User.find(2)
  end
end
