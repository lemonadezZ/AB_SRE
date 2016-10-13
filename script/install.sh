#!/usr/bin/bash
yum update
rpm -Uvh https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
rpm -Uvh https://mirror.webtatic.com/yum/el7/webtatic-release.rpm
yum  -y install php70w php70w-opcache  php70w-cli php70w-common php70w-fpm php70w-gd php70w-mbstring php70w-mcrypt php70w-mysqlnd php70w-pdo php70w-xml
/usr/sbin/php-fpm
yum -y install readline-devel pcre-devel openssl-devel gcc make automake autoconf m4 perl
yum  -y install wget
wget https://openresty.org/download/openresty-1.11.2.1.tar.gz
mkdir /tmp/openresty
tar -zxvf openresty-1.11.2.1.tar.gz -C  /tmp/openresty
rm -rf openresty-1.11.2.1.tar.gz
cd /tmp/openresty/openresty-1.11.2.1
./configure
make
make install
export PATH=/usr/local/openresty/bin:$PATH
/usr/local/openresty/nginx/bin/nginx
yum -y install http://www.percona.com/downloads/percona-release/redhat/0.1-3/percona-release-0.1-3.noarch.rpm
yum -y install Percona-Server-server-57
cat /var/log/mysqld.log | grep "temporary password"

rm -rf /tmp/openresty
