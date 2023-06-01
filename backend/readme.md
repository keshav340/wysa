### REST API Interaction Flows

## NickName
  - Request body
    {
    <br>
    "nickname" : "rahul",
    <br>
    "password" :  "pass",
    <br>
    "hoursNeeded" : "8"
    <br>
    }

- Response
  {
  <br>
    "message": "User created successfully",
    <br>
    "user": {
    <br>
        "nickname": "rahul",
        <br>
        "password": "pass",
        <br>
        "_id": "64789e5ee31f13b0d1b6ba25",
        <br>
        "__v": 0
        <br>
    }
    <br>
}
- Database
   {
   <br>
  "_id": {
  <br>
    "$oid": "64789e5ee31f13b0d1b6ba25"
    <br>
  },
  <br>
  "nickname": "rahul",
  <br>
  "password": "pass",
  <br>
  "__v": 0
  <br>
}
## ActivityChanges



  
