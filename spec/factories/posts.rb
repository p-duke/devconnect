FactoryGirl.define do
  factory :post do
    user_id User.all.sample.id
    title Faker::Hacker.say_something_smart
    content Faker::Hacker.say_something_smart
    postable_id Topic.all.sample.id
    postable_type "Topic"
  end

end