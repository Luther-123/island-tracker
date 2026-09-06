'use client'

import React, { useTransition } from 'react'
import { deleteNote } from '../actions'
import { X, BookOpen, Trash2 } from 'lucide-react'

export default function NotesList({ initialNotes }: { initialNotes: any[] }) {
    const [pending, startTransition] = useTransition()

    return (
        <div className="p-5 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs space-y-3">
            {initialNotes.length === 0 ? (
                <p className="text-xs text-[#93859E] text-center py-4">No notes added yet. Jot down your island plans!</p>
            ) : (
                initialNotes.map((note: any) => (
                    <div key={note.id} className="p-3 bg-[#F9F7FB] rounded-2xl border border-[#EFEAF3] relative group space-y-1">
                        <div className="flex justify-between items-start">
                            <h4 className="font-semibold text-xs text-[#2A2030]">{note.title}</h4>
                            <button
                                onClick={() => {
                                    startTransition(async () => {
                                        await deleteNote(note.id)
                                    })
                                }}
                                className="text-[#93859E] hover:text-[#5C3D6B] opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                            >
                                <Trash2 className="w-3.5 h-3.5" />
                            </button>
                        </div>
                        <p className="text-[11px] text-[#665773]">{note.content}</p>
                    </div>
                ))
            )}
        </div>
    )
}