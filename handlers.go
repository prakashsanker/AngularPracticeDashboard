package main 

import(
	"net/http"
	"html/template"
    // "github.com/gorilla/mux"
    "encoding/json"
)

func Index(w http.ResponseWriter, r *http.Request) {
	t, _ := template.ParseFiles("static/index.html")
	w.Header().Set("Content-Type", "text/html")
	t.Execute(w, nil)
}

func getRequesters(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.WriteHeader(http.StatusOK)
	rows, err := db.Query("SELECT * from requesters")
	check(err)
	var requester Requester
	var requesters Requesters
	for rows.Next() {
		var id int64
		var name string
		var email string
		var phoneNumber string
		err := rows.Scan(&id, &name, &email, &phoneNumber)
		check(err)
		requester = Requester{Id: id, Name: name, Email: email, PhoneNumber: phoneNumber}
		requesters = append(requesters, requester)
	}
	if err := json.NewEncoder(w).Encode(requesters); err != nil {
		check(err)
	}
}

func check(e error) {
    if e != nil {
        panic(e)
    }
}