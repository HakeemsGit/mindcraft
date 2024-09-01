export class TaskQueue {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    async executeTasks(agent) {
        while (this.tasks.length > 0) {
            const task = this.tasks.shift();
            console.log(`Executing task: ${task}`);
            await agent.handleMessage('system', task);
        }
    }

    clearTasks() {
        this.tasks = [];
    }

    getTasks() {
        return this.tasks;
    }
}
