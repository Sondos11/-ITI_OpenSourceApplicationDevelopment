import ReactDom from 'react-dom/client';
import App from './App';
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
let root = ReactDom.createRoot(document.getElementById('root'))

root.render(<App/>);