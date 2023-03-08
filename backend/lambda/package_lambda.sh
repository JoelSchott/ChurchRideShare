cd $1/env/lib/python3.8/site-packages
zip -r ../../../../package.zip .
cd ../../../../
zip -g package.zip *.py

