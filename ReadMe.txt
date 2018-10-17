A few Notes for the project reviewer :

-Make sure you update the json file path in the Web.Config
-The project uses Cors to allow for cross domain API calls
   - Normally this would be a security risk but for the purpose of this test I believe it is acceptable since the API is not public
- Also update the urls in the Scripts folder the 2 js files to match your local host and port settings

There are 2 html files. The Smartfilter.html that loads all equipment and then filters clientside based on unitNo or ItemNo. 
Since all items are loaded when the page starts this seemed to be the most efficient approach. However, in order to demonstrate different endpoints 
I have added a second html page Search.html where you can type in the search parameter and press enter. 

This makes a call to one of the other 2 endpoints and retrieved on or more items based on equipmentType or UnitNo. 
Searching with an empty parameter brings back the full list of items. 
