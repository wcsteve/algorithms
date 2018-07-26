require 'bst_node'
require 'byebug'
# There are many ways to implement these methods, feel free to add arguments
# to methods as you see fit, or to create helper methods.

class BinarySearchTree

  attr_accessor :root

  def initialize
    @root = nil
  end

  def insert(value, node = @root)
    if node.nil?
      return self.root = BSTNode.new(value)
    end

    if value < node.value
      return node.left = BSTNode.new(value, node) unless node.left
      insert(value, node.left)
    elsif value > node.value
      return node.right = BSTNode.new(value, node) unless node.right
      insert(value, node.right)
    end

  end

  def find(value, tree_node = @root)
    return nil if tree_node.nil?
    return tree_node if tree_node.value == value

    if value < tree_node.value
      return find(value, tree_node.left)
    elsif value > tree_node.value
      return find(value, tree_node.right)
    end
  end

  def delete(value, node = nil)
    node_to_delete = node || find(value)

    if node_to_delete.right.nil? && node_to_delete.left.nil?
      remove_node(node_to_delete, nil)
    elsif node_to_delete.right.nil?
      remove_node(node_to_delete, node_to_delete.left)
    elsif node_to_delete.left.nil?
      remove_node(node_to_delete, node_to_delete.right)
    else
      max = maximum(node_to_delete.left)
      delete(max.value, max)
      remove_node(node_to_delete, max)
      max.parent = node_to_delete.parent
      max.right = node_to_delete.right
      max.left = node_to_delete.left
    end


  end

  # helper method for #delete:
  def maximum(tree_node = @root)
    max_child = tree_node.right

    while max_child.right
      max_child = max_child.right
    end

    max_child
  end

  def depth(tree_node = @root, depth = 1)
    if tree_node.nil?
      return -1
    end

    left_depth =  1 + depth(tree_node.left, depth)
    right_depth = 1 + depth(tree_node.right, depth)

    return [left_depth, right_depth].max
  end

  def is_balanced?(tree_node = @root)
  end

  def in_order_traversal(tree_node = @root, arr = [])
  end


  private
  # optional helper methods go here:

  def remove_node(node, replacement)
    parent = node.parent
    @root = replacement if node == @root

    if parent && parent.value > node.value
      parent.left = replacement
    elsif parent && parent.value < node.value
      parent.right = replacement
    end

  end


end
