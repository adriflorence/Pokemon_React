# Lab

Create a small React app

Also remember to have a container and component folder. Containers will handle data requests, state changes and callbacks. Components will handle visualisation logic (and only have access to props).

Sample APIs:

## Pokemon API

http://pokeapi.co/

E.g. make a dropdown of the original Pokemon which you can select to see their details. This API uses URLS to link to more information rather than having one huge JSON response, so you will need to do a second AJAX request when an option is selected.

To get more than 20 Pokemon returned at once you can add a limit, e.g. http://pokeapi.co/api/v2/pokemon/?limit=151
