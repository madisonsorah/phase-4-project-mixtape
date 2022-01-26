# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Member
Member.create!([
  {
    first_name: "Madison",
    last_name: "Sorah",
    username: "mochipancake",
    email: "madisonsorah@gmail.com",
    password: "catsarecute1"
    bio: "Hi there! I am a cat lover, anime watcher and front-end developer living in Brooklyn, NY. My favorite music genres are dance, disco and pop."
    avatar_url: "XX"
  },
  {
    first_name: "Lyrik",
    last_name: "Houston",
    username: "Straigus",
    email: "kirylmitch@gmail.com",
    password: "Straigus1"
    bio: "XX"
    avatar_url: "XX"
  }
])

# Playlist
Playlist.create!([
  {
    title: "XX",
    cover_url: "XX",
    playlist_url: "XX",
    description: "Looking for a playlist with soft, dreamy vibes.",
    requester_id: 1,
    creator_id: 2
  },
  {
    title: "XX",
    cover_url: "XX",
    playlist_url: "XX",
    description: "XX",
    requester_id: 2,
    creator_id: 1
  }
])
