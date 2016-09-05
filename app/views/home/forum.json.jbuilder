json.trendingPost @top_trending do |post|
  json.post post
  json.user post.user
  json.responses post.responses.count
  json.topic post.postable
end
json.recentPost @most_recent do |post|
  json.post post
  json.user post.user
  json.responses post.responses.count
  json.topic post.postable
end
