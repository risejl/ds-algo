from typing import Optional

class MyString:
	'''
	implement string using python
	'''
	def __init__(self) -> None:
		self.string: str = ""

	def is_empty(self) -> bool:
		'''
		is string empty
		'''
		if self.string == "":
			return True
		else:
			return False

	def add(self, ch: str) -> str:
		'''
		add a character to a string
		'''
		self.string += ch
		return self.string

	def print(self) -> None:
		'''
		print string
		'''
		print(self.string)

	def lower(self) -> str:
		'''
		convert string to lower case
		'''
		if self.is_empty():
			return ""
		else:
			return self.string.lower()

	def upper(self) -> str:
		'''
		convert string to upper case
		'''
		if self.is_empty():
			return ""
		else:
			return self.string.upper()

	def has_ch(self, ch: str) -> Optional[int]:
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