# Pokédex Stat Checker 
This is a Pokédex Stat Checker where the user will be able to search for their favourite Pokémon in the search query and through queries to the PokéAPI, it will display the Pokémon's name, Pokédex ID, image, description and radar chart.

For this project I have chosen to use the [PokéAPI](https://pokeapi.co/) because of the rich amount of information that is made readily available without having to worry about API creation and storing of API keys. 

## Motivation Behind Creation
The main motivation behind this project was to expose myself more to React as a framework, the `useState` and `useEffect` hooks and being abe to make asynchronous fetch calls to external APIs. 

In addition to this, I wanted to challenge myself more to use technologies and frameworks that I had not used before, namely Tailwind CSS and Chart.js, and it has allowed me to become more comfortable with not knowing anything going into a new framework/library, and learning the inner workings from zero.

## Technologies Used
For this project I have used the following technologies:
* **React** - As this project is only concerned with the Front-End and learning more about the basics of React.
* **Tailwind CSS** - Tailwind's utility classes that are reminiscent of the Bootstrap Library is a more modern take on modernising CSS. I chose this technology because it was easier to write the class names within React and receive instant feedback on the UI. 
* **Chart.js** - This is an original JavaScript library that was ported for use in React. It allowed me to create any type of chart based on the data that was retrieved from the API, and is used to visually display the stats of the Pokémon.

## Difficulties Encountered
The first difficulty that I had encountered was not related to the technologies, but more of starting a project from zero. 

In order to address this issue, I had created a wireframe that is titled `pokemon-stat-dex-wireframe` in this repository, and it details how I would break down the project into manageable components and helped me understand more about the importance of planning.

The second difficulty was the installation of Tailwind CSS - As I had initially used the Create-React-App package to initialise this repostitory, it was difficult for me to understand how to integrate Tailwind CSS into this project.

However, the documentation was very useful up until the stage of configuring the `tailwind-config.js` file that held the `contents` property. But, after understanding that it's just looking for the directories that are looking to use Tailwind CSS' utility classes, it became a lot clearer. 

For example: `content: ["./src/components/*.jsx"]` refers to all of the components in the `./src/components` directory, and the * refers to "all of the files" that end with the `jsx` tag.

The third and last difficulty to note was feeling overwhelmed with introducing new libraries/frameworks into the mix. However, taking the time to understand what each library is meant to essentially make easier, reading the examples and understanding how to implement functionalities from that library as I would need it. 


