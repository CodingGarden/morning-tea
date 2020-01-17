Konstantinos 💩 
1/4/2020, 12:09:19 PM
Hey, CJ! Any tips about automating deployment? Things like deploying to production when pushing changes to git, triggering build scripts etc, instead of having to SSH into the server to manually pull changes and run scripts

CI - Continuous Integration
CD - Continuous Deployment

Travis CI
Netlify
Github Actions
Gitlab CI/CD
Circle CI
Azure DevOps
AWS CodeDeploy
Bitbucket Pipelines
Heroku Pipeline
Now.sh + github / gitlab


Mahendra C.
1/10/2020, 7:36:15 AM
React auth app. After login I m saving auth token to local storage. Routes which are requesting data from server, they are secure because without correct token, redirecting to login page. But I, myself able to create any hard coded token on local storage and able to see the protected routes.

With JWT - tokens can only be created with the SECRET on the server. If _anyone_ knows this SECRET, they can create tokens.