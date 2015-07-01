# Download ubuntu image
FROM node:0.10.39

# Create folder to hold the project
RUN mkdir /repo

# Clone the project
RUN cd /repo; git clone https://github.com/renansdias/calculator