'use client'

import React, { useState, useTransition } from 'react'
import { addNote, deleteNote } from '../actions'
import { BookOpen, Plus, Trash2, Calendar } from 'lucide-react'

export default function NotesView({ islandId, initialNotes }: { islandId: number, initialNotes: any[] }) {
    const [pending, startTransition] = useTransition()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const cardThemes = [
        'bg-[#FDF6E2] border-[#F0E1B9] text-[#7A5B00]',
        'bg-[#F4EEF8] border-[#D5C6E3] text-[#5C3D6B]',
        'bg-[#FCE8E6] border-[#F2C4C0] text-[#8C3D38]',
        'bg-[#E6F4EA] border-[#C6E7D0] text-[#2D6A4F]',
    ]

    return (
        <div className="space-y-6 max-w-6xl">
            {/* Top Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-[#665773]">Journal Entries</span>
                        <span className="text-xs font-bold text-[#7A508C] bg-[#F4EEF8] px-2.5 py-1 rounded-full">{initialNotes.length} Saved</span>
                    </div>
                    <div className="w-full bg-[#F6F4F8] h-3 rounded-full overflow-hidden border border-[#E4DFEA]">
                        <div className="bg-gradient-to-r from-[#7A508C] to-[#9B77AD] h-full transition-all duration-500" style={{ width: `${Math.min(initialNotes.length * 20, 100)}%` }}></div>
                    </div>
                    <p className="text-[11px] text-[#93859E]">Jot down flower breeding blueprints & island designs 📖</p>
                </div>

                <div className="p-6 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs flex items-center justify-between">
                    <div className="space-y-1">
                        <span className="text-xs font-semibold text-[#665773]">Planner Vibe</span>
                        <h4 className="text-xl font-extrabold text-[#2A2030]">✏️ Master Architect</h4>
                        <p className="text-[11px] text-[#93859E]">Tom Nook's personal stationery set</p>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-[#F9F7FB] border border-[#EFEAF3] flex items-center justify-center text-xl">
                        🌿
                    </div>
                </div>

                <div className="p-6 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs flex items-center justify-between">
                    <div className="space-y-1">
                        <span className="text-xs font-semibold text-[#665773]">Total Storage</span>
                        <h4 className="text-xl font-extrabold text-[#2A2030]">Active Logs</h4>
                        <p className="text-[11px] text-[#93859E]">Synced with Neon PostgreSQL</p>
                    </div>
                </div>
            </div>

            {/* Main Form & Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Col: Create Note Form */}
                <div className="p-6 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs space-y-4">
                    <h3 className="font-bold text-base text-[#2A2030] flex items-center gap-2 border-b border-[#F0EBF4] pb-3">
                        <Plus className="w-4 h-4 text-[#7A508C]" /> New Journal Entry
                    </h3>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            if (!title.trim()) return
                            const formData = new FormData()
                            formData.append('title', title)
                            formData.append('content', content)
                            startTransition(async () => {
                                await addNote(islandId, formData)
                                setTitle('')
                                setContent('')
                            })
                        }}
                        className="space-y-3"
                    >
                        <div>
                            <label className="text-[11px] font-semibold text-[#665773] block mb-1">Title</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="e.g. Blue Rose Hybrid Layout"
                                className="w-full px-3.5 py-2 bg-[#F9F7FB] border border-[#E4DFEA] rounded-xl text-xs focus:outline-none focus:border-[#7A508C]"
                            />
                        </div>
                        <div>
                            <label className="text-[11px] font-semibold text-[#665773] block mb-1">Content</label>
                            <textarea
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder="Write down your island plans..."
                                rows={3}
                                className="w-full px-3.5 py-2 bg-[#F9F7FB] border border-[#E4DFEA] rounded-xl text-xs focus:outline-none focus:border-[#7A508C] resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={pending}
                            className="w-full py-2.5 bg-[#52435C] hover:bg-[#3D3044] text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer shadow-xs"
                        >
                            Save Entry
                        </button>
                    </form>
                </div>

                {/* Right 2 Cols: Notes Cards Grid */}
                <div className="lg:col-span-2 p-6 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs space-y-4">
                    <div className="flex justify-between items-center border-b border-[#F0EBF4] pb-4">
                        <h3 className="font-bold text-base text-[#2A2030] flex items-center gap-2">
                            <BookOpen className="w-4.5 h-4.5 text-[#7A508C]" /> Planning Journal
                        </h3>
                        <span className="text-xs text-[#93859E]">{initialNotes.length} entries total</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {initialNotes.length === 0 ? (
                            <p className="text-xs text-[#93859E] text-center py-8 col-span-2">No notes written yet. Add your first plan on the left!</p>
                        ) : (
                            initialNotes.map((note: any, index: number) => {
                                const themeClass = cardThemes[index % cardThemes.length]
                                return (
                                    <div key={note.id} className={`p-4 rounded-2xl border shadow-xs relative group flex flex-col justify-between space-y-2 transition-transform hover:-translate-y-0.5 ${themeClass}`}>
                                        <div className="space-y-1">
                                            <div className="flex justify-between items-start">
                                                <h4 className="font-bold text-xs tracking-tight">{note.title}</h4>
                                                <button
                                                    onClick={() => {
                                                        startTransition(async () => {
                                                            await deleteNote(note.id)
                                                        })
                                                    }}
                                                    className="opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer p-1 hover:bg-black/5 rounded-md"
                                                    title="Delete Note"
                                                >
                                                    <Trash2 className="w-3 h-3" />
                                                </button>
                                            </div>
                                            <p className="text-[11px] leading-relaxed opacity-90">{note.content}</p>
                                        </div>

                                        <div className="flex items-center justify-between pt-2 border-t border-black/5 text-[9px] opacity-75 font-medium">
                                            <span>Island Log</span>
                                            <span>Entry #{note.id}</span>
                                        </div>
                                    </div>
                                )
                            })
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}