package controllers

import (
	"net/http"
	"notes-app/src/database"
	"notes-app/src/models"
	"strconv"

	"github.com/gin-gonic/gin"
)

func DeleteNote(c *gin.Context) {
	username := c.Param("username")
	id, _ := strconv.Atoi(c.Param("id"))

	if err := database.DB.Where("username = ? AND id = ?", username, id).Delete(&models.Note{}).Error;
	err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete notes"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Note deleted successfully!"})
}