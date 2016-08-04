# Class 9 - Lab Assignment

Continue working on the functionality of your **data.html** page of you do not have it working 100% yet:

- Two tables: one displaying the total coffee beans needed per hour/day for the individual kiosks locations and the company as a whole, and a second table displaying baristas needed per hour/day for the individual kiosks locations and the company as a whole.

- An input form where a new store location can be entered and will then render a new kiosk location to the data tables

### Stretch Goals

- Give your input form functionality to update the data for a location that is already in the table. This is going to require some additional pieces, such as:
	- Some kind of `if` statement to test whether the input kiosk location name matches one that is already in the table (or other mechanism to indicate which location to update)
	- The new input numbers need to be run through the calculation methods as with the original creation of the instances
	- The individual rows will need `id` properties so that their values can be updated in place (or just build a mechanism to re-render the table but WITHOUT re-rolling the random numbers and changing the numbers for the rest of the locations)

- Style up the public facing page (**index.html**) to make it appealing to customers, including adding some swag, maybe?

- Make two additional pages:
	- Mock up an order form (**order.html**) so that visitors to the website can order coffee beans and swag. That form would need to receive all of the things you'd expect on an order form: name, address, payment info, products to order, quantities, special instructions, and so on.
	- A second 'private' page (**order-processing.html**) that shows a list of pending orders and the individual order details. The business owner can then process the orders by clicking a button next to the order that then moves that list item to a 'Filled Orders' list.
