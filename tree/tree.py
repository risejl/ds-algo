class TreeNode:
    """
    implement tree node
    """
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right
        self.exitStackCount = 0

class MyStack:
    '''
    stack for non-recursive version of traversal
    '''
    def __init__(self):
        self.stack = list()

    def push(self, element):
        self.stack.append(element)

    def pop(self):
        return self.stack.pop()

    def is_empty(self):
        if len(self.stack) == 0:
            return True
        else:
            return False

class MyQueue:
    '''
    queue for level-order traversal
    '''
    def __init__(self):
        self.queue = list()

    def enqueue(self, element):
        self.queue.append(element)

    def dequeue(self):
        if not self.is_empty():
            return self.queue.pop(0)

    def is_empty(self):
        if len(self.queue) != 0:
            return False
        else:
            return True

class MyTree:
    """
    implement linkedlist-based tree
    """
    def __init__(self, root=None):
        self.root = root

    def preorder_traversal(self, root=None):
        '''
        preorder traversal recursive
        '''
        if root == None:
            return
        print(root.value)
        self.preorder_traversal(root.left)
        self.preorder_traversal(root.right)

    def preorder_traversal_nr(self, root=None):
        '''
        preorder traversal non-recursive
        '''
        if root == None:
            return

        stack = MyStack()
        p = root
        stack.push(p)
        print(p.value)
        while not stack.is_empty():
            if p.left != None:
                stack.push(p.left)
                print(p.left.value)
                p = p.left
            else:
                p = stack.pop()
                if p.right != None:
                    stack.push(p.right)
                    print(p.right.value)
                    p = p.right 
                else:
                    if not stack.is_empty():
                        p = stack.pop().right 
                        if p == None:
                            break
                        else:
                            stack.push(p)
                            print(p.value)
                    else:
                        break

    def inorder_traversal(self, root=None):
        '''
        inorder traversal recursive
        '''
        if root == None:
            return
        self.inorder_traversal(root.left)
        print(root.value)
        self.inorder_traversal(root.right)

    def inorder_traversal_nr(self, root=None):
        '''
        preorder traversal non-recursive
        '''
        if root == None:
            return

        stack = MyStack()
        p = root
        stack.push(p)
        while not stack.is_empty():
            if p.left != None:
                stack.push(p.left);
                p = p.left
            else:
                p = stack.pop()
                print(p.value)
                if p.right != None:
                    stack.push(p.right)
                    p = p.right 
                else:
                    p = stack.pop()
                    print(p.value)
                    p = p.right 
                    if (p == None):
                        break
                    else:
                        stack.push(p)

    def postorder_traversal(self, root=None):
        '''
        postorder traversal recursive
        '''
        if root == None:
            return
        self.postorder_traversal(root.left)
        self.postorder_traversal(root.right)
        print(root.value)

    def postorder_traversal_nr(self, root=None):
        '''
        postorder traversal non-recursive
        '''
        if root == None:
            return

        stack = MyStack()
        p = root 
        stack.push(p)
        while not stack.is_empty():
            if p.left != None:
                stack.push(p.left)
                p = p.left 
            else:
                p.exitStackCount += 1
                if p.exitStackCount == 1:
                    p = p.right 
                    if p == None:
                        p = stack.pop()
                        p.exitStackCount += 1
                    else:
                        stack.push(p)
                while p.exitStackCount == 2:
                    print(p.value)
                    if stack.is_empty():
                        break
                    else:
                        p = stack.pop()
                        p.exitStackCount += 1
                        if p.exitStackCount == 2:
                            continue
                        else:
                            stack.push(p)
                            p = p.right
                            if p == None:
                                p = stack.pop()
                                p.exitStackCount += 1
                            else:
                                stack.push(p)        

    def levelorder_traversal(self, root=None):
        '''
        level order traversal
        '''
        if root == None:
            return
        queue = MyQueue()
        queue.enqueue(root)
        while not queue.is_empty():
            node = queue.dequeue()
            print(node.value)
            if node.left != None:
                queue.enqueue(node.left)
            if node.right != None:
                queue.enqueue(node.right)


# test code
root = TreeNode(1)
left_child = TreeNode(2)
right_child = TreeNode(3)
left_left_child = TreeNode(4)
left_right_child = TreeNode(5)
right_left_child = TreeNode(6)
right_left_right_child = TreeNode(7)
root.left = left_child
root.right = right_child
left_child.left = left_left_child
left_child.right = left_right_child
right_child.left = right_left_child
right_left_child.right = right_left_right_child
tree = MyTree(root)