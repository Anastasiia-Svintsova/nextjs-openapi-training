import prisma from '@/utils/db';

const getTasks = async () => {
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return allTasks;
};

const PrismaExamplePage = async () => {
  const tasks = await getTasks();

  return (
    <div>
      <h1 className="text-7xl">Prisma example page</h1>

      {tasks.map((task) => (
        <h2 key={task.id} className="py-2 text-xl">
          {task.content}
        </h2>
      ))}
    </div>
  );
};

export default PrismaExamplePage;
