## Task

I created two json files, there are names and numbers and in the other files there are ages.
Firstly I load two json files, If they have same id, I merge them into one array.
Then I filter them. If the employee is younger than 30 years old, I prepere html for it,
Finally I print to the page.

In order to run, you may need to install http-server (globally)

This command will start http-server, so we can load json files into the page without problem
```
npm start
```

For the development, in order to compile js file
```
npm run webpack
```


## Give a few reasons why separating state is useful

I think, separating state is useful because we would have new layers or components. Let me give an example; In React we separate the state and lifecycle methods from the component. So we have presentational (dumb) and container (smart) components. This approach allows us to have better usability of components, logic is separated from the design part. State can easily be tested.

## Are there benefits to using ES6 classes and If so, what are they?

Using ES6 classes are mostly syntactic sugar. Syntax become simpler and less error prone. It is much easier set up inheritance and easy to read for the new team members. Using ES6 classes makes code more self documenting as well.

## What is immutability? How can this be useful?

An immutable object is an object whose state cannot be modified after it is created. When we have immutable object and verify its state, we know it will always remain same. No other things in the application will be able to change it. So data handling is safe. That is also good for we won’t have any synchronisation issues when we need them. I started to use immutable objects after I started to learn React and Redux. I pass new states by using the current state through pure functions to create a new object states. This approach allows us to reverse the state as well.

## What is the spread operator for?

I use spread operator (…) mostly for destructuring in my React projects as well as other node js applications. We can easily extract the information into variables. It also offers easy ways for arrays when you need to copy / combine arrays. It is also helpful to break words into letters.
