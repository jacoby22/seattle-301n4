#Campfire Coffee - Lab Project for Week 2

###Backstory

Your friend Jo Kuppa has come up with a new and original method for roasting coffee beans, and Jo believes that she has a big moneymaker on her hands, even in this crowded Seattle coffee market. She's so sure of her idea that she's starting a business to market her product.

While camping one weekend, Jo noticed that the first cup of coffee from the morning campfire is uniquely wonderful and delicious. She thought about why that would be the case, and came to realize that it was the combination of the coffee aroma with the smoke from the campfire that created a distinctive flavor blend.

Jo sought to recreate that flavor back in civilization, and over time, developed a process for roasting coffee beans over an open wood fire.  She also discovered that grinding the beans while they were still warm was the secret.

###Problem Domain

The challenge: how to provide freshly-roasted and still-warm beans to a chain of coffee kiosks every single day. Obviously, she wants to roast and then deliver just enough beans to each location each day so as to optimize her profits, and also does not want to deliver too many beans to each location, because once they cool from the roasting process the magic is gone.

In addition, Jo is also planning to sell beans by the pound, in special thermal vacuum packages that are filled and sealed with each order, such that customers can buy warm beans from the exact same hopper of beans used to make cups of coffee for customers.

As with any business, optimization is the key to success and profitability. In Jo's case, this is going to require careful inventory management of beans and related supplies (cups and thermal packages),

Furthermore, Jo needs to consider staffing and scheduling: coffee servings take longer to prepare than selling beans by the pound, and, different locations sell different ratios of coffee by the cup and coffee by the pound.

###Details

Customers have two options for purchases from Jo's kiosks:

- Individual 12 oz. cups of coffee
- Whole beans in 1 lb. packages

Jo knows that you have been studying web development and has asked you to build a web application for her business. For now, she wants two pages:

- A public-facing page that visitors and customers will see at campfirecoffee.com
- A private internal data page that will be used for managing the business

###Public-facing page for campfirecoffee.com (index.html)

For the public-facing page, Jo has only a few specific requests, but otherwise will let you handle all of the design (for now). Here's what she wants:

- Jo insists that a particular photograph of a coffee pot and a campfire that she took on the very same morning she got her inspiration (*campfire-coffee.jpg* is provided in the adjacent *assets* directory) be featured on the public page and serve as the focal point for the visual identity of Campfire Coffee
- Jo has scoured the internet and found three more images she wants you to use, and they are in the same *assets* directory
- A listing of locations and kiosk hours (6:00am to 9:00pm, 7 days a week)
- A color palette that reflects the experience of going camping
- A custom font via Google Fonts (you can choose this to your liking)
- More details will be coming later... she'll get them to you soon... she promises... *(seems like it is always coming "tomorrow")*

###Private internal data page for business management (data.html)

What Jo wants on the data page (which is by far a bigger priority at the moment, so build it first) is the following:

- The ability to forecast the expected customers per hour at each location, plus a daily total, by entering her projected minimum-vs.-maximum customers/hour into a form
- Her market analysis has given some information as a starting point: the expected minimum and maximum number of customers per hour at each location, and the average amounts of cups and beans purchased by customers at each location
- Those numbers will help Jo to plan the amount of warm beans to be delivered to each kiosk each morning, and also help her calculate staffing needs
- The total amount of beans sold at each location is a combination of the cups of coffee sold (1 pound of beans makes 16 cups), plus the to-go pounds that are sold.
- Some locations, such as the Seattle Public Library and Capitol Hill, will tend to sell more cups than pounds, whereas others, such as Pike Place Market and Sea-Tac Airport, will tend to sell more pounds to tourists.

###Starting Data

Based on Jo's market analysis, here are the projected numbers for each location that will serve as a basis for the calculations you will present on the data page:

| Location  | Min/Hr  | Max/Hr  | Cups/Cust  | To-Go Pounds/Cust  |
|---|---|---|---|---|
| Pike Place Market  | 14  | 35  | 1.2  | 0.34  |
| Capitol Hill  | 12  | 28  | 3.2  | 0.03  |
| Seattle Public Library  | 9  | 45  | 2.6  | 0.02  |
| South Lake Union  | 5  | 18  | 1.3  | 0.04  |
| Sea-Tac Airport  | 28  | 44  | 1.1  | 0.41  |

You'll want to calculate and store the following values:

- A random number of customers for each hour of operation that falls between the minumum and maximum hourly boundaries
- Based on the rate of cups/customer, calculate the projected cups sold per hour  at each location, plus a daily total for each location and the company as a whole
- Based on the rate of pounds/customer, calculate the projected pounds sold per hour at each location, plus a daily total for each location and the company as a whole
- By combining the total beans needed to make cups, and the total beans that are sold by the pound for each location, Jo can ensure that an adequate amound of beans are stored at each location.
- On the assumption that each customer will require an average of two minutes of time for a single employee, Jo wants you to calculate the number of employees she will need at each location, each hour. This number needs to be rounded up, to the next integer, since it requires, for instance, 5 people to adequately do the work of 4.2 people.

###Format of Output

Here's what Jo wants on the data page: for each location, a list that looks *exactly* like this example:

Pike Place Market

- 6:00am: 86.4 lbs [23 customers, 27.6 cups (1.4 lbs), 85 lbs to-go]
- 7:00am: 191.1 lbs [51 customers, 61.2 cups (3.1 lbs), 188 lbs to-go]
- 8:00am etc., same kind of thing calculated for each hour
- 9:00am etc.

*all the way to*

- 8:00pm: 51.1 lbs [21 customers, 61.2 cups (3.1 lbs), 48 lbs to-go]
- Total customers at Pike Place Market: 235
- Total cups sold at Pike Place Market: 189
- Total pound packages sold at Pike Place Market: 26
- Total pounds of beans needed at Pike Place Market: 38.4

## User Stories (MVP) for Monday's lab
 - As a user, I want a webpage that displays individual store data for Campfire Coffee, so that I can be informed about how to run my business
 - As a developer, I want to use object oriented programming to build this site, so that the site will be more effective and the code will be easier to read and understand.
 - As a user, I want a functional, well organized webpage that displays my data in a user friendly fashion;
- As a user, I want my data broken out in a logical fashion so that I can make more informed decision about my inventory supply;
- As a user, I want my data compiled so that I can see my product needs as business as a whole

*...maybe you'll want to add your own as you get a better handle on the problem domain...*

## Technical Requirements for Monday's lab
 - New repository properly set up with scaffolding and README, and cloned to local machine
 - Working on a non-master branch, with regular commit history
 - Good use of Object Literals; one for each store model, properties/values and methods are correctly constructed
 - NO CONSTRUCTORS ALLOWED
 - Data page meets requirements of the problem domain
 - Stores are correctly rendering as lists to the data page with text that exactly matches the specified format

## User Stories (Stretch Goals)
- Get started on the public-facing page
- Create a style guide (style.html) for the public facing page
