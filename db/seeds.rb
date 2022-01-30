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
    avatar_url: "https://www.dropbox.com/s/7qu52q69z50yh1b/Screen%20Shot%202021-09-27%20at%203.11.26%20PM.jpg?dl=0"
  })

lyrik = Member.create!(
  {
    first_name: "Lyrik",
    last_name: "Houston",
    username: "Straigus",
    email: "kirylmitch@gmail.com",
    password: "Straigus1",
    bio: "I'm a gamer with a wide-ranging library for music.",
    avatar_url: "https://www.dropbox.com/s/b9041qbd4rec9g8/steamuserimages-a.akamaihd.jpg?dl=0"
  })

# Sample created/received playlists
Playlist.create!(
  {
    title: "Cloud Puff",
    cover_url: "XX",
    playlist_url: "XX",
    description: "Looking for a playlist with soft, dreamy vibes.",
    requester_id: madison.id,
    creator_id: lyrik.id
  })

  Playlist.create!(
    {
      title: "Disco Ball",
      cover_url: "XX",
      playlist_url: "XX",
      description: "Looking for an 80s-inspired disco playlist.",
      requester_id: madison.id,
      creator_id: lyrik.id
    })

  Playlist.create!(
    {
      title: "Otakus Only",
      cover_url: "XX",
      playlist_url: "XX",
      description: "I'd love a mix with anime intro songs.",
      requester_id: lyrik.id,
      creator_id: madison.id
    })

  Playlist.create!(
    {
      title: "Zen Ambience",
      cover_url: "XX",
      playlist_url: "XX",
      description: "I'd love a chill playlist to work to.",
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
    description: "Looking for an upbeat, female vocalist playlist.",
    requester_id: madison.id,
  })

puts "Seeding Done!"
