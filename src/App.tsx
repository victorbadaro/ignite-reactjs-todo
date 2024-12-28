import { PlusCircle } from '@phosphor-icons/react';
import { type FormEvent, useState } from 'react';
import { Header } from './components/Header';
import { TasksList } from './components/TasksList';
import { useTasks } from './hooks/useTasks';

import styles from './App.module.css';

export function App() {
	const [description, setDescription] = useState('');
	const { createTask } = useTasks();

	function handleCreateTask(event: FormEvent) {
		event.preventDefault();

		createTask(description);
		setDescription('');
	}

	return (
		<>
			<Header />

			<main className={styles.wrapper}>
				<form onSubmit={handleCreateTask}>
					<input
						type="text"
						name="description"
						placeholder="Adicione uma nova tarefa"
						value={description}
						onChange={(event) => setDescription(event.target.value)}
					/>

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
