package controllers

import (
	"net/http"
	"notes-app/src/database"
	"notes-app/src/models"
	"strconv"

	"github.com/gin-gonic/gin"
)

func CreateNote(c *gin.Context) {
	var note models.Note
	if err := c.ShouldBindJSON(&note); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if note.Username == "" || note.Title == "" || note.Content == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Username, Title, and Content are required"})
		return
	}

	if err := database.DB.Create(&note).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create note"})
		return
	}
	c.JSON(http.StatusOK, note)
}

func GetNoteByUsername(c *gin.Context) {
	username := c.Param("username")
	var notes []models.Note

	if err := database.DB.Where("username = ?", username).Find(&notes).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to get notes"})
		return
	}

	c.JSON(http.StatusOK, notes)
}

func GetNoteByID(c *gin.Context) {
	username := c.Param("username")
	id, _ := strconv.Atoi(c.Param("id"))


	var note models.Note
	if err := database.DB.Where("username = ? AND id = ?", username, id).First(&note).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Note not found"})
		return
	}
	c.JSON(http.StatusOK, note)
}