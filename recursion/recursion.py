# several types of recursion


def tail(num: int) -> None:
    '''
    tail recursion
    '''
    if num < 0:
        return
    print(num)
    tail(num - 1)

tail(5)



def head(num: int) -> None:
    '''
    head recursion
    '''
    if num < 0:
        return 
    head(num - 1)
    print(num)

head(5)




def tree_r(num: int) -> None:
    '''
    tree recursion
    '''
    if num < 0:
        return 
    print(num)
    tree_r(num - 1)
    tree_r(num - 1)

tree_r(5)




def indirect_r(num: int) -> None:
    '''
    indirect recursion
    '''
    if num < 0:
        return 
    print(num)
    indirect_r_ano(num - 1)

def indirect_r_ano(num: int) -> None:
    if num < 0:
        return
    print(num)
    indirect_r(num / 2)


indirect_r(4)


def nested_r(num: int) -> None:
    '''
    nested recursion 
    '''
    if num > 100:
        return num - 10
    else:
        print(num)
        return nested_r(nested_r(num + 11))

nested_r(95)