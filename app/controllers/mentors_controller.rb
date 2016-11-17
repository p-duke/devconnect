class MentorsController < ApplicationController
  def index

      if !current_user
        redirect_to '/'
        return
      end
    @mentors = User.where(is_mentor:true)
    @locations = Cohort.all.map{|cohort| cohort.location}

    @mentor_avatars = []

    @mentors.each do |mentor|
      avatar = {
      :id => mentor.id,
     :url => mentor.avatar
    }
    @mentor_avatars << avatar
    end
  end

  def search
    @skills = mentor_params["skills"].split(' ')
    @skilledMentors = nil

    if @skills.empty?
      @skilledMentors = User.where("is_mentor = ? AND location = ? ", true, mentor_params["location"])
    elsif @skills.count > 1
      @mentors = User.where("is_mentor = ? AND location = ? ", true, mentor_params["location"])
      @skills.each do |skill|
        @skilledMentors = @mentors.select {|mentor| mentor.skills.find_by(name: skill)}
      end
    else
      @mentors = User.where("is_mentor = ? AND location = ? ", true, mentor_params["location"])
      @skilledMentors = @mentors.select {|mentor| mentor.skills.find_by(name: mentor_params["skills"])}
    end


    render json: @skilledMentors

  end

  private
    def mentor_params
      params.require(:mentor).permit(:skills, :location)
    end
end
