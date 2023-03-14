const heading = React.createElement(
    'h1',
    {
        id: 'title',
    },
    'Heading 1'
);
const heading2 = React.createElement(
    'h1',
    {
        id: 'title',
    },
    'Heading 2'
);

const container = React.createElement(
    'div',
    {
        id: 'container',
    },
    [heading1, heading2]
);
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById('root'));
//Passing the react element inside the root
//asyc and defer difference is HW
root.render(container);

console.log(`Hello`)