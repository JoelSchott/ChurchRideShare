import pymysql
import os

def lambda_handler(event, context):    
    connection = pymysql.connect(
        host=os.getenv('DB_HOST'),
        user=os.getenv('DB_USER'),
        password=os.getenv('DB_PASSWORD'),
        database='church_ride_share'
    )
    with connection:
        with connection.cursor() as cursor:
            cursor.execute('SELECT name FROM Churches')
            row = cursor.fetchone()
            print(row)
