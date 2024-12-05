//React Assessment 4th Dec-2024

//1. create a webpack setup, index html and one css file to show css in next questions
//2. how react renders dom in conservative manner - explain

// React maintains a lightweight copo of the real DOM called Virtual DOM, when there change in component, react updates the Virtual DOM first. 
// After modifying the Virtual DOM, React compares the updated Virtual DOM with previsous snapshot to ddetects the minimal number of change necessary to bring real DOM up to date.
// React uses batching to group multiple updates together to avoid unnecessary updates, React batches changes and applies in one go.
// Through the reconciliation process, React calculates the differences (diffs) between the previous and the new Virtual DOM. It determines exactly which elements have changed, 
// Only the parts of the real DOM that require an update are modified, which is what makes React’s rendering process efficient and conservative in terms of avoiding unnecessary operations.
// By using these, React renders in conservative manner to minimize direct manipulation of real DOM.

//3. create a class component named - Success and show some quotes (messages) on success in it
//4. create a functional component SuccessChild, make it child of Success and pass Name and Address to it from Success
//5. create SuccessStory as another component, pass this as props in SuccessChild from Success component
//6. create UserSignIn component using uncontrolled way, should be class component
//7. explain how virtual dom works 
//Virtual DOM is a lightweight copy of the real DOM, When create a React component, React keeps a representation of it in Virtual DOM, during the initial render, React creates a virtual version of the DOM
//elements and renders them to the real DOM. When state or props of component change, React does not update the real DOM immediately, it updteas the Virtual DOM first. Virtual DOM use diffing algorithm to
//determine what need to be updated, and minimal the changes to the real DOM.
//8. pass a random value from SuccessStory component back to Success
//9. Create a class component and show all the life cycle hooks/methods
//10. Make a state change, the state should be duplicate and then stop it to call render method to improve efficiency.