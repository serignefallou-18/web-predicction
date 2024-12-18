package main
import (
	"fmt"
	"net/http"
	"predict/handlers"
)

func main() {
	fs := http.FileServer(http.Dir("static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	http.HandleFunc("/", handlers.HomeHandler)
	http.HandleFunc("/predict", handlers.PredictHandler)
	fmt.Println("http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}
