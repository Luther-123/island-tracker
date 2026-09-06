'use client'

import React, { useTransition } from 'react'
import { deleteTask } from '../actions'
import { CheckCircle2, Clock, Trash2 } from 'lucide-react'

export default function TaskList({ initialTasks }: { initialTasks: any[] }) {
    const [pending, startTransition] = useTransition()

    return (
        <div className="p-5 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs space-y-3">
            {initialTasks.length === 0 ? (
                <p className="text-xs text-[#93859E] text-center py-4">No tasks found. Add an island chore!</p>
            ) : (
                initialTasks.map((task: any) => {
                    const isDone = task.current >= task.target || task.status === 'Done'
                    return (
                        <div key={task.id} className="p-3 bg-[#F9F7FB] rounded-2xl border border-[#EFEAF3] flex items-center justify-between group transition-all hover:border-[#D5C6E3]">
                            <div className="flex items-center gap-2.5">
                                <div className="w-7 h-7 rounded-xl bg-[#EAE2F0] flex items-center justify-center text-[#7A508C]">
                                    {isDone ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <Clock className="w-3.5 h-3.5" />}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-xs text-[#2A2030]">{task.title}</h4>
                                    <span className="text-[9px] text-[#93859E] uppercase font-medium">{task.category}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-xl ${isDone ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                                    {isDone ? 'Done' : 'Pending'}
                                </span>
                                <button
                                    onClick={() => {
                                        startTransition(async () => {
                                            await deleteTask(task.id)
                                        })
                                    }}
                                    className="text-[#93859E] hover:text-[#5C3D6B] opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                                    title="Delete Task"
                                >
                                    <Trash2 className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </div>
                    )
                })
            )}
        </div>
    )
}