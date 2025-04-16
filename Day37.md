### Day 37.
#### Today started with recalling about the authentication Token middleware. My mentor explain about middleware. First I thought middleware is used to check the response and request and to handle the database. I learned that middleware is used for authentication, validation. It runs in the middle of the request and the response. For example, I have created a authentication middleware which helps to check the token is valid or not. It will also the request to access the protected route only If the authentication token it valid. If not valid it will send a 401 unauthorized. The authenticateToken middleware checks for a JWT in the Authorization header and  it is verified using a secret key, attached to the decoded user to req.user, and proceeds with next() if valid. We also have next() to every middleware that tells the function is done here and move to the next middleware or route. If we didn’t give next it will process that and stop here, not moving to the next function. 
#### Then learned about the http status codes. HTTP status codes are 3 digit numbers sent by a server in response to a client’s request. It tells us what is the result of the request like, whether it is succeeded, failed, redirected or had errors in the result. They are the part of the HTTP response, will be sent in the headers and it is useful for both the client and the developer to understand what happened with a request. The HTTP status codes are divided by types such as informational, success, Redirection, client errors and server errors. 
### 1xx – Informational responses 
1. 100 continue – the server got the first part of the request and says to proceed with  the next ones. 
2. 101 switching protocols – server agrees to switch to a different communication methods. 
3. 102  processing – means the server received  the request and still processing it, but no response is ready. 
4. 103 early hints – the server sends some information before sending the final response. Helps speed things by pre loading the resources. 
### 2xx - Successful responses 
1. 200 ok – the request works fine.
2. 201 created – something new was created successfully like post. 
3. 202 accepted – the request has been accepted, but the action has not been completed. The server will process it later.
4. 203 Non Authoritative information – the server proceeded the request but the information given may be from a source other than the original. 
5. 204 No content – the request worked, but there’s nothing to show in the response. 
6. 205 reset content – the server processed the request, but the client should reset the view it had of the content. 
### 3xx – Redirection message. 
1. 300 multiple choices – the server has several options for the resource, we can choose one. 
2. 301 Moved permanently – the resource has moved to a new url.
3. 302 Found – temporarily moved to a different URL.
4. 304 – the resource has not changed.
### 4xx – client error responses 
1. 400 bad request – the request is invalid.
2. 401 Unauthorized – the token given is invalid.
3. 403 Forbidden – We are not allowed to access it, even we are logged in
4. 404 Not found – the thing we are searching for does not exists.
5. 409 conflict – the request can’t be completed because of a conflict like duplication.
### 5xx – server error response.
1. 500 Internal server error – the server got the situation it doesn’t know how to handle. 
2. 501 not implemented – the server doesn’t support the request method.
3. 503 service unavailable – the server is down
4. 504 gateway timeOut – the server didn’t get a response in time from another server it was trying to reach.
5. 505 HTTP version not supported – the server did not support the HTTP version used in the request.
#### We had a session with Joel Anna, Senior software developer at Surfboard payments. He taught us about the basic of the mobile app development. The First we should look into the real – life problems that need a solution. He explained it with an example, imagine going to a coffee shop that has long queue. So the customer might wait or one day or more but eventually he lose interest of going and standing in line to get coffee. Also the shop will be losing customers. Then we need to think the solution for that. As a developer we can create a coffee app with the features like ordering, pre- booking will reduce the time waiting in the line and the shop has customers.
#### Before creating an application we should think all the features that we will be easier for the customer and the shop owners to handle orders. The first thing we should we is do a rough sketch of the apps structure known as wire framing. We can do it in a pen and paper or tools like Figma. It a black and white drawing of the layouts and the flow of the app of the screens.Then get to know about MVP ( Minimum Viable Product). It is the most basic version of the application that has just the important features to work and solve the main problems of the users. It no need to completely designed with colours and all, just the core idea and flow of the app, so we can test it and get feedback so, we can improve it later.
#### Then moved to the coding part. he showed us how to build a app using flutter with an example. In flutter everything is widget. The first thing to started is the materialapp and cupertinoapp one is for android and another oner if for Ios. Here everything will be a class. Then Inside added a scaffold, think it as a canvas for the app. Then will be having a body part, we can use columns and rows to arrange the containers vertically and horizontally. Then also we can add the Text, Icons, Images and etc. The columns and rows has multiple children inside then so we use array.
#### Then learned about the difference between the native and cross – platforms. In native platform we create a separate app for android and iOS, which takes more time. Cross- platform like flutter lets write the single codebase and can be used to both android, iOS and even for web applications. Once all these development is done, we need to deploy. We build type environments like dev, Profile, production. The build process used to compiled to the native code. All the images, fonts and etc will be bundled and uploaded the app to stores like Google play store and the App store. For Android, we use APK or AAB files, and for iOS, it’s IPA files. He also talked about different types of testing—like unit testing, manual testing, and automated testing—to make sure the app works properly before releasing it. App maintenance is like fixing all the errors that arise from the user then and there. Should be about be done very quickly. The chain will be Research  Design  Development   Testing  Deployment  App maintenance.
#### Thank you.




