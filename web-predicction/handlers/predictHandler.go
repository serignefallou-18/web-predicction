package handlers

import "net/http"

func PredictHandler(w http.ResponseWriter, r * http.Request){
	//TODO: implement predict handler
	if (r.URL.Path=="/predict"){
		RenderTemplate(w,"", "predict")
	}
	
}