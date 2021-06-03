class NotesController < ApplicationController

    #GET /employees/:employee_id/notes
    def index
        @notes = Note.where(employee_id: params[:employee_id])
        render :json => @notes
    end

    #POST /employees/:employee_id/notes
    def create
        @note = Note.create!(note_params)
        render :json => @note
    end

    #GET /employees/:employee_id/notes/:note_id
    def show
        @note = Note.find(params[:id])
        render :json => @note
    end

    #DELETE /employees/:employee_id/notes/:note_id
    def destroy
        @note = Note.find(params[:id])
        @note.destroy
        render :json => @note
    end

    private

    def note_params
        params.require(:note).permit(:contents, :employee_id)
    end

end
