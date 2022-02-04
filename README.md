# SEI-Project-4

![HomeBackground](https://user-images.githubusercontent.com/91135210/152526427-21ca1e48-c12c-44ef-9b28-81bd8d92f318.png)

A solo coded full stack app

Deployed here - [MyRecords](https://myrecords.herokuapp.com/)

Project 4: MyRecords

The fourth project I completed as part of my SEI course is a solo coded full stack app using a React front end and a Django backend. 

Called MyRecords, the app allows users to login, create a profile and upload information and images of records from their collection. They can also comment and in future should be able to rate and sell their records.
 
**Requirements**

- Create a full stack app.
- Must have multiple models and relationships with CRUD functionality.
- 8 days to complete. 
- Should use Python, Django, SQL database & React.
 
**Technologies Used**
 
- Python
- Django
- Django REST Framework
- PostgreSQL
- React.js
- Axios
- Bulma
- CSS
- React Router Dom
 
**Planning**

Having decided to go with my initial idea of an app to hold my record collection on, I elaborated on that to add sign up, login, comment, add and delete. 

I wireframed using Google Jamboard and made a relationships diagram to outline the model relationships. 

![Screenshot 2022-02-04 at 12 08 36](https://user-images.githubusercontent.com/91135210/152526767-1269039f-fda9-4019-9806-1cc52045b6c4.png)![Screenshot 2022-02-04 at 12 08 49](https://user-images.githubusercontent.com/91135210/152526795-45b48432-572c-4d6e-b9dd-5f7e32f93a0c.png)![Screenshot 2022-02-04 at 12 09 01](https://user-images.githubusercontent.com/91135210/152526820-162e205f-f5fb-402e-8a75-0c99093e48c2.png)

![Screenshot 2022-02-04 at 12 09 46](https://user-images.githubusercontent.com/91135210/152526838-b19d1993-60ef-4f3a-8419-c8a4e3ab7256.png)
 
**Process**

Backend

So that I had time to work on my backend, I tried to keep everything as simple as possible. I built out models for Records, Users and Reviews. 

![Screenshot 2022-02-04 at 12 13 37](https://user-images.githubusercontent.com/91135210/152527808-21aeb565-e199-444f-8f3a-c1b52714d957.png)

![Screenshot 2022-02-04 at 12 14 04](https://user-images.githubusercontent.com/91135210/152527833-cbe3d0ec-4eaf-440d-8dab-eb77d1b86f3a.png)


I created requests to my db and tested these in Insomnia, making sure the returning JSON results were correct.

<img width="1311" alt="Screenshot 2022-02-04 at 12 19 38" src="https://user-images.githubusercontent.com/91135210/152528134-15fcb95c-39f5-46aa-8ed9-edad0b4a24d6.png">
<img width="1314" alt="Screenshot 2022-02-04 at 12 19 52" src="https://user-images.githubusercontent.com/91135210/152528168-f176ca58-50ef-4b90-8e72-14988f024f45.png">
<img width="1200" alt="Screenshot 2022-02-04 at 12 20 04" src="https://user-images.githubusercontent.com/91135210/152528208-a5f57ed6-b750-472c-ad79-842eb9861dfe.png">

Using python I created a folder called jwt_auth that handles all my authentication such as user model, registration and login.

![Screenshot 2022-02-04 at 12 22 12](https://user-images.githubusercontent.com/91135210/152528400-06f3c338-1acb-4d91-a7fc-b0c965806f9b.png)

I spent some time adding data in TablePlus so that I had something to show on the app.

![Screenshot 2022-02-04 at 12 24 41](https://user-images.githubusercontent.com/91135210/152528696-3b1f63e1-fff9-47f5-8f69-e284f194a91d.png)

I then seeded that data formatted as Json.

![Screenshot 2022-02-04 at 12 25 35](https://user-images.githubusercontent.com/91135210/152528841-b4258fb4-dde1-4064-ad9b-a8946b1a12ad.png)

Frontend

Once I’d completed the work on the backend I started on the frontend hoping to get my MVP up and running in time so I could add extra functionality.

I began by creating the RecordIndex file using axios to get data from the database I had created in the back end.

![Screenshot 2022-02-04 at 12 28 59](https://user-images.githubusercontent.com/91135210/152529205-ca9416dc-d735-4141-9374-2cd90de66b2b.png)

Then I set about creating the RecordCard and RecordShow files using the data taken from the initial axios request and routed to these files.

![Screenshot 2022-02-04 at 12 29 30](https://user-images.githubusercontent.com/91135210/152529280-f0b7410c-356b-4f66-b7a0-14f31e91d758.png)
![Screenshot 2022-02-04 at 12 30 16](https://user-images.githubusercontent.com/91135210/152529382-c1d9d276-d0fb-4ccd-9f5b-f191f45b50f0.png)

After this I worked on user registration.

![Screenshot 2022-02-04 at 12 32 26](https://user-images.githubusercontent.com/91135210/152529674-084b7bc8-685d-4c02-81ab-cbfb22ab6c63.png)

Styling

I decided to use Bulma again as I didn’t feel I’d have time to learn a new framework and so set about making the page look as simple and functional as possible.

![Screenshot 2022-02-04 at 12 33 24](https://user-images.githubusercontent.com/91135210/152529798-4837bfce-205b-44fc-8a76-83003c6cf647.png)

**Future Features**

Shop to purchase records in collection.

Map showing nearby record shops.
 
 
**Wins & Challenges**

The main challenge was the entire project itself. I was worried about having the time to complete everything I wanted to do and in the end had to settle with a slightly scaled back MVP than I’d wanted. 

I was happy to get something up and running and the app is a good base to further my understanding and capabilities. Making use of notes taken during the course was essential with this project and I was glad I’d made sure that I had all the steps using Django and Python when setting up the backend.

I’d learnt a great deal in the group project done previously and was pleased with how I translated that knowledge into this project.

Overall I’m pleased with how the app turned out. I’ve learnt how to cope alone with the challenges of a full stack build. Alongside expanding my knowledge of Django, Python and SQL, organising my workload and making sure my goal is reachable was a key lesson learnt on this project.

