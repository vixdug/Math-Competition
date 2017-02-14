require 'colorize'
puts "Can you math?"
print "Player 1: What's your name?💀 :  ".colorize(:magenta)
p1Name = gets.chomp
print "Player 2: What's your name?👀 :   ".colorize(:blue)
p2Name = gets.chomp

class Question
	attr_accessor :answer, :print
	def initialize
		@num1 = rand(20) + 1
		@num2 = rand(20) + 1
		@operator = rand(3) + 1
		case @operator
		when 1
			@answer = @num1 + @num2
			@print = "What is the value of #{@num1} + #{@num2}?"
		when 2
			@answer = @num1 - @num2
			@print = "What is the value of #{@num1} - #{@num2}?"
		else
			@answer = @num1 * @num2
			@print = "What is the value of #{@num1} * #{@num2}?"
		end
	end
end

class Player
	attr_accessor :lives, :score, :name
  def initialize(name)
    @name = name
    @lives = 3
    @score = 0
  end

  def reset
		@lives = 3
  	@score = 0
  end

  def is_alive
  	@lives > 0
  end
end

player1 = Player.new(p1Name)
player2 = Player.new(p2Name)

loop do
	# reset of game
	currentPlayer = 1
	player1.reset
	player2.reset

	loop do
		break unless (player1.is_alive && player2.is_alive)
		player = (currentPlayer == 1) ? player1 : player2

		question = Question.new()
		puts "#{player.name}: #{question.print}"
		ans = gets.chomp.to_i
		if ans == question.answer
		print	"yas yas yas!\n".colorize(:green)
			player.score += 1
		else
			player.lives -= 1
			print "you suck.\n ".colorize(:red)
			puts "#{player1.name} has #{player1.lives} lives and #{player2.name} has #{player2.lives} lives"
		end

		currentPlayer = (currentPlayer + 1) % 2
	end


	if player1.lives == 0
		puts "#{player1.name} has lost!"
	else
		puts "#{player2.name} has lost!"
	end

	puts "#{player1.name}'s score is #{player1.score} and #{player2.name}'s score is #{player2.score}"

	print "Do you want to play again? (yes/no) 😱 :\n"
	restart = gets.chomp
	break unless restart == "yes"
end

puts "meow - cya never "
