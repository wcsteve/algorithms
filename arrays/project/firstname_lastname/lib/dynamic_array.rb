require_relative "static_array"

class DynamicArray
  attr_reader :length

  def initialize
    @store = StaticArray.new
    @capacity = 8
    @length = @store.length
  end

  # O(1)
  def [](index)
    self.check_index(index)
  end

  # O(1)
  def []=(index, value)
    @store[index] = value
  end

  # O(1)
  def pop
    @store.length -= 1
    popped = @store.pop
    popped
  end

  # O(1) ammortized; O(n) worst case. Variable because of the possible
  # resize.
  def push(val)
    self.resize! if @length == @capacity
    @store.length
    @store.push(val)
  end

  # O(n): has to shift over all the elements.
  def shift
  end

  # O(n): has to shift over all the elements.
  def unshift(val)
  end

  protected
  attr_accessor :capacity, :store
  attr_writer :length

  def check_index(index)
    raise 'index out of bounds' if index > @length
    @store[index]
  end

  # O(n): has to copy over all the elements to the new store.
  def resize!
    @capacity *= 2
  end
end
