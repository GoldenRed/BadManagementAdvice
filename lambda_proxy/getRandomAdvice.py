import json
import boto3
import random


def lambda_handler(event, context):
    client = boto3.client('dynamodb')
    
    response = client.query(
        TableName = 'BadManagementAdvice',
        KeyConditionExpression="PK = :pk",
        ExpressionAttributeValues={
            ":pk": { "S": "Table_METADATA" }
        },
        ScanIndexForward=True
    )
    
    total_users = int(response['Items'][0]['Total_Users']['N'])
    
    random_user_index = random.randint(1, total_users) - 1
    
    print("Total Users:", total_users)
    
    random_user_items = client.query(
        TableName = 'BadManagementAdvice',
        KeyConditionExpression="PK = :pk",
        ExpressionAttributeValues={
            ":pk": { "S": "USER#{}".format(random_user_index) }
        },
        ScanIndexForward=True
    )
    no_of_advices = len(random_user_items['Items']) - 1
    random_advice_index = random.randint(1, no_of_advices)
    
    advice = random_user_items['Items'][random_advice_index]
    
    output = {'Body':advice['Body']['S'], 'date': advice['EpochTime']['N'], 'points':advice['Points']['N'], 'user':random_user_items['Items'][0]['SK']['S'].split("#METADATA#")[1]}
    
    return {
        'statusCode': 200,
        'body': json.dumps(output),
        'headers': {
            "Access-Control-Allow-Origin": "http://badmanagementadvice.s3-website.eu-north-1.amazonaws.com/",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET"
        },
    }
