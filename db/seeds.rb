# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Deleting previous data"
Member.destroy_all
Playlist.destroy_all
puts "🌱 Seeding data..."

# Sample members
madison = Member.create!(
  {
    first_name: "Madison",
    last_name: "Sorah",
    username: "mochipancake",
    email: "madisonsorah@gmail.com",
    password: "catsarecute1",
    bio: "Hi there! I am a cat lover, anime watcher and front-end developer living in Brooklyn, NY. My favorite music genres are dance, disco and pop.",
    avatar_url: "XX"
  })

lyrik = Member.create!(
  {
    first_name: "Lyrik",
    last_name: "Houston",
    username: "Straigus",
    email: "kirylmitch@gmail.com",
    password: "Straigus1",
    bio: "XX",
    avatar_url: "XX"
  })

# Sample created/received playlists
Playlist.create!(
  {
    title: "Cloud Puff",
    cover_url: "https://www.antonball.dev/static/7c1f1aa09bb3d5adbbcb5c77cf4c352b/c85cb/rectangle.webp",
    playlist_url: "XX",
    description: "Looking for a playlist with soft, dreamy vibes.",
    requester_id: madison.id,
    creator_id: lyrik.id
  })

Playlist.create!(
  {
    title: "Otakus Only",
    cover_url: "https://www.antonball.dev/static/7c1f1aa09bb3d5adbbcb5c77cf4c352b/c85cb/rectangle.webp",
    playlist_url: "XX",
    description: "I'd love a mix with anime intro songs.",
    requester_id: lyrik.id,
    creator_id: madison.id
  })

# Sample playlist requests
Playlist.create!(
  {
    description: "I'd love a video game-themed mix.",
    requester_id: lyrik.id,
  })

Playlist.create!(
  {
    description: "Looking for an energetic, female vocalist playlist.",
    requester_id: madison.id,
  })

puts "Seeding Done!"
