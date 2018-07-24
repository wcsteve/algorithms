require_relative "static_array"
require 'byebug'

## [0, 1, 3, 4, 5]



class RingBuffer
  attr_reader :length

  def initialize
    @store = StaticArray.new(0)
    @capacity = 8
    @start_idx = 0
    @length = 0
  end

  # O(1)
  def [](index)
    self.check_index(index)
    realIndex = (index + self.start_idx)
    self.store[realIndex]
  end

  # O(1)
  def []=(index, val)
    realIndex = (index + self.start_idx + 1) % self.capacity
    self.store[realIndex] = val
  end

  # O(1)
  def pop
    raise 'index out of bounds' if @length == 0
    last_idx = ((self.length - 1) + self.start_idx) % self.length
    popped = self.store[last_idx]
    self.length -= 1
    popped
  end

  # O(1) ammortized
  def push(val)
    resize! if self.length == self.capacity
    self.length += 1
    last_idx = ((self.length - 1) + self.start_idx) % self.length
    self.store[last_idx] = val
    self
  end

  # O(1)
  def shift
    raise 'index out of bounds' if @length == 0
    shifted = self.store[self.start_idx]
    self.length -= 1
    self.start_idx += 1
    shifted
  end

  # O(1) ammortized
  def unshift(val)
    resize! if self.length == self.capacity
    self.length += 1
    first_idx = self.start_idx % self.capacity
    self.store[first_idx] = val
    self.start_idx -= 1
    # debugger
    self
  end

  protected
  attr_accessor :capacity, :start_idx, :store
  attr_writer :length

  def check_index(index)
    raise 'index out of bounds' if index > @length - 1
  end

  def resize!
    new_array = StaticArray.new(@capacity *= 2)
    self.capacity *= 2

    (self.length).times do |index|
      realIndex = (index + self.start_idx) % self.length
      new_array[index] = self.store[realIndex]
    end

    self.start_idx = 0

    self.store = new_array
  end
end
