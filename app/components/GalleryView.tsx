'use client'

import React, { useState, useTransition } from 'react'
import { addGalleryPhoto, deleteGalleryPhoto } from '../db-actions'
import { Image as ImageIcon, Calendar, Plus, X } from 'lucide-react'

export default function GalleryView({ islandId, islandName, initialPhotos }: { islandId: number, islandName: string, initialPhotos: any[] }) {
    const [filter, setFilter] = useState('All')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [pending, startTransition] = useTransition()

    const [newTitle, setNewTitle] = useState('')
    const [newTag, setNewTag] = useState('Scenery')
    const [newUrl, setNewUrl] = useState('')

    const handleAddPhoto = (e: React.FormEvent) => {
        e.preventDefault()
        if (!newTitle || !newUrl) return

        startTransition(async () => {
            await addGalleryPhoto(islandId, newTitle, newTag, newUrl)
            setNewTitle('')
            setNewUrl('')
            setIsModalOpen(false)
        })
    }

    const filteredMemories = initialPhotos.filter(m => {
        if (filter === 'All') return true
        return m.tag === filter
    })

    return (
        <div className="space-y-6 max-w-6xl relative">
            {/* Top Stat Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-[#665773]">Album Storage</span>
                        <span className="text-xs font-bold text-[#7A508C] bg-[#F4EEF8] px-2.5 py-1 rounded-full">{initialPhotos.length} Snaps Saved</span>
                    </div>
                    <div className="w-full bg-[#F6F4F8] h-3 rounded-full overflow-hidden border border-[#E4DFEA]">
                        <div className="bg-gradient-to-r from-[#7A508C] to-[#9B77AD] h-full transition-all duration-500" style={{ width: `${Math.min((initialPhotos.length / 50) * 100, 100)}%` }}></div>
                    </div>
                    <p className="text-[11px] text-[#93859E]">Capture your favorite moments around {islandName} 📸</p>
                </div>

                <div className="p-6 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs flex items-center justify-between">
                    <div className="space-y-1">
                        <span className="text-xs font-semibold text-[#665773]">Camera Mode</span>
                        <h4 className="text-xl font-extrabold text-[#2A2030]">✨ Pro Island Lens</h4>
                        <p className="text-[11px] text-[#93859E]">Filters and frames unlocked</p>
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-4 py-3 bg-[#52435C] hover:bg-[#3D3044] text-white rounded-2xl text-xs font-semibold transition-colors cursor-pointer flex items-center gap-2 shadow-xs"
                    >
                        <Plus className="w-4 h-4" /> Add Snap
                    </button>
                </div>

                <div className="p-6 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs flex items-center justify-between">
                    <div className="space-y-1">
                        <span className="text-xs font-semibold text-[#665773]">Filter Album</span>
                        <div className="flex gap-1.5 pt-1">
                            {['All', 'Scenery', 'Residents'].map(cat => (
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

            {/* Main Photo Grid */}
            <div className="p-6 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs space-y-4">
                <div className="flex justify-between items-center border-b border-[#F0EBF4] pb-4">
                    <h3 className="font-bold text-base text-[#2A2030] flex items-center gap-2">
                        <ImageIcon className="w-4.5 h-4.5 text-[#7A508C]" /> Pocket Camp Memories
                    </h3>
                    <span className="text-xs text-[#93859E]">{filteredMemories.length} photos displayed</span>
                </div>

                {initialPhotos.length === 0 ? (
                    <p className="text-xs text-[#93859E] text-center py-10">No memories captured yet. Click "Add Snap" to start your gallery!</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredMemories.map(photo => (
                            <div key={photo.id} className="p-3 bg-[#F9F7FB] rounded-3xl border border-[#EFEAF3] shadow-xs space-y-3 group relative hover:border-[#D5C6E3] transition-all">
                                <button
                                    disabled={pending}
                                    onClick={() => {
                                        startTransition(async () => {
                                            await deleteGalleryPhoto(photo.id)
                                        })
                                    }}
                                    className="absolute top-5 right-5 w-7 h-7 bg-black/60 hover:bg-rose-600 text-white rounded-full flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer z-10 shadow-sm"
                                    title="Delete Snap"
                                >
                                    <X className="w-3.5 h-3.5" />
                                </button>

                                <div className="w-full h-44 rounded-2xl overflow-hidden relative shadow-inner bg-[#EAE2F0]">
                                    <img
                                        src={photo.url}
                                        alt={photo.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="px-1 flex justify-between items-start">
                                    <div>
                                        <h4 className="font-bold text-xs text-[#2A2030]">{photo.title}</h4>
                                        <p className="text-[10px] text-[#93859E] flex items-center gap-1 mt-0.5">
                                            <Calendar className="w-2.5 h-2.5" /> {photo.date}
                                        </p>
                                    </div>
                                    <span className="text-[10px] bg-[#EAE2F0] text-[#7A508C] font-semibold px-2 py-0.5 rounded-full">
                                        {photo.tag}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Add Photo Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
                    <div className="max-w-md w-full bg-white rounded-3xl p-6 border border-[#E4DFEA] shadow-xl space-y-4">
                        <div className="flex justify-between items-center border-b border-[#F0EBF4] pb-3">
                            <h3 className="font-extrabold text-sm text-[#2A2030]">Capture New Island Snap 📸</h3>
                            <button onClick={() => setIsModalOpen(false)} className="text-[#93859E] hover:text-[#2A2030] cursor-pointer">
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        <form onSubmit={handleAddPhoto} className="space-y-4">
                            <div>
                                <label className="text-xs font-semibold text-[#665773] block mb-1">Photo Title</label>
                                <input
                                    type="text"
                                    required
                                    value={newTitle}
                                    onChange={(e) => setNewTitle(e.target.value)}
                                    placeholder="e.g. Secret Beach Sunset"
                                    className="w-full px-4 py-3 bg-[#F9F7FB] border border-[#E4DFEA] rounded-2xl text-xs focus:outline-none focus:border-[#7A508C]"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-[#665773] block mb-1">Category</label>
                                <select
                                    value={newTag}
                                    onChange={(e) => setNewTag(e.target.value)}
                                    className="w-full px-4 py-3 bg-[#F9F7FB] border border-[#E4DFEA] rounded-2xl text-xs focus:outline-none focus:border-[#7A508C]"
                                >
                                    <option value="Scenery">Scenery</option>
                                    <option value="Residents">Residents</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-[#665773] block mb-1">Image URL (Unsplash / Direct Link)</label>
                                <input
                                    type="url"
                                    required
                                    value={newUrl}
                                    onChange={(e) => setNewUrl(e.target.value)}
                                    placeholder="https://images.unsplash.com/..."
                                    className="w-full px-4 py-3 bg-[#F9F7FB] border border-[#E4DFEA] rounded-2xl text-xs focus:outline-none focus:border-[#7A508C]"
                                />
                            </div>

                            <div className="flex gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="flex-1 py-3 bg-[#F6F4F8] hover:bg-[#EAE2F0] text-[#665773] rounded-2xl text-xs font-semibold transition-colors cursor-pointer"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={pending}
                                    className="flex-1 py-3 bg-[#52435C] hover:bg-[#3D3044] text-white rounded-2xl text-xs font-semibold transition-colors cursor-pointer disabled:opacity-50"
                                >
                                    {pending ? 'Saving...' : 'Save Snap'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}