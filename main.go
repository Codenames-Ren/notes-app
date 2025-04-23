package main

import (
	"log"
	"notes-app/src/database"
	"notes-app/src/models"
	"notes-app/src/routes"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	database.ConnectDB()

	database.DB.AutoMigrate(&models.Note{},)

	router := gin.Default()

	routes.NoteRoutes(router, database.DB)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	router.Run(":" + port)

}