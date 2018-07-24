require_relative "static_array"
require 'byebug'

class DynamicArray
  attr_reader :length

  def initialize
    @store = StaticArray.new(0)
    @capacity = 8
    @length = 0
  end

  # O(1)
  def [](index)
    self.check_index(index)
    @store[index]
  end

  # O(1)
  def []=(index, value)
    self.check_index(index)
    @store[index] = value
  end

  # O(1)
  def pop
    raise 'index out of bounds' if @length == 0
    popped = @store[self.length - 1]
    self.length -= 1
    popped
  end

  # O(1) ammortized; O(n) worst case. Variable because of the possible
  # resize.
  def push(val)
    self.resize! if @length == @capacity
    @store[self.length] = val
    self.length += 1
    return self
  end

  # O(n): has to shift over all the elements.
  def shift
    raise 'index out of bounds' if @length == 0
    shifted_element = self.store[0]
    self.length -= 1

    (self.length).times do |i|
      self.store[i] = self.store[i + 1]
    end

    shifted_element
  end

  # O(n): has to shift over all the elements.
  def unshift(val)
    self.resize! if @length == @capacity
    (self.length).downto(1) do |i|
      self.store[i] = self.store[i -1]
    end

    self.length += 1
    self.store[0] = val
    return self
  end

  protected
  attr_accessor :capacity, :store
  attr_writer :length

  def check_index(index)
    raise 'index out of bounds' if index > @length - 1
  end

  # O(n): has to copy over all the elements to the new store.
  def resize!
    @capacity *= 2
    current_store = self.store
    self.store = StaticArray.new(@capacity)

    (self.length).times do |i|
      self.store[i] = self.store[i]
    end

  end
end
