package main

import(
	"net/http"
)

func main() {
	router := NewRouter()
	http.Handle("/", router)
	http.ListenAndServe(":8200", nil)

}