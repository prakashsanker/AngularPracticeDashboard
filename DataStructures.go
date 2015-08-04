package main

type Requester struct {
	Id int64 `json: "id"`
	Name string `json: "name"`
	Email string `json: "email"`
	PhoneNumber string `json: "phoneNumber"`
}

type Requesters []Requester

type Job struct {
	Id int64 `json: "id"`
	Description string `json: "description"`
	JobStatus string `json: "jobStatus"`
}

type Jobs []Job