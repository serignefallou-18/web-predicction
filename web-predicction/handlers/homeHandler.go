package handlers

import "net/http"

func HomeHandler(w http.ResponseWriter, r *http.Request){
	if (r.URL.Path=="/"){
		RenderTemplate(w,"", "home")
	}
}
