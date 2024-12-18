package utils

import (
	"encoding/gob"
	"os"
)

var model string // Remplacez YourModelType par le type de votre modèle

func LoadModel(filename string) error {
	file, err := os.Open(filename)
	if err != nil {
		return err
	}
	defer file.Close()
	decoder := gob.NewDecoder(file)
	return decoder.Decode(&model)
}
