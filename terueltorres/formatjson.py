import json

with open('data.json', 'r') as f:
    data = f.read()

y = json.loads(data)
# the result is a Python dictionary:
# action, content, token, date, game
for x in y:
    print(x['action'])
