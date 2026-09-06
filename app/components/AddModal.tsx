'use client'

import React, { useState, useTransition, useEffect } from 'react'
import { addTask, addResident } from '../actions'
import { Plus, X } from 'lucide-react'

interface AddModalProps {
    islandId: number
    externalOpen?: boolean
    defaultTab?: 'task' | 'resident'
    onClose?: () => void
}

export default function AddModal({ islandId, externalOpen, defaultTab = 'task', onClose }: AddModalProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [activeTab, setActiveTab] = useState<'task' | 'resident'>(defaultTab)
    const [pending, startTransition] = useTransition()

    // Sync with external open state if provided
    useEffect(() => {
        if (externalOpen !== undefined) {
            setIsOpen(externalOpen)
            if (defaultTab) setActiveTab(defaultTab)
        }
    }, [externalOpen, defaultTab])

    const handleClose = () => {
        setIsOpen(false)
        if (onClose) onClose()
    }

    return (
        <>
            {externalOpen === undefined && (
                <button
                    onClick={() => {
                        setActiveTab('task')
                        setIsOpen(true)
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-[#52435C] hover:bg-[#3D3044] text-white rounded-2xl text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                >
                    <Plus className="w-4 h-4" /> Add Item
                </button>
            )}

            {isOpen && (
                <div className="fixed inset-0 bg-[#2A2030]/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-3xl border border-[#E4DFEA] p-6 w-full max-w-md shadow-lg space-y-6 relative">
                        <div className="flex justify-between items-center border-b border-[#F0EBF4] pb-4">
                            <div className="flex gap-4">
                                <button
                                    onClick={() => setActiveTab('task')}
                                    className={`font-bold text-sm pb-1 border-b-2 transition-colors ${activeTab === 'task' ? 'border-[#7A508C] text-[#2A2030]' : 'border-transparent text-[#93859E]'}`}
                                >
                                    New Task
                                </button>
                                <button
                                    onClick={() => setActiveTab('resident')}
                                    className={`font-bold text-sm pb-1 border-b-2 transition-colors ${activeTab === 'resident' ? 'border-[#7A508C] text-[#2A2030]' : 'border-transparent text-[#93859E]'}`}
                                >
                                    New Resident
                                </button>
                            </div>
                            <button
                                onClick={handleClose}
                                className="text-[#93859E] hover:text-[#2A2030] cursor-pointer"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {activeTab === 'task' ? (
                            <form
                                action={async (formData) => {
                                    startTransition(async () => {
                                        await addTask(islandId, formData)
                                        handleClose()
                                    })
                                }}
                                className="space-y-4 text-sm"
                            >
                                <div>
                                    <label className="block text-xs font-semibold text-[#665773] mb-1">Task Title</label>
                                    <input
                                        name="title"
                                        required
                                        placeholder="e.g., Plant glowing moss"
                                        className="w-full px-3 py-2 bg-[#F6F4F8] border border-[#E4DFEA] rounded-xl text-[#2A2030] focus:outline-none focus:border-[#7A508C]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-[#665773] mb-1">Category</label>
                                    <input
                                        name="category"
                                        defaultValue="Daily"
                                        className="w-full px-3 py-2 bg-[#F6F4F8] border border-[#E4DFEA] rounded-xl text-[#2A2030] focus:outline-none focus:border-[#7A508C]"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={pending}
                                    className="w-full py-2.5 bg-[#52435C] hover:bg-[#3D3044] text-white font-medium rounded-xl text-xs transition-colors cursor-pointer"
                                >
                                    {pending ? 'Saving...' : 'Create Task'}
                                </button>
                            </form>
                        ) : (
                            <form
                                action={async (formData) => {
                                    startTransition(async () => {
                                        await addResident(islandId, formData)
                                        handleClose()
                                    })
                                }}
                                className="space-y-4 text-sm"
                            >
                                <div>
                                    <label className="block text-xs font-semibold text-[#665773] mb-1">Resident Name</label>
                                    <input
                                        name="name"
                                        required
                                        placeholder="e.g., Raymond"
                                        className="w-full px-3 py-2 bg-[#F6F4F8] border border-[#E4DFEA] rounded-xl text-[#2A2030] focus:outline-none focus:border-[#7A508C]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-[#665773] mb-1">Species</label>
                                    <input
                                        name="species"
                                        required
                                        placeholder="e.g., Cat"
                                        className="w-full px-3 py-2 bg-[#F6F4F8] border border-[#E4DFEA] rounded-xl text-[#2A2030] focus:outline-none focus:border-[#7A508C]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-[#665773] mb-1">Personality</label>
                                    <input
                                        name="personality"
                                        required
                                        placeholder="e.g., Smug"
                                        className="w-full px-3 py-2 bg-[#F6F4F8] border border-[#E4DFEA] rounded-xl text-[#2A2030] focus:outline-none focus:border-[#7A508C]"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={pending}
                                    className="w-full py-2.5 bg-[#52435C] hover:bg-[#3D3044] text-white font-medium rounded-xl text-xs transition-colors cursor-pointer"
                                >
                                    {pending ? 'Saving...' : 'Add Resident'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}