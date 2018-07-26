class BSTNode

  attr_accessor :value, :parent, :left, :right

  def initialize(value, parent = nil)
    @value = value
    @parent = parent
    @left = nil
    @right = nil
  end
end
