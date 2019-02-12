# Dinner Planner React

Jacob Möller & Hugo Bergqvist
DH2642 Lab 4


## Uppdatering 11/2-19

OBS: setState() Triggar en re-render, risk för loopar!

### TODO:

Dishes.js
* Sökfunktionen verkar inte funka (DONE)
* Fixa så att knappen på maträtter leder till rätt dishDetails (DONE)

Sidebar.js  
* Det går inte att ta bort maträtter (DONE)
* Uppdatera priser med antalet personer (DONE)
* Lägga in totalpris (DONE)

DishDetails.js
* Lägg till pris för maträtt (DONE)
* Uppdatera siffror i ingredienser beroende på antalet personer (DONE)

DinnerOverview.js
* Visa menyn med bilder och priser (DONE)
* Totalkostnad (DONE)

DinnerPrintout.js
* Dynamiska delen med bilder och beskrivning (DONE)

Annat:
* Ta bort konsol rekommendationer / buggar
* Cookies
* Enter buggen i Dishes.js (DONE)
* Se över observers så att allt kallas på rätt sätt
* MobileNavBar (samma filer som sidebar eller nya?) (IN PROGRESS)
	- Har bara applicerat i Dishes, inte i dishDetails än
	- Ska utforska .throttle på resize-eventet, just nu ser det hackigt ut vid resize men throttle kan minska 		uppdateringshastigheten på hur ofta eventListnern lyssnar -> mer smooth



## What you need to do

* reimplement the missing views following React practices
* use [Router](https://reacttraining.com/react-router/web/guides/philosophy) to map different url address (e.g. /search, /dish/ID) to specific components (the startup code already does that for welcome screen and select dish screen)
* implement cookies or localStorage so that the numberOfGuests and menu are persisted on the page reload
