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

type ContactInfo struct {
	Id int64 `json: "id"`
	Company string `json: "company"`
	RepName string `json: "repName"`
	RepEmail string `json: "repEmail"`
	HelpfulInfo string `json: "helpfulInfo"`
	CompanyPhone string `json: "companyPhone"`
	RepPhone string `json: "repPhone"`
}

type ContactsInfo []ContactInfo

type Note struct {
	Id int64 `json: "json"`
	Date string `json: "date"`
	Content string `json: "content"`
}

type Notes []Note