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
 ## Wakeup
  - Request
    ```json
      {
    "wakeup" : "1677208496"
   }```
 - Response
  ```json
  
    "message": "Wakeup updated successfully",
    "user": {
        "_id": "64781fddfc128ab3a6f1308d",
        "id": "64781fddfc128ab3a6f13087",
        "__v": 0,
        "WakeUpTime": "1677208496"
    }
 }
  ```
- dATABASE
 ``` JSON
  {
  "_id": {
    "$oid": "64781ce257649a36416d0685"
  },
  "id": "64781ce257649a36416d067f",
  "WakeUpTime": {
    "$date": "2023-12-31T18:30:00.000Z"
  },
  "__v": 0
}
```
## Sleep hours needed
 - request
  ```json
   {
    "hoursNeeded" : "8"
  }
  ```
 - Response
    ```json
       {
    "message": "Hours needed entry created successfully",
    "hoursNeeded": {
        "id": "6478217f6799c075ddcb8468",
        "hoursNeeded": "8",
        "_id": "6478c12ce31f13b0d1b6ba4e",
        "__v": 0
    }
   }
   ```
  - Database
  ```
    {
  "_id": {
    "$oid": "64784b57fd25c44f0c819383"
  },
  "id": "6478217f6799c075ddcb8468",
  "hoursNeeded": "8",
  "__v": 0
}
```





  
