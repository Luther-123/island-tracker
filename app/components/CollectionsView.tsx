'use client'

import React, { useState, useTransition } from 'react'
import { toggleCollectionStatus, addCollectionItem, deleteCollectionItem } from '../db-actions'
import { Compass, Plus, Trash2 } from 'lucide-react'

export default function CollectionsView({ islandId, initialCollections }: { islandId: number, initialCollections: any[] }) {
    const [pending, startTransition] = useTransition()
    const [name, setName] = useState('')
    const [category, setCategory] = useState('Fish')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!name.trim()) return
        startTransition(async () => {
            await addCollectionItem(islandId, category, name)
            setName('')
        })
    }

    return (
        <div className="space-y-6">
            {/* Add Collection Form */}
            <form onSubmit={handleSubmit} className="p-5 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs flex flex-col md:flex-row gap-3">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Coelacanth, Atlas Moth..."
                    className="flex-1 px-4 py-2.5 bg-[#F9F7FB] border border-[#E4DFEA] rounded-2xl text-xs focus:outline-none focus:border-[#7A508C]"
                    required
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="px-4 py-2.5 bg-[#F9F7FB] border border-[#E4DFEA] rounded-2xl text-xs focus:outline-none focus:border-[#7A508C]"
                >
                    <option value="Fish">Fish</option>
                    <option value="Insects">Insects</option>
                    <option value="Fossils">Fossils</option>
                    <option value="Art">Art</option>
                </select>
                <button
                    type="submit"
                    disabled={pending}
                    className="px-5 py-2.5 bg-[#52435C] hover:bg-[#3D3044] text-white rounded-2xl text-xs font-semibold transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                    <Plus className="w-3.5 h-3.5" /> Add to Catalog
                </button>
            </form>

            {/* Collections Grid */}
            <div className="p-6 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs space-y-4">
                <h3 className="font-bold text-sm text-[#2A2030] flex items-center gap-2">
                    <Compass className="w-4.5 h-4.5 text-[#7A508C]" /> Museum Catalog ({initialCollections.length})
                </h3>

                {initialCollections.length === 0 ? (
                    <p className="text-xs text-[#93859E] text-center py-8">Your museum catalog is empty. Add your first catch above!</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {initialCollections.map((item: any) => (
                            <div key={item.id} className="flex items-center justify-between p-3 bg-[#F9F7FB] rounded-2xl border border-[#EFEAF3] group">
                                <div>
                                    <p className="font-semibold text-xs text-[#2A2030]">{item.name}</p>
                                    <span className="text-[10px] text-[#93859E] uppercase font-medium">{item.category}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        disabled={pending}
                                        onClick={() => {
                                            startTransition(async () => {
                                                await toggleCollectionStatus(item.id, item.collected)
                                            })
                                        }}
                                        className={`px-3 py-1 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${item.collected ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}
                                    >
                                        {item.collected ? 'Donated' : 'Missing'}
                                    </button>
                                    <button
                                        onClick={() => {
                                            startTransition(async () => {
                                                await deleteCollectionItem(item.id)
                                            })
                                        }}
                                        className="text-[#93859E] hover:text-rose-600 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer p-1"
                                        title="Delete Item"
                                    >
                                        <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}