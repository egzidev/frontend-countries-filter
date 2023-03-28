# Part 2 - Frontend Questions related to Filter.

## Questions:

1. What is the difference between Component and PureComponent? give an
   example where it might break my app.
2. Context + ShouldComponentUpdate might be dangerous. Can think of why is
   that?
3. Describe 3 ways to pass information from a component to its PARENT.
4. Give 2 ways to prevent components from re-rendering.
5. What is a fragment and why do we need it? Give an example where it might
   break my app.
6. Give 3 examples of the HOC pattern.
7. what's the difference in handling exceptions in promises, callbacks and
   async...await.
8. How many arguments does setState take and why is it async.
9. List the steps needed to migrate a Class to Function Component.
10. List a few ways styles can be used with components.
11. How to render an HTML string coming from the server.

## Answers:

1. **PureComponent** from the word name is showing us that does not do the same job as **Component**, it skips
   re-renders for props and state. Component always re-renders when state changes.
2. Context and ShouldComponentUpdate together are dangerous because the method checks if the context object has changed
   the reference but not the value. ShouldComponentUpdate re-renders when is checking the current state and props to the
   previous ones but the Content does not need to pass props down manually.
3. The 3 ways of passing the information from component to it's Parent are:
   * Callbacks
   * Props
   * Context
   * Redux
4. Two ways are PureComponent where I explained above why and how, and React.memo for function components to memoize the result of the component.
5. Usually the Fragment before using this <></> we used `<Fragment></Fragment>`, but since we started to use Hooks they presented the new way of calling fragment without writing down. I usually use the fragment in order to wrap all the elements when there is no element like a parent, so I use to group multiple elements
Example where the app might break:

6. In my previous jobs I kind of create some HOC to help to team with:
   * withAuth - I add authentication logic to component by wrapping with the component that check if the user is logged in and redirect to login page if it's not
   * withLoading - I add loading spinner while data is being fetched
   * withAuthLayout - I add the layout where user can see only when is logged in
7. I think in promise we use try and catch, in callbacks are as a first argument and async,wait errors are caught with try and catch.
8. Set state takes two arguments get and set for example: users, setUsers. The setState is async more for performance inside of browser.
9. Usually I go with this list:
   * Review the class component
   * Create a copy of the class component
   * Remove the construction method
   * Remove the **this** in file
   * Declare in different way the state compare with class component state
   * Replaces component DidMount, DidUpdate and WillUnmount with Hooks that is useEffect
   * Render method need to remove
   * Test the new function component
   * Refactor the code if needed
10. These are common ones: Css Stylesheet, inline styling, css modules and styled components.
11. I already use **dangerouslySetInnerHTML** inside the file AutocompleteList at line 25:

```typescript jsx
  <li
    key={index}
    onClick={() => handleItemClick(country.name.common, country)}
    dangerouslySetInnerHTML={{
        // use dangerouslySetInnerHTML to render the highlighted text
        __html: country.name.common.replace(
            new RegExp(`(${searchCountries})`, 'gi'),
            "<span class='countries-autocomplete__match'>$1</span>"
        ),
    }}
/>
  ```

