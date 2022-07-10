#Base image taken from Docker site https://hub.docker.com/r/cypress/browsers/tags
FROM cypress/browsers:node14.19.0-chrome100-ff99-edge
#Create a folder to store the project in container
RUN mkdir /cypress_bdd_project
# Make it as a working directory
WORKDIR /cypress_bdd_project
# copying the essential files
COPY ./package.json .
COPY ./cypress.json .
COPY ./cypress ./cypress
#Install cypress dependencies 
RUN npm install
#Executable command that conainer uses
ENTRYPOINT [ "npx","cypress", "run"]
#with CMD we can specify more parameters to the last entrypoint
CMD [ "" ]

