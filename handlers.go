package main 

import(
	"net/http"
	"html/template"
)

func Index(w http.ResponseWriter, r *http.Request) {
	t, _ := template.ParseFiles("static/index.html")
	w.Header().Set("Content-Type", "text/html")
	t.Execute(w, nil)
}