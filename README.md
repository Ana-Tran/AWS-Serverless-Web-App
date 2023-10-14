# AWS-Serverless-Web-App
Deploy a serverless web application using AWS Services

<b>1. Deploy static Web Application using AWS Amplify </b>
  - AWS Amplify is a great service to continuously deploy static web applications. You can tie your github repo to AWS Amplify to host your application and whenever commits are made to your repo, Amplify would redploy when changes are made. You can also use Amplify's built-in environment variables to handle your env variables<br> <br>
  ** Please note: if you're unable to launch to web application chances are I have taken it down due to using up all my free tier. <br>

<b>2. Manage user verification using AWS Cognito</b>
  - AWS Cognito is a great service to manage the applications users account rather than having to verify access to the application yourself, you can use Cognito. All you have to do is create a user pool and select the login requirements you want (i.e. email, phone, username). Cognito can be tied to AWS SES (simple email service) to handle message delivery such as verifing the account. <br><br> ** Please note: Currently, I have only allowed myself to register as a user, as I want to remain as free-tier. <br>

<b>3. Build Serverless Back End using AWS DynamoDB and Lambda</b>
 - DynamoDB is a serverless NOSQL database that is used to record the request for a unicorn ride. Lambda is used to select a unicorn from the groups of unicorn and then record the transaction to DynamoDB.<br><br> ** Please note: You can also use Aurora Serverless as a SQL Database instead of DynamoDB for transactional information to be stored in a database. <br>
 
<b>4. Deploy Restful API using API Gateway</b>
 - API Gateway is used to expose the Lambda function as a REST API and secured using Cognito as the Gateway uses JSON web tokens returned from Cognito user pools to authenticate the response. As we are exposing an endpoint to the public internet edge optimized is recommended as the endpoint type.<br><br>


Link to Web App = https://main.d33wp2p593d8jl.amplifyapp.com/ <br><br> ** Please note you can customize the domain by using AWS Route 53 and under amplify domain management you can add a domain, then you can use Route53 to make AAAA records to forward requests to the domain you have added. You can also use GoDaddy or Google domains to use your domains instead of Route 53. <br> </br>

Link to tutorial = https://aws.amazon.com/getting-started/hands-on/build-serverless-web-app-lambda-apigateway-s3-dynamodb-cognito/
