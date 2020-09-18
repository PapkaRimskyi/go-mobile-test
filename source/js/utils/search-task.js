export default function searchTask(searchWord, tasks) {
  if (searchWord) {
    return tasks.filter((task) => task.name.toUpperCase() === searchWord.toUpperCase());
  }
  return null;
}
