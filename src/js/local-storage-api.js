export function saveTask(data) {
  const array = getTasks() || [];
  array.push(data);
  localStorage.setItem('tasks', JSON.stringify(array));
}

export function getTasks() {
  return JSON.parse(localStorage.getItem('tasks'));
}

export function deleteTask(id) {
  const array = getTasks() || [];
  const filtered = array.filter(task => task.id !== id);
  localStorage.setItem('tasks', JSON.stringify(filtered));
}
