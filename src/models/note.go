package models

import (
	"time"
)

type Note struct {
	ID       int    `gorm:"primarykey"`
	Username string `gorm:"index;not null"`
	Title    string
	Content  string 
	CreatedAt 	time.Time
	UpdatedAt 	time.Time
}