# Dinner Planner React

Jacob Möller & Hugo Bergqvist
DH2642 Lab 4


## Uppdatering 9/2-19

OBS OBS OBS: setState() Triggar en re-render, risk för loopar! OBS OBS OBS

Att klicka på en dish i Dishes.js funkar, men alla leder till samma dish. Tror detta beror på att koden just nu binder id:t till den sist renderade dishen till alla knappar.. av någon anledning..

// Den gör detta för att Onclick kallas när den renderar objekten av någon anledning istället för att att triggas vi onClick.


TODO:

Dishes.js
* Sökfunktionen verkar inte funka (DONE)
* Fixa så att knappen på maträtter leder till rätt dishDetails

Sidebar.js  
* Det går inte att ta bort maträtter
* Uppdatera priser med antalet personer

DishDetails.js
* Lägg till pris för maträtt
* Uppdatera siffror i ingredienser beroende på antalet personer

DinnerOverview.js
* Visa menyn med bilder och priser
* Totalkostnad

DinnerPrintout.js
* Dynamiska delen med bilder och beskrivning





## What you need to do

* reimplement the missing views following React practices
* use [Router](https://reacttraining.com/react-router/web/guides/philosophy) to map different url address (e.g. /search, /dish/ID) to specific components (the startup code already does that for welcome screen and select dish screen)
* implement cookies or localStorage so that the numberOfGuests and menu are persisted on the page reload
