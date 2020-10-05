.PHONY: build clean deploy

build:
	env GOOS=linux go build -ldflags="-s -w" -o bin/api/vacations/create api/vacations/create/create.go
	env GOOS=linux go build -ldflags="-s -w" -o bin/api/office_hrs/schedule api/office_hrs/schedule/schedule.go
	env GOOS=linux go build -ldflags="-s -w" -o bin/api/office_hrs/list api/office_hrs/list/list.go

clean:
	rm -rf ./bin

deploy: clean build
	sls deploy --verbose
