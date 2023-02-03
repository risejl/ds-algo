class MyString:
	'''
	implement string using python
	'''
	def __init__(self):
		self.string = ""

	def is_empty(self):
		'''
		is string empty
		'''
		if self.string == "":
			return True
		else:
			return False

	def add(self, ch):
		'''
		add a character to a string
		'''
		self.string += ch
		return self.string

	def print(self):
		'''
		print string
		'''
		print(self.string)

	def lower(self):
		'''
		convert string to lower case
		'''
		if self.is_empty():
			return False
		else:
			return self.string.lower()

	def upper(self):
		'''
		convert string to upper case
		'''
		if self.is_empty():
			return False
		else:
			return self.string.upper()

	def has_ch(self, ch):
		'''
		whether a character in a string
		'''
		if self.is_empty():
			return False
		else:
			for i in range(len(self.string)):
				if self.string[i] == ch:
					return i
			return -1