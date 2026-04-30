import boto3
import os

def handler(event, context):
    """Список файлов в S3 хранилище"""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type'}, 'body': ''}

    s3 = boto3.client(
        's3',
        endpoint_url='https://bucket.poehali.dev',
        aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
        aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY']
    )

    response = s3.list_objects_v2(Bucket='files')
    files = []
    for obj in response.get('Contents', []):
        key = obj['Key']
        files.append({
            'key': key,
            'size': obj['Size'],
            'url': f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/bucket/{key}"
        })

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': str({'files': files})
    }
