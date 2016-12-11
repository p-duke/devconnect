module UsersHelper
  def self.guest_user
    guest = User.find(18)
  end
end
