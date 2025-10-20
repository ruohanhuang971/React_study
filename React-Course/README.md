Source code from: https://github.com/jonasschmedtmann/ultimate-react-course

note: using _vite_ & _typescript_ instead of _create-react-app_ & _javascript_

-   Project 1: Pizza menu
    -   use map to render list of components
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
