def avg(values) 
  total = 0
  for value in values
    total += value
  end

  total / values.size
end

def grade_letter(average)
  if average >= 90
    final_grade = "A"
  elsif average >= 80
    final_grade = "B"
  elsif average >= 70
    final_grade = "C"
  else
    final_grade = "F"
  end
end

grades = []
grade_avg = 0;
final_grade = "";

loop do
  puts "Please enter a grade. Enter 'calculate' to calculate your final grade."
  input = gets.chomp.downcase
  break if input == "calculate"
  grades.push(input.to_i)
end

grade_avg = avg(grades)
final_grade = grade_letter(grade_avg)




puts "Your final grade is #{final_grade}!"