/**
 * 
 * <div>
*       <div id="parent">
               <div id="child">
                    <h1>i Am a h1 tag</h1>
                    <h2>i Am a h2 tag</h2>
               </div>
               <div id="child2">
                    <h1>i Am a h1 tag</h1>
                    <h2>i Am a h2 tag</h2>
               </div>
        </div>       


 * ReactElement(Object) => HTML(Browser UnderStand)
 * 
 * **/


const parent =
    React.createElement('div',
        { id: 'parent' },
        [React.createElement('div', { id: 'child' },
            [
                React.createElement('h1', {}, "I am an h1 tag"),
                React.createElement('h2', {}, "I am an h2 tag")
            ]),
        React.createElement('div', { id: 'child2' },
            [
                React.createElement('h1', {}, "I am an h1 tag from child 2"),
                React.createElement('h2', {}, "I am an h2 tag from child 2")
            ]),
        ]
    );

//JSX


// const head = React.createElement('h1', { id: "head" }, 'Hello world from React');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent); //putting the paren class into root tag.