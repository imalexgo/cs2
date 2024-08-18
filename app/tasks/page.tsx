'use client'

import TasksPage from '@/app/pages/tasksPage';

export default function Home() {
    return (
  
      <main className="bg-[#212328] h-full overflow-y-auto flex flex-col justify-between px-5 pt-6 pb-12 sm:p-6">
        <TasksPage />
      </main>
  
    );
  }
  