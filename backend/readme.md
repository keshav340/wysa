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
/** 
* Paste one or more documents here
*/
{
  "nickname": "ram",
  "password": "pass",
  "__v": 0
}
```



  
