### REST API Interaction Flows
## NickName
- Request
```json
{
  "nickname": "ram",
  "password": "pass"
}

```
- Response
```json
{
    "message": "User created successfully",
    "user": {
        "nickname": "ram",
        "password": "pass",
        "_id": "6478a84ee31f13b0d1b6ba3f",
        "__v": 0
    }
}
```
- Database
```json

{
  "nickname": "ram",
  "password": "pass",
  "__v": 0
}
```
## Activity
   - Request
   ```json
   {
    "changesOptions" : ["I would go to sleep easily"]
}
```
- Response
  ```json
  {
    "message": "Sleep changes options updated successfully",
    "user": {
        "_id": "64781835ad4f0940d8f70b16",
        "id": "64781835ad4f0940d8f70b14",
        "changesOptions": [
            "I would go to sleep easily"
            
        ],
        "__v": 0
    }
     }
  ```
 - Database
  ```json
 {
  "_id": {
    "$oid": "64781835ad4f0940d8f70b16"
  },
  "id": "64781835ad4f0940d8f70b14",
  "changesOptions": [
    "I would go to sleep easily",
  ],
  "__v": 0
         }
```
## Struggle options
- Request
  ```json  
    {
    "Struggleoption" : "2-8 weeks"
    }
  ```
- Response
  ```json
     {
    "message": "Struggle option updated successfully",
    "user": {
        "_id": "64781a1123f6fb42aa26bc20",
        "id": "64781a1123f6fb42aa26bc1c",
        "Struggleoption": "2-8 weeks",
        "__v": 0
    }
}
    ```
 - Database
 ``` json
     {
  "_id": {
    "$oid": "64781a1123f6fb42aa26bc20"
   },
  "id": "64781a1123f6fb42aa26bc1c",
  "Struggleoption": "2-8 weeks",
  "__v": 0
 }
 ```
 


  
