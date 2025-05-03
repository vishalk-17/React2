import React from "react";
import ReactDOM from "react-dom/client";
//const element= React.createElement("h1",{id:"first",className:"Rahul", style:{backgroundColor:"blue",fontSize:"30px",color:"pink"}},"hello coder Army");
//const element2= React.createElement("h2",{id:"first",className:"Rahul", style:{backgroundColor:"blue",fontSize:"30px",color:"red"}},"vishal");
//const div1 = React.createElement('div',{},[element,element2]);
//const roots = ReactDOM.createRoot(document.getElementById('root'));
//roots.render(div1);



// jsx: javaScript xml : html code direct js ke ander likh sakta ho

//const newElement=<h1>Hello code Army</h1>;  // babel jsx code ko convert krta hai react me  

/*const newElement=
(
<div>
          <h1>Hello code Army</h1>
          <h2>vishal kumar sah</h2>
</div>
)*/

//jsx: js ke expression

const names="rohit";
const obj={
    age:23,
    salary:60

}

const obj2={
    backgroundColor:"black",
    color:"pink",
    fontSize:"30px"
}
//react element
const newElement=
(
<>
          <h1 id="first" className="second">Hello code Army {names}</h1>
          <h2 style={obj2}>vishal kumar sah{obj.age}</h2>
</>
)

//jsx=> React.createElement()=>react element( js object)=>html code




// React component
// function based component

function greet(){
    return <h1>Bhai kaisa hai</h1>
};

const newElement2=greet();


const meet = () => <h2>ritik</h2>;

const b = meet();
const c = greet();
const d = <>{greet()}{meet()}</>


const roots=ReactDOM.createRoot(document.getElementById('root'));
//roots.render(newElement);
//roots.render(newElement2);
//roots.render(b);
roots.render(d);



