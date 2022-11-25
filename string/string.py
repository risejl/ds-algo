class MyString:
	'''
	implement string using python
	'''
	def __init__(self):
		self.string = ""

	def is_empty(self):
		if self.string == "":
			return True
		else:
			return False

	def add(self, ch):
		self.string += ch
		return self.string

	def print(self):
		print(self.string)

	def lower(self):
		if self.is_empty():
			return False
		else:
			return self.string.lower()

	def upper(self):
		if self.is_empty():
			return False
		else:
			return self.string.upper()

	def has_ch(self, ch):
		if self.is_empty():
			return False
		else:
			for i in range(len(self.string)):
				if self.string[i] == ch:
					return i
			return -1

# test code
string = MyString()
string.add('a')
string.add('b')
print("add character a and b to empty string:")
string.print()
print("is string empty?")
print(string.is_empty())
print("convert all character to uppercase:")
print(string.upper())
print("convert all character to lowercase:")
print(string.lower())
print("is a in string?")
print(string.has_ch('a'))