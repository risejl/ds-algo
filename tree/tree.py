from typing import Any, Optional

class TreeNode:
    """
    implement tree node
    """
    def __init__(self, value: Any, left: 'TreeNode'=None, right: 'TreeNode'=None) -> None:
        self.value: 'TreeNode' = value
        self.left: 'TreeNode' = left
        self.right: 'TreeNode' = right
        self.exitStackCount: int = 0

class MyStack:
    '''
    stack for non-recursive version of traversal
    '''
    def __init__(self) -> None:
        self.stack: list = list()

    def push(self, element: 'TreeNode') -> None:
        self.stack.append(element)

    def pop(self) -> 'TreeNode':
        return self.stack.pop()

    def is_empty(self) -> bool:
        if len(self.stack) == 0:
            return True
        else:
            return False

class MyQueue:
    '''
    queue for level-order traversal
    '''
    def __init__(self) -> None:
        self.queue: list = list()

    def enqueue(self, element: 'TreeNode') -> None:
        self.queue.append(element)

    def dequeue(self) -> 'TreeNode':
        if not self.is_empty():
            return self.queue.pop(0)

    def is_empty(self) -> bool:
        if len(self.queue) != 0:
            return False
        else:
            return True

    def get_front(self) -> Optional['TreeNode']:
        if not self.is_empty():
            return self.queue[0]
        else:
            return False

class MyTree:
    """
    implement linkedlist-based tree
    """
    def __init__(self, root: 'TreeNode'=None) -> None:
        self.root: 'TreeNode' = root

    def preorder_traversal(self, root: 'TreeNode'=None) -> None:
        '''
        preorder traversal recursive
        '''
        if root == None:
            return
        print(root.value)
        self.preorder_traversal(root.left)
        self.preorder_traversal(root.right)

    def preorder_traversal_nr(self, root: 'TreeNode'=None) -> None:
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

    def inorder_traversal(self, root: 'TreeNode'=None) -> None:
        '''
        inorder traversal recursive
        '''
        if root == None:
            return
        self.inorder_traversal(root.left)
        print(root.value)
        self.inorder_traversal(root.right)

    def inorder_traversal_nr(self, root: 'TreeNode'=None) -> None:
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

    def postorder_traversal(self, root: 'TreeNode'=None) -> None:
        '''
        postorder traversal recursive
        '''
        if root == None:
            return
        self.postorder_traversal(root.left)
        self.postorder_traversal(root.right)
        print(root.value)

    def postorder_traversal_nr(self, root: 'TreeNode'=None) -> None:
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

    def levelorder_traversal(self, root: 'TreeNode'=None) -> None:
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

    def count(self root: 'TreeNode'=None) -> int:
        '''
        return the number of nodes
        '''
        left_num = 0
        right_num = 0
        if root != None:
            left_num = self.count(root.left)
            right_num = self.count(root.right)
            return left_num + right_num + 1
        return 0

    def sum_value(self, root: 'TreeNode'=None) -> Any:
        '''
        return the summation of nodes
        '''
        left_sum = 0
        right_sum = 0
        if root != None:
            left_sum = self.sum_value(root.left)
            right_sum = self.sum_value(root.right)
            return left_sum + right_sum + root.value
        return 0

    def height(self, root: 'TreeNode'=None) -> int:
        '''
        return the height of tree
        '''
        left_height = 0
        right_height = 0
        if root != None:
            left_height = self.height(root.left)
            right_height = self.height(root.right)
            if left_height > right_height:
                return left_height + 1
            else:
                return right_height + 1
        return 0

    def leaf_num(self, root: 'TreeNode'=None) -> int:
        '''
        return the number of leaf nodes
        '''
        left_leaf = 0
        right_leaf = 0
        if root != None:
            left_leaf = self.leaf_num(root.left)
            right_leaf = self.leaf_num(root.right)
            if root.left == None and root.right == None:
                return left_leaf + right_leaf + 1
            else:
                return left_leaf + right_leaf
        return 0

    def children_num(self, root: 'TreeNode'=None) -> int:
        '''
        return the number of nodes which have children
        '''
        left_children = 0
        right_children = 0
        if root != None:
            left_children = self.children_num(root.left)
            right_children = self.children_num(root.right)
            if root.left != None or root.right != None:
                return left_children + right_children + 1
            else:
                return left_children + right_children
        return 0

    def two_children_num(self, root: 'TreeNode'=None) -> int:
        '''
        return the number of nodes which have two children
        '''
        left_children = 0
        right_children = 0
        if root != None:
            left_children = self.two_children_num(root.left)
            right_children = self.two_children_num(root.right)
            if root.left != None and root.right != None:
                return left_children + right_children + 1
            else:
                return left_children + right_children
        return 0

    def one_child_num(self, root: 'TreeNode'=None) -> int:
        '''
        return the number of nodes which have one child
        '''
        left_child = 0
        right_child = 0
        if root != None:
            left_child = self.one_child_num(root.left)
            right_child = self.one_child_num(root.right)
            if (root.left != None and root.right == None) or (root.left == None and root.right != None):
                return left_child + right_child + 1
            else:
                return left_child + right_child 
        return 0