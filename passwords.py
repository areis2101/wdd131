
LOWER=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

UPPER=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

DIGITS=["0","1","2","3","4","5","6","7","8","9"]

SPECIAL=["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", "\"", ",", ".", "<", ">", "?", "/", "\\","`", "~"]


def word_in_file(word, filename, case_sensitive=False):
      with open(filename, "r", encoding="utf-8") as file: 
        for line in file:
            if not case_sensitive:
                
                if word.lower() in line.lower():
                    return True
            else:
                
                if word in line:
                    return True
      return False
print(word_in_file("banana", "wordlist.txt"))


def word_has_character(word, character_list):
    for character in word:
        if character in character_list:
            return True

    return False

def word_has_character(word, character_list):
    for character in word:
        if character in character_list:
            return True

    return False
def word_complexity(word):
    complexity = 0

    if word_has_character(word, LOWER):
        complexity += 1

    if word_has_character(word, UPPER):
        complexity += 1

    if word_has_character(word, DIGITS):
        complexity += 1

    if word_has_character(word, SPECIAL):
        complexity += 1

    return complexity
       


def password_strength(password, min_length=10, strong_length=16):
 def word_has_character(word, character_list):
    for character in word:
        if character in character_list:
            return True

    return False


def word_complexity(word):
    complexity = 0

    if word_has_character(word, LOWER_CASE):
        complexity += 1

    if word_has_character(word, UPPER_CASE):
        complexity += 1

    if word_has_character(word, DIGITS):
        complexity += 1

    if word_has_character(word, SPECIAL):
        complexity += 1

    return complexity


def word_in_file(word, filename, case_sensitive=False):
    with open(filename, "r", encoding="utf-8") as file:
        for line in file:
            file_word = line.strip()

            if case_sensitive:
                if file_word == word:
                    return True
            else:
                if file_word.lower() == word.lower():
                    return True

    return False


def password_strength(password, min_length=10, strong_length=16):

    strength = 0

   
    if len(password) < min_length:
        print("Password is too short.")
        return 0

   
    if word_in_file(password, "common_passwords.txt"):
        print("Password is a known password.")
        return 1

    if word_in_file(password, "wordlist.txt"):
        print("Password is found in dictionary.")
        strength = 1

  
    complexity = word_complexity(password)


    strength += complexity

   
    if len(password) >= strong_length:
        strength += 1

    
    if strength > 5:
        strength = 5

    print("Password strength:", strength)

    return strength
   


def main():
 while True:

        password = input("Enter a password (q to quit): ")

        if password == "q" or password == "Q":
            print("Program ended.")
            break

        strength = password_strength(password)

        print("Strength level:", strength)
    

if __name__ == "__main__":
    main()
