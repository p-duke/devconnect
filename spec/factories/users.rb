FactoryGirl.define do
  # sequence :email do
  #   "test#{n}@test.com"
  # end

  factory :user do
    first_name 'John'
    last_name 'Doe'
    cohort_id 1
    cohort_name 'Red Pandas'
    cohort_location 'New York'
    cohort_year 2016
    location 'New York'
    status 'Student'
    goals Faker::Hacker.say_something_smart
    email Faker::Internet.email
    is_mentor true
    password 'password'
    password_confirmation 'password'
  end

end