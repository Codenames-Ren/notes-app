package controllers

import (
	"net/http"
	"notes-app/src/database"
	"notes-app/src/models"
	"strconv"

	"github.com/gin-gonic/gin"
)

func UpdateNote(c *gin.Context) {
	username := c.Param("username")
	id, _ := strconv.Atoi(c.Param("id"))

	var note models.Note
	if err := database.DB.Where("username = ? AND id = ?", username, id).First(&note).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Note not found"})
		return
	}

	var input models.Note
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	note.Title = input.Title
	note.Content = input.Content

	database.DB.Save(&note)
	c.JSON(http.StatusOK, note)
}