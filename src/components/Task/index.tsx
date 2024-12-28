import { CheckCircle, Circle, Trash } from '@phosphor-icons/react';
import { useState } from 'react';

import styles from './styles.module.css';

export function Task() {
	const [isTaskDone, setIsTaskDone] = useState(false);

	function handleCheckTask() {
		setIsTaskDone((prev) => !prev);
	}

	return (
		<div className={styles.task}>
			<button type="button" onClick={handleCheckTask}>
				{isTaskDone ? <CheckCircle size={17} weight="fill" color="#5e60ce" /> : <Circle size={17} weight="bold" color="#4ea8de" />}
			</button>
			<p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
			<button type="button">
				<Trash size={14} />
			</button>
		</div>
	);
}
