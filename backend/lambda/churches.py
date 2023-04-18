import pymysql
import json
import os

def lambda_handler(event, context):
    connection = pymysql.connect(
        host=os.getenv('DB_HOST'),
        user=os.getenv('DB_USER'),
        password=os.getenv('DB_PASSWORD'),
        database='church_ride_share'
    )
    
    churches = []
    
    with connection:
        with connection.cursor() as cursor:
            cursor.execute('SELECT * FROM Churches')
            rows = cursor.fetchall()
            
            for row in rows:
                church = {
                    'id' : row[0],
                    'name' : row[1],
                    'state' : row[2],
                    'city' : row[3],
                    'street' : row[4],
                    'zipCode' : row[5],
                    'description' : row[6],
                    'imageExtension' : row[7],
                    'website' : row[8]
                }
                churches.append(church)

    return {
        'statusCode': 200,
        'body': json.dumps(churches, indent=2, separators=(",", ": ")),
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }
