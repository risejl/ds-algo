class Node:
    """
    implement tree node
    """
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

class MyTree:
    """
    implement linkedlist-based tree
    """
    def __init__(self, root=None):
        self.root = root

    def preorder_traversal(self, root=None):
        if root == None:
            return
        print(root.value)
        self.preorder_traversal(root.left)
        self.preorder_traversal(root.right)

    def inorder_traversal(self, root=None):
        if root == None:
            return
        self.inorder_traversal(root.left)
        print(root.value)
        self.inorder_traversal(root.right)

    def postorder_traversal(self, root=None):
        if root == None:
            return
        self.postorder_traversal(root.left)
        self.postorder_traversal(root.right)
        print(root.value)

    def levelorder_traversal(self, root=None):
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
root = Node(1)
left_child = Node(2)
right_child = Node(3)
root.left = left_child
root.right = right_child
tree = MyTree(root)
print("preorder traversal:")
tree.preorder_traversal(root)
print("inorder traversal:")
tree.inorder_traversal(root)
print("postorder traversal:")
tree.postorder_traversal(root)
print("levelorder traversal:")
tree.levelorder_traversal(root)