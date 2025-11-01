Source code from: https://github.com/jonasschmedtmann/ultimate-react-course

note: using _vite_ & _typescript_ instead of _create-react-app_ & _javascript_

-   Project 2: Progress tracker
    -   useState()
-   Project 3: Travel list
    -   data can only be passed onto from parent to child
    -   State:
        -   internal data owned by component (component's memory)
        -   updated by component itself -> update cause component to re-render
    -   Props:
        -   external data owned by parent component
        -   similar to function parameters: passed unto child
            -   used by parents to configure child components
        -   read-only
        -   receiving new props cause component to re-render -> usually when
            parent's state is updated
-   Project: Use Popcorn
    -   Combine different components using the children props
    -   use case: create highly reusable and flexible components (or explicit
        elements), fix prop drilling

## **Components vs instances vs elements:**

    -   component:
        -   function that return React elements
        -   blueprint
    -   component instance:
        -   created when components are "used" when React calls the component
            function
        -   Actual "physical" manifestation of a component in the component tree
        -   has its own states and props
        -   has a lifecycle (born -> live -> die)
    -   react element:
        -   react of function calls (JSX convert to React.createElement()
            function calls)
        -   info necessary to create DOM elements
    -   DOM elements:
        -   actual visual representation of the component instance in the
            browser

## **React displaying process**

1. trigger: happens only on initial render or start update
2. Render phase (async):
    - doesn't produce visual output
    - call component function -> create updated react elements which are placed
      in a new virtual DOM
    - render a component also render all its child components (because react
      doesn't know which children will be affected)
    - virtual DOM is reconcile with the current fiber tree (representation
      before update)
        - try to reuse as much as possible
    - end with a updated fiber tree and a list of DOM updates
3. Commit phase (synchronous): actually update the DOM 4: Browser paint: update
   UI on screen

## **Two types of logic in react components**:

1. Render logic:
    - describe how components look like
    - executed every time component render
    - rule:
        - render logic must be pure:
            - can't preform network requests (API calls)
            - can't state timer
            - can't use DOM API
            - can't mutate objects or variables outside of function scope (can't
              mutate props)
            - can't update date/ref (infinite loop)
2. Event handler functions
    - executed as consequence of a event
    - code does thing: update state, perform HTTP request, read input field,
      navigate to another page, etc

## **Side effect can be made in...**

-   Event handlers:
    -   triggered by events: onClick, onSubmit, etc.
-   Effects:
    -   triggered by rendering
    -   write code that will run at different moments of the component's life
        cycle
        -   mount, rerender, or unmount
