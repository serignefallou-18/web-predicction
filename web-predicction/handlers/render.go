package handlers

import (
	"encoding/json"
	"net/http"
	"predict/models"
	"html/template"
)

func RenderJSONResponse(w http.ResponseWriter, code int, success bool, data interface{}, errorMessage string) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.WriteHeader(code)
	response := models.JSONResponse{
		Success: success,
		Data:    data,
		Error:   errorMessage,
	}
	if err := json.NewEncoder(w).Encode(response); err != nil {
		http.Error(w, `{"success": false, "error": "Internal Server Error"}`, http.StatusInternalServerError)
		return
	}

	// w.Write(jsonData)

}

func RenderTemplate(w http.ResponseWriter, data interface{}, temp string) {
	template, error := template.ParseFiles("template/"+ temp + ".html")
	if error != nil {
		w.WriteHeader(500)
		http.Error(w,"impossible de compiler le template",500)
		return
	}
	template.Execute(w, data)
}
