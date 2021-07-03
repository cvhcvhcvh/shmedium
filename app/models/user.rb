class User < ApplicationRecord 
  attr_reader :password 
  after_initialize :ensure_session_token

  validates :full_name, :password_digest, presence: true
  validates :full_name, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true

  def self.find_by_credentials(full_name, password)
    user = User.find_by(full_name: full_name)
    if user && user.is_password?(password)
      user 
    else 
      nil 
    end
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password 
  end

  def is_password?(password)
    password_object = BCrypt::Password.new(self.password_digest)
    password_object.is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!  
    self.session_token 
  end

  def generate_session_token
    SecureRandom.urlsafe_base64 
  end
end