import { PlusCircle } from '@phosphor-icons/react';
import type { FormEvent } from 'react';
import { Header } from './components/Header';
import { TasksList } from './components/TasksList';

import styles from './App.module.css';

export function App() {
	function handleCreateTask(event: FormEvent) {
		event.preventDefault();
	}

	return (
		<>
			<Header />

			<main className={styles.wrapper}>
				<form onSubmit={handleCreateTask}>
					<input type="text" placeholder="Adicione uma nova tarefa" />

					<button type="submit">
						<span>Criar</span>
						<PlusCircle size={16} weight="bold" />
					</button>
				</form>

				<TasksList />
			</main>
		</>
	);
}
