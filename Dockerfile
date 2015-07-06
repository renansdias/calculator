FROM node:0.10.39
RUN apt-get install git -y
RUN mkdir /proj
RUN cd /proj; git clone https://github.com/renansdias/calculator
RUN cd /proj/calculator; npm install
EXPOSE 7777