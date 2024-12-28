import { createRoot } from 'react-dom/client';
import { App } from './App';
import { TasksProvider } from './contexts/TasksContext';

import './index.css';

const container = document.getElementById('root');

createRoot(container!).render(
	<TasksProvider>
		<App />
	</TasksProvider>
);
