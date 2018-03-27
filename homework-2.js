const React = {
  createElement: (tag, props = {}, children = []) => {
    const element = document.createElement(tag);
    
    Object.keys(props).forEach(key => {
      let value = props[key];
      
      if (typeof value === 'object') {
        Object.keys(value).forEach(styleKey => {
          element.style[styleKey] = value[styleKey]
        })
      } else {
        element.setAttribute(key, value)
      }
    });
    
    [].concat(children).forEach(child => {
      if (typeof child === 'string') {
        element.innerHTML += child;
      } else {
        element.appendChild(child);
      }  
    })
    return element;
  }, 
  render: (element, root) => {
    root.appendChild(element);
  }
}

const app = 
  React.createElement('div', { style: { backgroundColor: 'red' } }, [
    React.createElement('span', undefined, 'Hello world'),
    React.createElement('br'),
    'This is just a text node',
    React.createElement('div', { textContent: 'Text content' }),
  ]);

const root = document.getElementById('root');

React.render(app, root);
