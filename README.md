<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Develop
1. clone repo 
2. run 
````
npm install
````
3. Install Nest CLI
````
npm i -g @nestjs/cli
````
4. run DB
````
docker-compose up -d 
````
5. Clone ```__.env.template__``` and rename de file like a ```__.env__```
6. feel the env variables 
7. run application with dev environment:
`````
npm run start:dev
`````
8. fell db seeds
`````
http://localhost:3000/api/v2/pokemon (only for develop)
`````

# Stack 
* MongoDB
* Nest

# Productions build 
1. Create ```.env.prod``` file
2. Feel var environment prod
3. Create new image with command:
````
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
`````

* Remember: if you want to lift the container next time, you need use: 

````
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up -d
`````


  




