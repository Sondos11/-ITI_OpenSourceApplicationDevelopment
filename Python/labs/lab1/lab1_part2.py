# 1
# def remove_adjacent_duplicates(lst):
#     new_lst = []
#     for i in range(len(lst)):
#         if i == 0 or lst[i] != lst[i-1]:
#             new_lst.append(lst[i])
#     return new_lst


# lst = [1, 2, 3, 3, 4, 4, 5, 5, 5, 6, 7, 7, 7]
# new_lst = remove_adjacent_duplicates(lst)
# print(new_lst)
#################################################
# 2
# def front_back(a, b):

#     a_len = len(a)
#     a_front = a[:a_len//2 + a_len % 2]
#     a_back = a[a_len//2 + a_len % 2:]

#     b_len = len(b)
#     b_front = b[:b_len//2 + b_len % 2]
#     b_back = b[b_len//2 + b_len % 2:]

#     return a_front + b_front + a_back + b_back


# a = "abcd"
# b = "efghijk"
# result = front_back(a, b)
# print(result)
#####################################################
# 3
# def all_different(seq):

#     seen = set()
#     for num in seq:
#         if num in seen:
#             return False
#         seen.add(num)
#     return True


# seq1 = [1, 5, 7, 9]
# seq2 = [2, 4, 5, 5, 7, 9]

# result1 = all_different(seq1)
# result2 = all_different(seq2)

# print(result1)  # True
# print(result2)  # False
#################################
# 4
# def bubble_sort(lst):
#     n = len(lst)
#     for i in range(n):
#         for j in range(n-i-1):
#             if lst[j] > lst[j+1]:
#                 lst[j], lst[j+1] = lst[j+1], lst[j]


# lst = [64, 34, 25, 12, 22, 11, 90]
# bubble_sort(lst)
# print("Sorted list:", lst)
# 3
# 5
import random


def play_game():
    # generate a random number between 1 and 100
    secret_number = random.randint(1, 100)

    # initialize variables for the number of tries and the set of guessed numbers
    num_tries = 10
    guessed_numbers = set()

    # play the game
    while num_tries > 0:
        # prompt the user to guess the number
        guess = input("Guess the number (between 1 and 100): ")

        # check if the guess is out of range
        if not guess.isdigit() or int(guess) < 1 or int(guess) > 100:
            print("Invalid guess. Please enter a number between 1 and 100.")
            continue

        # check if the guess has already been made
        if int(guess) in guessed_numbers:
            print("You already guessed that number. Please guess a different number.")
            continue

        # add the guess to the set of guessed numbers
        guessed_numbers.add(int(guess))

        # decrement the number of tries
        num_tries -= 1

        # check if the guess is correct
        if int(guess) == secret_number:
            print("Congratulations! You guessed the number in",
                  10 - num_tries, "tries.")
            play_again = input("Do you want to play again? (y/n): ")
            if play_again.lower() == "y":
                play_game()
                return
            else:
                return

        # give a hint to the user if the guess is too high or too low
        if int(guess) < secret_number:
            print("Your guess is too low.")
        else:
            print("Your guess is too high.")

    # if the user runs out of tries, ask if they want to play again
    print("Sorry, you ran out of tries. The secret number was", secret_number)
    play_again = input("Do you want to play again? (y/n): ")
    if play_again.lower() == "y":
        play_game()
    else:
        return


# start the game
play_game()
