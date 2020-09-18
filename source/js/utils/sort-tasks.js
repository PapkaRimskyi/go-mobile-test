export default function sortTasks(type, tasks) {
  switch (type) {
    case 'id':
      return tasks.sort((a, b) => a[type] - b[type]);
    case 'name':
    case 'date':
      return tasks.sort((a, b) => {
        if (a[type].length > b[type].length) {
          return 1;
        } if (a[type].length < b[type].length) {
          return -1;
        }
        return 0;
      });
    default:
      return tasks;
  }
}
