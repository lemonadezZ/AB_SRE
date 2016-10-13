FROM centos
MAINTAINER sheepdog
ENV workspace /var/www/sheepdog/
WORKDIR ${workspace} 
ADD . $workspace
RUN  $workspace/install.sh
