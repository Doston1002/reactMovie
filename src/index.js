import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/app'
import './index.scss'
import Provider from './action'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Provider>
		<App />
		</Provider>
	</React.StrictMode>
)
