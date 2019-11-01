# Setup
1. Import sql file (befriender.sql) to a mysql (or whatever) database called befriender.  Then cd backend and npm start!

# Search
GET  
**/api/search/keyword/:keyword**  
This is a route to search users by keyword.

# Messages

POST  
**/api/message/post**  
Post a message to a user  
```
{
	"from_id": 3,
	"to_id": 1,
	"type": 0,
	"message": "And this is my weird message!"
}
```

GET  
**/api/message/all/:user1/:user2**  
Get messages between two users


# Friends
GET  
**/api/friend/request/:userId**  
Get friendRequests for a provided user  

POST  
**/api/friend/add**  
Add a friend
```
{
	"friend1": 2,
	"friend2": 3
}
```

GET  
**/api/friend/all/:userId**  
Get the friends of the provided user

# User
PUT  
**/api/user/update**  
Update user info
```
{
	"id": 4,
	"username": "test2",
	"email": "test@email.com",
	"password": "test",
	"description": "test2",
	"image_url": "test3"
}
```

POST  
**/api/user/register**  
Create and register a user.
```
{
	"username": "Lars-mikael",
	"email": "lmg@test.com",
	"password": "myPassword",
	"description": "A description of me",
	"image_url": "some_url"
}
```

POST  
**/api/user/login**  
Check if user credentials matches
```
{
	"email": "test@email.com",
	"password": "test"
}
```
