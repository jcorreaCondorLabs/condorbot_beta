package main

import (
	"encoding/json"
	"net/http"
	"time"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

type response struct {
	Name string    `json:"name"`
	UTC  time.Time `json:"utc"`
}

type params struct {
	Param1 string `json:"param1"`
	Param2 string `json:"param2"`
	Param3 string `json:"param3"`
}

// func handleRequest(ctx context.Context, request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
// 	now := time.Now()
// 	resp := &response{
// 		Name: "Condorbot Create vacation",
// 		UTC:  now.UTC(),
// 	}
// 	body, err := json.Marshal(resp)
// 	if err != nil {
// 		return events.APIGatewayProxyResponse{}, err
// 	}
// 	return events.APIGatewayProxyResponse{Body: string(body), StatusCode: 200}, nil
// }

func create(req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	if req.Headers["content-type"] != "application/json" && req.Headers["Content-Type"] != "application/json" {
		return events.APIGatewayProxyResponse{Body: "", StatusCode: http.StatusBadRequest}, nil
	}

	reqParams := new(params)
	err := json.Unmarshal([]byte(req.Body), reqParams)
	if err != nil {
		return events.APIGatewayProxyResponse{Body: "", StatusCode: http.StatusNotFound}, nil
	}

	stringBody, _ := json.Marshal(reqParams)

	return events.APIGatewayProxyResponse{
		StatusCode: http.StatusCreated,
		Headers:    map[string]string{"Content-type": "application/json"},
		Body:       string(stringBody),
	}, nil
}

func main() {
	lambda.Start(create)
}
