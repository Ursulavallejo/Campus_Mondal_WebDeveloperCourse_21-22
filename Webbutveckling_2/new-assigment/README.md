### February 2022
# Webbutveckling 2
## Projektuppgift *Ursula Vallejo Janne*
### Content Innehåller:

- [1. General Projektplan](#1-general-projektplan-)
- [2. Personas](#2-personas-)
- [3. Wireframes](#3-wireframes-mobiler-tablets-och-desktop-)
    - [A. Low Fidelity](#a-low-fidelity)
    - [B. Prototyp](#b-prototyp-)
        - [UI och UX](#ui-och-ux)
- [4. Fonts](#4-fonts-)
- [5. Färgschema](#5-frgschema-)
- [6. Projektgenomförande](#6-projektgenomfrande-)
    - [ Funcionen i projekten ](#funcionen-i-projekten)
    - [ Nya koncept ](#nya-koncept)
    - [ Svårigheter ](#svrigheter)
    - [ Konklusionen](#konklusionen)
 
    
# 1. General Projektplan :

I Webbutveckling 2-projektet tog jag mitt tidigare projekt från klassen programmering_1 och gjorde om det i REACT.

Projektet är att göra en musikbutik där funktionerna att lägga till i varukorgen, ta bort och uppdatera data på artiklarna finns.

Jag tar som referens en webbsida i en musikbutik som är specialiserad och har en bredare aspekt av produkter som inte är typiska för mainstream.

Här kan du se originalsidan:

![](./src/utils/images/amoebaShop.png)
[AMOEBA MUSIC](https://www.amoeba.com/)

För att utveckla layouten för mitt projekt tog jag som bas logotypen som används på AMOEBA-webbplatsen, därifrån föreslog jag de olika stilarna som vi kommer att se mer i detalj i motsvarande avsnitt.

En del av projektet är att ha en projektutvecklingsplan vars beståndsdelar är nedbrutna i Trello.

Du kan se mitt projektplan i länken nedan:

[Trello Webbsida ](https://trello.com/invite/b/rqes8n1G/f6fc2d9657cdb567d8b8453acf6bea44/webbutveckilng2)

## Installera följande npm paket i min projekt:

```shell

   npm install react-router-dom@6
   npm install react-icons
   npm install tachyons@4.12.0
   
```

<details>
<summary> # Getting Started with Create React App </summary>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

</details>


# 2. Personas :

För att utveckla projektet beaktas potentiella användares profiler.

Jag har skapat 2 olika personas :

![](./src/utils/images/persona1Anna.jpg)

![](./src/utils/images/persona2James.jpg)

Länkar:
- [Draw.io](https://app.diagrams.net/)

# 3. Wireframes (mobiler, tablets och desktop) :

## A. Low fidelity:

Tanken är att de olika sidorna delar samma layoutformat, och att informationen presenteras på ett tydligt och organiserat sätt.
Nedan kan vi se den första skissen på tillvägagångssättet för hemsidan men en kundkorg:

![](./src/utils/images/low-fi-shop.jpg)

## B. Prototyp :

Utvecklingen av Wireframes för projektet utvecklades i Figma, för vilket jag inbjuder dig att se utvecklingen av detta i följande länk:

[PROTOTYP FIGMA PROJECT ](https://www.figma.com/file/MzJPhwWIfjyYR7DESWF9zn/AMOEBA-MusicShop?node-id=0%3A1)


### UI och UX:

För att utveckla mitt UI/UX baserar jag mig på information från Personas och på layouten som jag har skapat utifrån stilen på logotypen de har.

![](./src/utils/images/amoeba.gif)

- Av vad vi såg i studien av personer som är användare av butiken, har de en profil av att gilla oberoende musik, rock och inte så mycket mainstream. Så visuellt ville jag att den skulle ha en mer alternativ visuell kontrast.

-Knapparna och de känsliga delarna ändrar färg och försöker göra navigeringen mer intuitiv tack vare detta.

-Använd tre typer av typsnitt som är mer organiska och skapar en visuell balans mellan elementen i innehållet.

-Den ursprungliga sidan har mycket information och färger, så jag ville rensa upp den så att den skulle bli mer visuellt tilltalande och användaren bättre kunde förstå innehållet.

# 4. Fonts :

För att utveckla hemsidan valde jag 3 olika typer av typeface som är organisk  som logotyp av AMOEBA refererar till ett organiskt element och teckensnittet de använder i detta är en mer manuell linje.

Typeface jag valde var följande:

1. Permanent Marker
  ![](./src/utils/images/permanentMarkerFont.png)
2. Architects Daughter
   ![](./src/utils/images/architectDaughterFont.png)
3. Patrik Hand
   ![](./src/utils/images/patrickHandFont.png)

När mitt urval gjordes efter researchprocessen testade jag dem på webblasaren för att se om de verkligen fungerade bra tillsammans. Vilket du kan se nedan:

![](./src/utils/images/relationFontArchitects_Patrick.png)

![](./src/utils/images/relationFontPermant_Architects.png)

##Final Fonts , sizes and color:

![](./src/utils/images/fontsLayoutShop.jpg)

Länkar:
- [Type-Scale](https://type-scale.com/)

# 5. Färgschema :

AMOEBA Music shop har redan en logotyp som har färgerna rött och gult. Jag använde dessa färger och tittade på sidan av material palette färgpaletten som jag föreslog för dessa två färger och anpassade den till mitt projekt.

![](./src/utils/images/styleColorShopMusic.png)

##Final Color Palette:

Här färgskalan du använde i projektet:

![](./src/utils/images/colorpaletteSHOP.jpg)


# 6. Projektgenomförande :

Sedan berättar jag processen jag var tvungen att utveckla projektet.

## Funcionen i projekten:

För att förstå hur jag skulle utveckla projektet gjorde jag en analys av de funktioner som sidan skulle ha och planerade de funktioner som behövdes för att lösa det. Här kan vi se det mer detaljerat:

![](./src/utils/images/projekt%20Kundkorg.jpg)

![](./src/utils/images/functionsplan.jpg)

## Nya koncept:

Jag hittade två koncepter som verkade intressanta för mig i utvecklingen:

- context :
  Jag använder den för att kunna generera ett globalt sammanhang på sidan och ha informationen för hela projektet, tillgång till funktionerna och shop array för produkterna att köpa.

- [Context i react](https://es.reactjs.org/docs/context.html)

- .map:
För att kunna använda en ny array som jag använder för att överföra produkterna från butiken till varukorgen.

Hittade info här:

- [How to Use the Map](https://www.pluralsight.com/guides/how-to-use-the-map()-function-to-export-javascript-in-react)

- .concat:
  Jag använd den för att kunna kopiera värdena och kunna ha en likvärdighet inom dem.
- [Array.prototype.concat()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

## Svårigheter:

När jag implementerade i react de funktioner som jag hade skapat i det tidigare programmeringsprojektet, hittade jag några implementeringsproblem som jag beskriver nedan vad de var och hur de har lösts:

1.Hitta ett sätt att skapa ett sammanhang i projektet som jag hittade flera lösningar för och frågade min lärare om han kunde implementera det jag såg i följande handledning:

- [React Tutorial](https://www.youtube.com/watch?v=Dorf8i6lCuk&t=10507s)


<summary> # Meet up Context code i used </summary>

```shell
import { createContext, useState } from 'react';

const FavoritesContext = createContext({
favorites: [],
totalFavorites: 0,
addFavorite: (favoriteMeetup) => {},
removeFavorite: (meetupId) => {},
itemIsFavorite: (meetupId) => {}
});

export function FavoritesContextProvider(props) {
const [userFavorites, setUserFavorites] = useState([]);

function addFavoriteHandler(favoriteMeetup) {
setUserFavorites((prevUserFavorites) => {
return prevUserFavorites.concat(favoriteMeetup);
});
}

function removeFavoriteHandler(meetupId) {
setUserFavorites(prevUserFavorites => {
return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
});
}

function itemIsFavoriteHandler(meetupId) {
return userFavorites.some(meetup => meetup.id === meetupId);
}

const context = {
favorites: userFavorites,
totalFavorites: userFavorites.length,
addFavorite: addFavoriteHandler,
removeFavorite: removeFavoriteHandler,
itemIsFavorite: itemIsFavoriteHandler
};

return (
<FavoritesContext.Provider value={context}>
{props.children}
</FavoritesContext.Provider>
);
}

export default FavoritesContext;
```

2. Att använda sammanhanget gav mig ett fel i konsolen som var följande:

```shell
Uncaught TypeError: this.props.data.map is not a function
```

Hittade lösning där jag förtydligade varifrån informationen som behöver implementeras kommer och hur den ska implementeras. Se nedan:

- [Stackoverflow](https://stackoverflow.com/questions/30142361/react-js-uncaught-typeerror-this-props-data-map-is-not-a-function)

3.När man tilldelade ett värde till ingången gav det mig ett felmeddelande eller vilket jag kunde fixa genom att ändra det till placeholder.

```shell
Failed form propType: You provided a `value` prop to a form field without an `onChange` handler
```
Hittade lösning i:

- [Stackoverflow](https://stackoverflow.com/questions/43556212/failed-form-proptype-you-provided-a-value-prop-to-a-form-field-without-an-on)


4. I följande tutorial om Redux vs Context såg jag flera alternativ för att generera funktioner för att relatera beräkningarna av kvantitet och värde. Men jag försökte implementera dem men de verkade väldigt komplexa för mig till slut så jag bestämde mig för att inte implementera dem och försök att hitta en lösning nära som jag gjort i min programmering 1 project och bestämde att gör rakningar om min Cart JS inte i min context. Till exempel jag inte implementera :

```shell
removeProductFromCart = productId => {
    console.log('Removing product with id: ' + productId);
    const updatedCart = [...this.state.cart];
    const updatedItemIndex = updatedCart.findIndex(
      item => item.id === productId
    );

    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    };
    updatedItem.quantity--;
    if (updatedItem.quantity <= 0) {
      updatedCart.splice(updatedItemIndex, 1);
    } else {
      updatedCart[updatedItemIndex] = updatedItem;
    }
    setTimeout(() => {
      this.setState({ cart: updatedCart });
    }, 700);
  };

```
Länkar:

- [React redux vs Context](https://stackoverflow.com/questions/43556212/failed-form-proptype-you-provided-a-value-prop-to-a-form-field-without-an-on)
https://github.com/academind/react-redux-vs-context/blob/context/src/context/GlobalState.js

5. Grow i Tachyons (CardItem.js).

När du gör layout i butiken för att göra stilen använd Tachyons. När jag lägger till artiklarna i butiken via köpknappen var det nödvändigt att trycka på den 2 gånger och det fungerade inte så bra. 

Jag kunde inte förstå vad som hände och ta bort alternativet att växa och jag insåg att det genererade störningar i denna process så jag valde att också lägga till de återstående stilarna av css-moduler.

## Konklusionen

Projektet i allmänhet verkade ganska komplicerat att genomföra. Den första svårigheten jag stötte på var att kunna översätta Javascript-funktionerna som jag hade från mitt tidigare programmeringsprojekt_1 till React.

För att förstå hela processen sökte jag efter olika information om hur man utvecklade projektet i React, vilket jag tyckte var intressant eftersom jag bättre kunde förstå hur de olika delarna är sammanflätade inom projektet.

Även om det blev en svår process i slutändan är jag glad att jag kunde få implementeringen att fungera.

Det hjälpte mig mycket att se hur det globala sammanhanget fungerar i REACT-projekt och att förstå hur man kan komma åt informationen som finns där i resten av projektet.

Jag insåg också att min svaga punkt är javascript där jag tror att jag måste kunna träna mer för att kunna förstå det bättre och lättare kunna ställa in funktioner, speciellt när jag ställer in funktionsvillkor (if- else).

En annan aspekt som jag också tycker att jag borde lära mig att implementera är testerna med FireEvent eftersom det är svårt för mig när initialtillståndet är dynamisk information och inte fixerat.

Det har varit en erfarenhet som har hjälpt mig att analysera olika aspekter för att se var jag befinner mig i min kunskap, vad jag bör försöka förbättra och även se de positiva punkterna inom utbildningsprocessen.

