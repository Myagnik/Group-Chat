# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.create(username: "Kavi", password: "RV132")
User.create(username: "Reena", password: "RV1")
User.create(username: "Meena", password: "RV32")
User.create(username: "Teena", password: "RV12")
User.create(username: "Reema", password: "R132")

Message.create(body: "yai kya baat hui", user: User.last)
Message.create(body: "jo hui so hui", user: User.first)
Message.create(body: "kuch bhi", user: User.second)
