# Ahsoka Products Repo
This is a back-end API server and database for an ecommerce website. 

## Overview
The first stage of development was to pick a database to house the data I was given. After researching multiple noSQL and SQL databases, I decided on PostgreSQL due to its ease of use and the amount of relations within the data. Following the set up and optimization of the PostgreSQL queries and routing, the database was deployed on an AWS EC2 instance and so were multiple servers and an NGINX load balancer. When the 3 servers were up and running using the load balancer, the API was able to handle 3,000 requests per second at an average response rate of 36ms.

## Tech Stack
![Node](https://img.shields.io/badge/-Node-9ACD32?logo=node.js&logoColor=white&style=flat-square)
![Express](https://img.shields.io/badge/-Express-DCDCDC?logo=express&logoColor=black&style=flat-square)
![AWS](https://img.shields.io/badge/-AWS-000000?logo=amazon-aws&logoColor=white&style=flat-square)
![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-336791?logo=postgresql&logoColor=white&style=flat-square)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=flat-square&logo=nginx&logoColor=white)

