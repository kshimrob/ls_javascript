password = "password"

counter = 0

loop do
  puts "Please enter password:"
  input = gets.chomp
  if input == password
    puts "You have logged in."
    exit
  end
  counter += 1
  if counter == 3 
    puts "You have been denied access."
    exit
  end
end