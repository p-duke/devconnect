require 'rails_helper'

RSpec.describe User, type: :model do
  before do
    @user = FactoryGirl.create(:user)
  end

  describe "Creation" do
    it 'can be created' do
      expect(@user).to be_valid
    end

    it "cannot be created without first_name, last_name" do
      @user.first_name = nil
      @user.last_name = nil
      expect(@user).to_not be_valid
    end

    it "cannot be created without cohort location or year" do
      @user.cohort_location = nil
      @user.cohort_year = nil
      expect(@user).to_not be_valid
    end
  end

  describe "custom methods" do
  end

end
