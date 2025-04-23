package routes

import (
	"notes-app/src/controllers"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func NoteRoutes(router *gin.Engine, db *gorm.DB) {
	noteGroup := router.Group("/api")
	{
		noteGroup.POST("/notes", controllers.CreateNote)
		noteGroup.GET("/notes/:username", controllers.GetNoteByUsername)
		noteGroup.GET("/notes/:username/:id", controllers.GetNoteByID)
		noteGroup.PUT("/notes/:username/:id", controllers.UpdateNote)
		noteGroup.DELETE("/notes/:username/:id", controllers.DeleteNote)
	}
}