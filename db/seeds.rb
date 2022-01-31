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
    avatar_url: "https://previews.dropbox.com/p/thumb/ABYApU8ZoVmGrdyuxDxEoMfJGr02oOXx1vCRR9szHP5gnaYnzU045uQaYb-hvZYwujUGyVDl2c7PiCZwWINR2NRNgJMZlVGGRKRmNoWRn31j2vi3mRSemwklY-RSs_AxmS6gEuxVkG7RkxRJTq4twrlT_piM-_cR8VBVxV3jy6Lg5PeAiKNxqC4-tVl-XwTXUGOMVThvI68uu7smpGUt5nTXIFDYvTcJCFGkwNPt43ntqQHfmq76DoFlki3CSI26YEL30r3ullGnlcA2S55vbu7RtvEJYht1SkMpwzun_CTdGe2FecJU08AEDHx0PY_wpTGAqGH0vpAz6ipqyYg_LYCdLbLrdAfr5Pk1c-v4HXNV2Q/p.jpeg"
  })

lyrik = Member.create!(
  {
    first_name: "Lyrik",
    last_name: "Houston",
    username: "Straigus",
    email: "kirylmitch@gmail.com",
    password: "Straigus1",
    bio: "I'm a gamer with a wide-ranging library for music.",
    avatar_url: "https://previews.dropbox.com/p/thumb/ABbfWUpP5t5HMbwynOUAqzuhB3AvU9jLLHT04uc9OeTVkAojjOAoZBw0NsPVizzgTAO8l-7Q_T89VQHXNuyMvSbnlJN4BJ53uMAgYqtmx1BvqaFB8o8wQv1GBkbX9jzNIK3fXCjr05uKs4pl_1VAHV66Nq-zvEAZMjX-HGvnPbBykvvis7NaeYCZQUYwJCVpo3W9i65QYzH5A5iL9_MaTECE1qOgSFGr71rErTFeHM6DKRpfUfYmzsnDyWP8Su-lX1nPMBawEjWH_SOT0W9aQrA-h1TnB3Ak7WsMZP5rsRkxJBU4J0saSKZFvzSQbIO0ODEmyJwwoDD8_9Y5VLeObk0rmRdlQf3a43cPObPUavUiMQ/p.jpeg"
  })

# Sample created/received playlists
Playlist.create!(
  {
    title: "Cloud Puff",
    cover_url: "XX",
    playlist_url: "https://open.spotify.com/playlist/0d9JETjQH2IabRVc70Dngx?si=2ec043e39cb94f81",
    description: "Looking for a playlist with soft, dreamy vibes.",
    requester_id: madison.id,
    creator_id: lyrik.id
  })

  Playlist.create!(
    {
      title: "Disco Ball",
      cover_url: "XX",
      playlist_url: "https://open.spotify.com/playlist/1aAdDQv8ma4vhMlWSkJ1P0?si=a7591eccb8d44866",
      description: "Looking for an 80s-inspired disco playlist.",
      requester_id: madison.id,
      creator_id: lyrik.id
    })

  Playlist.create!(
    {
      title: "Otakus Only",
      cover_url: "XX",
      playlist_url: "https://open.spotify.com/playlist/6mCAnMaPMR9IckC45VNajv?si=ceae9393c8624f45",
      description: "I'd love a mix with anime intro songs.",
      requester_id: lyrik.id,
      creator_id: madison.id
    })

  Playlist.create!(
    {
      title: "Zen Ambience",
      cover_url: "XX",
      playlist_url: "https://open.spotify.com/playlist/18kUYJqysbVqdCKXCGRmlO?si=fc7b68269c0e4b56",
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
