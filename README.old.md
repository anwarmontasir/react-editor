<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> React Editor
 ===
 
 ## Description
 
Simple "get started" react assignment. Use [`create-react-app`](https://github.com/facebookincubator/create-react-app) 
to get up and running.
 
Create a WYSIWYG editor that allows user to set properties 
and those changes are reflected in the display:
 
![image](https://cloud.githubusercontent.com/assets/478864/26072382/2249f0c6-3960-11e7-9d7f-d5bc9e283fd3.png)
 
You should aim to add 5-10 different settings the user can change.
 
For this assignment:
 
* You can stick with a single `App` component (feel free to try and split into multiple components)
* Initialize state using `this.state = {}` in the constructor (don't forget to call `super()`
* Write JSX in the `render` method of the `App` component
  * Use `this.state.<name of state>` to access state values
  * Use `e => { this.someMethod(e.target.value) }` (or whatever you need from the event object) to call
  a method you create on the component that in turn calls `this.setState({ prop: newValue })` to update the value
  
## Rubric
  
* Works *2.5pts*
* Curiousity/Going Beyond What we did in class *5pts*
* Clean-up stuff you didn't use from `create-react-app` default *2.5pts*
