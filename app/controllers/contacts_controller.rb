class ContactsController < ApplicationController
  
  def create
    contact = user.contacts.new(contact_params)
    if contact.save
      render json: contact
    else
      render json: { status: 400, errors: contact.errors.full_messages }
    end
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def contact_params
    params.require(:contact).permit(:first_name,:last_name)
  end
end
