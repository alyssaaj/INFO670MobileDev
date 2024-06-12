# Final Project - Budgeting Application 

INFO670 Cross-platform Mobile Development

Alyssa Jordan

## Design and Purpose:
This is a budgeting/expenses tracking application. The users can set a budget then add new expenses. They can add categories for their expenses. The app displays how much money is currently left in their budget as well to keep them on track to their goals. The primary audience for this application is those looking to track their expenses to live within a budget without feeling shamed if they fail. The project uses a React Native frontend, PHP APIs, and MySQL database.

## Application Screenshots

To start, the user should edit the profile to add their name and budget and then save.

![alt text](https://github.com/alyssaaj/INFO670MobileDev/blob/f1b87d48f1b096b1f2b11aef14137ec2277b8c66/FinalProject/screenshots/Profile.png)

Next, they should add categories for their expenses.

![alt text](https://github.com/alyssaaj/INFO670MobileDev/blob/7ed1de04cd56bae9dc64ed3c473e3a335db239f7/FinalProject/screenshots/AddCat.png)

From the Home Screen, they can see amount left in their budget and has an encouraging statement and meme. There is also an area to add a new expense.

![alt text](https://github.com/alyssaaj/INFO670MobileDev/blob/f1b87d48f1b096b1f2b11aef14137ec2277b8c66/FinalProject/screenshots/HomeUB.png)

![alt text](https://github.com/alyssaaj/INFO670MobileDev/blob/f1b87d48f1b096b1f2b11aef14137ec2277b8c66/FinalProject/screenshots/AddExp.png)

After adding a new expense, they can navigate to the expenses tab to view all their expenses.

![alt text](https://github.com/alyssaaj/INFO670MobileDev/blob/f1b87d48f1b096b1f2b11aef14137ec2277b8c66/FinalProject/screenshots/Expenses.png)

If the user overspends and goes beyond their budget, the home screen will remind them of this without shaming them.

![alt text](https://github.com/alyssaaj/INFO670MobileDev/blob/f1b87d48f1b096b1f2b11aef14137ec2277b8c66/FinalProject/screenshots/HomeOB.png)


## Server API 

The application currently only uses the following APIs. I made a few more that ended up being unused. If app development continued and I was going to create a true sign up/sign in with authentication page, they would be needed.

### addCategory
GET Request

Endpoint: https://www.cs.drexel.edu/~amj426/FP/addCategory.php?user={user}&cat={cat}

Parameters:
  user: UserID
  cat: String

### addExpense
GET Request

Endpoint: https://www.cs.drexel.edu/~amj426/FP/addExpense.php?user={user}&item=item&cateogry={category}&price={price}

Parameters:
  user: UserID
  item: String
  category: String
  price: decimal

### getCategoriesByUser
GET Request

Endpoint: https://www.cs.drexel.edu/~amj426/FP/getCategoriesByUser.php?user={user}

Parameters:
  user: UserID

### getExpensesByUser
GET Request

Endpoint: https://www.cs.drexel.edu/~amj426/FP/getExpensesByUser.php?user={user}

Parameters:
  user: UserID

### getUser
GET Request

Endpoint: https://www.cs.drexel.edu/~amj426/FP/getUser.php?id={id}

Parameters:
  id: UserID

### updateUser
GET Request

Endpoint: https://www.cs.drexel.edu/~amj426/FP/updateUser.php?name={name}&budget={budget}

Parameters:
  name: String
  budget: decimal


## Experiences

### Initial Design
This is the sketch of my design for the application.

### Major Challenges
My major challenges were profile creation/editing and calculating the amount left in the budget. Sign up and sign in are very complex features that require multiple database calls and authentication. I knew the timeline of this project would prevent me from implementing them so I had to pivot and come up with a different solution. Updating the profile still proved to be difficult as the php API was harder to troubleshot than the others with more CORS issues. Additionally, calculating the amount left in the budget was difficult it required two API calls, the summation of the prices returned for the expenses call and then I had to substract the expenses from the budget. This took some time to get functioning properly. 

The future plan for this project is to implement a true login screen. This will allow multiple users to sign up and return to their data later. More analytics would be next to show users the breakdown of money spent on their various categories. 
