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
  },
  {
    first_name: "Lyrik",
    last_name: "Houston",
    username: "Straigus",
    email: "kirylmitch@gmail.com",
    password: "Straigus1"
  }
])

# Member Profile
MemberProfile.create!([
  {
    bio: "Hi there! I am a cat lover, anime watcher and front-end developer living in Brooklyn, NY. My favorite music genres are dance, disco and pop."
    avatar_url: "XX"
  },
  {
    bio: "XX"
    avatar_url: "XX"
  }
])

# Ownership
Ownership.create!([
  {
    member_id: 1,
    playlist_id: 1,
    member_profile_id: 1
  },
  {
    member_id: 2,
    playlist_id: 2,
    member_profile_id: 2
  }
])

# Playlist Request
PlaylistRequest.create!([
  {
    description: "Looking for a playlist with soft, dreamy vibes."
    member_id: 1
  },
  {
    bio: "XX"
    member_id: 2
  }
])

# Playlist
Playlist.create!([
  {
    title: "XX",
    cover_url: "XX",
    playlist_url: "XX"
  },
  {
    title: "XX",
    cover_url: "XX",
    playlist_url: "XX"
  }
])