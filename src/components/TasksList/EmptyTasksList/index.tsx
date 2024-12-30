import clipboardImg from '@/assets/clipboard.png';

import styles from './styles.module.css';

export function EmptyTasksList() {
	return (
		<div className={styles['empty-tasks-list']}>
			<div>
				<img src={clipboardImg} alt="ícone de clipboard" />
				<div>
					<strong>Você ainda não tem tarefas cadastradas</strong>
					<span>Crie tarefas e organize seus itens a fazer</span>
				</div>
			</div>
		</div>
	);
}
