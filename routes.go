package main

import (
	"net/http"
	"github.com/gorilla/mux"
	"database/sql"
    _ "github.com/go-sql-driver/mysql"
)

type Route struct {
	Name string
	Method string
	Pattern string
	HandlerFunc http.HandlerFunc
}

type Routes[]Route


func NewRouter() *mux.Router {
	db, err = sql.Open("mysql", "psanker:123@/operator")
	err = db.Ping()

	if err != nil {
		fmt.Println("Failed to prepare connection to database")
		log.Fatal("Error:", err.Error())
	}
	router := mux.NewRouter().StrictSlash(true)
	for _, route := range routes {
		router.
			Methods(route.Method).
			Path(route.Pattern).
			Name(route.Name).
			Handler(route.HandlerFunc)
	}
	router.PathPrefix("/").Handler(http.FileServer(http.Dir("./static/")))
	return router
}

var routes = Routes{
	Route{
		"Index",
		"GET",
		"/",
		Index,
	},
	Route {
		"getRequesters",
		"GET",
		"/requesters",
		getRequesters,
	},
}