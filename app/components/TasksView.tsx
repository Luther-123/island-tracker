'use client'

import React, { useState, useTransition } from 'react'
import { addTask, deleteTask, toggleTask } from '../actions'
import { CheckSquare, Calendar as CalendarIcon, Trash2, CheckCircle2, Clock, Plus } from 'lucide-react'

export default function TasksView({ islandId, initialTasks }: { islandId: number, initialTasks: any[] }) {
    const [pending, startTransition] = useTransition()
    const [filter, setFilter] = useState('All')
    const [newTaskTitle, setNewTaskTitle] = useState('')

    const filteredTasks = initialTasks.filter(task => {
        if (filter === 'All') return true
        return task.category === filter
    })

    const completedCount = initialTasks.filter(t => t.current >= t.target).length
    const completionPercentage = initialTasks.length > 0 ? Math.round((completedCount / initialTasks.length) * 100) : 0

    return (
        <div className="space-y-6 max-w-6xl">
            {/* Top Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-[#665773]">Daily Chore Progress</span>
                        <span className="text-xs font-bold text-[#7A508C] bg-[#F4EEF8] px-2.5 py-1 rounded-full">{completionPercentage}%</span>
                    </div>
                    <div className="w-full bg-[#F6F4F8] h-3 rounded-full overflow-hidden border border-[#E4DFEA]">
                        <div className="bg-gradient-to-r from-[#7A508C] to-[#9B77AD] h-full transition-all duration-500" style={{ width: `${completionPercentage}%` }}></div>
                    </div>
                    <p className="text-[11px] text-[#93859E]">{completedCount} of {initialTasks.length} tasks completed today ✨</p>
                </div>

                <div className="p-6 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs flex items-center justify-between">
                    <div className="space-y-1">
                        <span className="text-xs font-semibold text-[#665773]">Island Streak</span>
                        <h4 className="text-2xl font-extrabold text-[#2A2030]">🔥 5 Days</h4>
                        <p className="text-[11px] text-[#93859E]">Keep visiting Melody Isle daily!</p>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-[#F9F7FB] border border-[#EFEAF3] flex items-center justify-center text-xl">
                        🏝️
                    </div>
                </div>

                <div className="p-6 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs flex items-center justify-between">
                    <div className="space-y-1">
                        <span className="text-xs font-semibold text-[#665773]">Active Category</span>
                        <div className="flex gap-1.5 pt-1">
                            {['All', 'Daily', 'Milestone'].map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-3 py-1 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${filter === cat ? 'bg-[#52435C] text-white' : 'bg-[#F6F4F8] text-[#665773] hover:bg-[#EAE2F0]'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Checklist */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 p-6 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs space-y-4">
                    <div className="flex justify-between items-center border-b border-[#F0EBF4] pb-4">
                        <h3 className="font-bold text-base text-[#2A2030] flex items-center gap-2">
                            <CheckSquare className="w-4.5 h-4.5 text-[#7A508C]" /> Task Checklist
                        </h3>
                        <span className="text-xs text-[#93859E]">{filteredTasks.length} items shown</span>
                    </div>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            if (!newTaskTitle.trim()) return
                            const formData = new FormData()
                            formData.append('title', newTaskTitle)
                            formData.append('category', 'Daily')
                            formData.append('target', '1')
                            startTransition(async () => {
                                await addTask(islandId, formData)
                                setNewTaskTitle('')
                            })
                        }}
                        className="flex gap-2"
                    >
                        <input
                            type="text"
                            value={newTaskTitle}
                            onChange={(e) => setNewTaskTitle(e.target.value)}
                            placeholder="Add a new island chore..."
                            className="flex-1 px-4 py-2.5 bg-[#F9F7FB] border border-[#E4DFEA] rounded-2xl text-xs focus:outline-none focus:border-[#7A508C]"
                        />
                        <button
                            type="submit"
                            disabled={pending}
                            className="px-4 py-2.5 bg-[#52435C] hover:bg-[#3D3044] text-white rounded-2xl text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1 shadow-xs"
                        >
                            <Plus className="w-3.5 h-3.5" /> Add
                        </button>
                    </form>

                    <div className="space-y-3 pt-2">
                        {filteredTasks.length === 0 ? (
                            <p className="text-xs text-[#93859E] text-center py-8">No tasks found in this category.</p>
                        ) : (
                            filteredTasks.map((task: any) => {
                                const isDone = task.current >= task.target
                                return (
                                    <div key={task.id} className="p-4 bg-[#F9F7FB] rounded-2xl border border-[#EFEAF3] flex items-center justify-between group transition-all hover:border-[#D5C6E3]">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-xl bg-[#EAE2F0] flex items-center justify-center text-[#7A508C]">
                                                {isDone ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Clock className="w-4 h-4" />}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-xs text-[#2A2030]">{task.title}</h4>
                                                <span className="text-[10px] text-[#93859E] bg-[#E4DFEA]/60 px-2 py-0.5 rounded-md uppercase font-medium">{task.category}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            {/* Interactive Toggle Button */}
                                            <button
                                                onClick={() => {
                                                    startTransition(async () => {
                                                        await toggleTask(task.id, task.current, task.target)
                                                    })
                                                }}
                                                className={`text-xs font-semibold px-3 py-1.5 rounded-xl transition-colors cursor-pointer shadow-xs ${isDone
                                                        ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                                                        : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                                                    }`}
                                                title="Click to toggle status"
                                            >
                                                {isDone ? 'Done' : 'Pending'}
                                            </button>

                                            <button
                                                onClick={() => {
                                                    startTransition(async () => {
                                                        await deleteTask(task.id)
                                                    })
                                                }}
                                                className="text-[#93859E] hover:text-[#5C3D6B] opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                                                title="Delete Task"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        )}
                    </div>
                </div>

                {/* Calendar Widget */}
                <div className="p-6 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs space-y-4">
                    <div className="flex justify-between items-center border-b border-[#F0EBF4] pb-3">
                        <h3 className="font-bold text-sm text-[#2A2030] flex items-center gap-2">
                            <CalendarIcon className="w-4 h-4 text-[#7A508C]" /> September 2026
                        </h3>
                        <span className="text-[10px] bg-[#F4EEF8] text-[#7A508C] font-semibold px-2 py-0.5 rounded-md">Autumn</span>
                    </div>

                    <div className="grid grid-cols-7 gap-1 text-center text-xs">
                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                            <span key={day} className="text-[#93859E] font-medium py-1">{day}</span>
                        ))}
                        {Array.from({ length: 30 }).map((_, i) => {
                            const dayNum = i + 1
                            const isToday = dayNum === 20
                            const isActiveLog = [5, 12, 18, 20].includes(dayNum)
                            return (
                                <div
                                    key={dayNum}
                                    className={`py-2 rounded-xl text-[11px] font-medium flex flex-col items-center justify-center transition-colors ${isToday
                                            ? 'bg-[#7A508C] text-white font-bold shadow-xs'
                                            : isActiveLog
                                                ? 'bg-[#EAE2F0] text-[#7A508C]'
                                                : 'text-[#665773] hover:bg-[#F6F4F8]'
                                        }`}
                                >
                                    {dayNum}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}