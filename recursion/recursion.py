# several types of recursion
# tail recursion
"""
def tail(num):
    if num < 0:
        return
    print(num)
    tail(num - 1)

tail(5)
"""

# head recursion
"""
def head(num):
    if num < 0:
        return 
    head(num - 1)
    print(num)

head(5)
"""

# tree recursion
"""
def tree_r(num):
    if num < 0:
        return 
    print(num)
    tree_r(num - 1)
    tree_r(num - 1)

tree_r(5)
"""

# indirect recursion
"""
def indirect_r(num):
    if num < 0:
        return 
    print(num)
    indirect_r_ano(num - 1)

def indirect_r_ano(num):
    if num < 0:
        return
    print(num)
    indirect_r(num / 2)


indirect_r(4)
"""

# nested recursion 
def nested_r(num):
    if num > 100:
        return num - 10
    else:
        print(num)
        return nested_r(nested_r(num + 11))

nested_r(95)
