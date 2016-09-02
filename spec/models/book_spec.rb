require 'rails_helper'

describe Book do

  context 'creating a book' do
    let (:book) { FactoryGirl.build(:book) }

     it 'has a valid factory' do
       expect(book).to be_valid
     end

     it 'is not valid without a title' do
       book.title = nil
       expect(book).to_not be_valid
     end
   end
end
