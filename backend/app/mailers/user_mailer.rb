class UserMailer < ApplicationMailer

    def daily_recommendations(user)
        @user = User.find(user.id)
        mail(to: @user.email, subject: "Your team's recommendations")
    end
    
end
