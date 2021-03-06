<img src="client/public/images/pong6.png?raw=true">

## Table Tennis Is Being Revolutionized
**PONG 2180** is a transcontinental table tennis game that friends can play no matter how far away they are from one another. It's perfect for kids and teens, friends trying to keep in touch, and hardcore game enthusiasts.

<img align="right" src="client/public/images/pong8.png?raw=true">



## Here's How It Works
It’s simple. Player A will log into the app, confirm their location through **GPS and the Google Maps API**. They’ll choose a challenger by entering their username. Player B will confirm their GPS location and accept the challenge. Player A will serve the virtual ping pong ball, and even enter in “trash talk” if they choose. Meanwhile, Player B will receive a message that the ball is headed their way and when it will arrive. After the initial serve, players have the option to **manipulate the ball with the app’s built in speed-up factor**. Both players will see the ball passing across their screen in real-time and the countdown timer of when it will arrive. 

<img height="300px" align="left" src="client/public/images/map.png?raw=true">

A successful return will be registered when the **HIT button** is pressed two seconds before or two seconds after the determined time. The circumference, weight and velocity of a typical ping pong ball has been calculated to make this experience identical to the real thing. As the clock counts down, get ready to hit the ball back because it will be coming at 70 mph. **The first player to score 10 points wins the game**.

## Let's Hear About The Features
A multitude of technologies were used for this application, which are all run through two separate programs—-**the physics engine and the screen engine**. The physics engine utilizes X, Y, Z coordinates to determine the players’ longitude and latitude, the trajectory of the ping pong ball and controlling the ball’s speed-up factor. 

<img height="300px" align="left" src="client/public/images/physics-engine copy.png?raw=true">

<img height="300px" align="right" src="client/public/images/connection-rundown.png?raw=true">

<br>

Additionally, the game uses the [haversine formula] and [kinematic equations] when taking into account Earth's circumference, longitude, latitude and azimuth, as well as the ball's acceleration and velocity.


## We're All About That Base--Database, That Is!
Databases are also used through **Firebase and MySQL**. Information for the ball’s speed and position is stored inside Firebase, and an event listener triggers a notification when the ball is hit. SQL stores all the ball hits (time of hit and distance to travel) along with storing the players’ name and location.

<img height="450px" align="center" src="client/public/images/database-structure.png?raw=true">


## What's In Store For The Future?
Future updates to the game would include **upgrading the accelerometer on players’ phones**, which would allow a phone to act as the paddle itself. Additional plans include added functionality to the Google Map feature to **see the ping pong ball moving in 3D with Unity**. Unity would read Firebase data and plot the path of the ball.


There are also plans to **expand the choices of emoji**, introduce **special paddles with extra-powers**, and improve the speed-up factor to **show a new time of arrival**.

## Get In Touch
Email us at pong2180@gmail.com and let us hear from you. You can learn more about the design process, challenge us to a game, or hear the story of how a mis-typed email address determined the **PONG 2180** name.

Check out our pong presentation at this [link].
<br>
See [wireframes] from early stages of the project too.
<br>
And, of course, play the game yourself and see it in action [here].

## Collaborators
* Rich Budek
* Troy Moling
* David Scherer-Odell
* Ryan Walters

[haversine formula]:https://en.wikipedia.org/wiki/Haversine_formula

[kinematic equations]:https://en.wikipedia.org/wiki/Kinematics_equations

[link]:https://docs.google.com/presentation/d/1cnIxrhe-o-XBPAQjk8mcZDEyiIK_g86yqckuEgQ19sY/edit?usp=sharing

[wireframes]:https://github.com/ryandwalters/pong-2180/tree/master/client/public/wireframes

[here]:https://pong-2180.herokuapp.com/






