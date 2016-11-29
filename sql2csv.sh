#!/bin/bash
read -p 'MySQL User: ' myUser
read -p 'MySQL Pass: ' myPass
read -p 'MySQL DB: ' mydb

for tn in `mysql --batch --skip-pager --skip-column-names --raw -u$myUser -p$myPass -e"show tables from "$mydb""`
do 
mysql -u$myUser -p$myPass $mydb -B -e "select * from \`$tn\`;" | sed 's/\t/","/g;s/^/"/;s/$/"/;s/\n//g' > $tn.csv
done
  