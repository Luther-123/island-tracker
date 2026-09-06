'use client'

import React, { useTransition } from 'react'
import { toggleCollection, deleteCollection } from '../actions'
import { Compass, CheckCircle2, Circle, Trash2, Award } from 'lucide-react'

export default function CollectionsView({ islandId, initialCollections }: { islandId: number, initialCollections: any[] }) {
    const [pending, startTransition] = useTransition()

    const donatedCount = initialCollections.filter(c => c.collected).length
    const totalCount = initialCollections.length
    const donationPercentage = totalCount > 0 ? Math.round((donatedCount / totalCount) * 100) : 0

    return (
        <div className="space-y-6 max-w-6xl">
            {/* Top Museum Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-[#665773]">Museum Completion</span>
                        <span className="text-xs font-bold text-[#7A508C] bg-[#F4EEF8] px-2.5 py-1 rounded-full">{donationPercentage}%</span>
                    </div>
                    <div className="w-full bg-[#F6F4F8] h-3 rounded-full overflow-hidden border border-[#E4DFEA]">
                        <div className="bg-gradient-to-r from-[#7A508C] to-[#9B77AD] h-full transition-all duration-500" style={{ width: `${donationPercentage}%` }}></div>
                    </div>
                    <p className="text-[11px] text-[#93859E]">{donatedCount} of {totalCount} specimens donated to Blathers 🏛️</p>
                </div>

                <div className="p-6 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs flex items-center justify-between">
                    <div className="space-y-1">
                        <span className="text-xs font-semibold text-[#665773]">Curator Status</span>
                        <h4 className="text-xl font-extrabold text-[#2A2030]">🦉 Expert Donor</h4>
                        <p className="text-[11px] text-[#93859E]">The museum wing is expanding!</p>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-[#F9F7FB] border border-[#EFEAF3] flex items-center justify-center text-xl">
                        ✨
                    </div>
                </div>

                <div className="p-6 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs flex items-center justify-between">
                    <div className="space-y-1">
                        <span className="text-xs font-semibold text-[#665773]">Wings Tracked</span>
                        <div className="flex gap-2 pt-1 text-xs font-semibold text-[#7A508C]">
                            <span className="bg-[#F4EEF8] px-2.5 py-1 rounded-xl">Fish & Insects</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Collections List Card */}
            <div className="p-6 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs space-y-4">
                <div className="flex justify-between items-center border-b border-[#F0EBF4] pb-4">
                    <h3 className="font-bold text-base text-[#2A2030] flex items-center gap-2">
                        <Compass className="w-4.5 h-4.5 text-[#7A508C]" /> Specimen Catalog
                    </h3>
                    <span className="text-xs text-[#93859E]">{totalCount} items tracked</span>
                </div>

                <div className="space-y-3">
                    {initialCollections.length === 0 ? (
                        <p className="text-xs text-[#93859E] text-center py-8">No collection items added yet.</p>
                    ) : (
                        initialCollections.map((item: any) => (
                            <div key={item.id} className="p-4 bg-[#F9F7FB] rounded-2xl border border-[#EFEAF3] flex items-center justify-between group transition-all hover:border-[#D5C6E3]">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-xl bg-[#EAE2F0] flex items-center justify-center text-[#7A508C] text-sm">
                                        {item.category === 'Fish' ? '🐟' : '🦋'}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-xs text-[#2A2030]">{item.name}</h4>
                                        <span className="text-[10px] text-[#93859E] bg-[#E4DFEA]/60 px-2 py-0.5 rounded-md uppercase font-medium">{item.category}</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => {
                                            startTransition(async () => {
                                                await toggleCollection(item.id, !item.collected)
                                            })
                                        }}
                                        className={`text-xs font-semibold px-3 py-1.5 rounded-xl cursor-pointer transition-colors ${item.collected ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200' : 'bg-amber-100 text-amber-700 hover:bg-amber-200'}`}
                                    >
                                        {item.collected ? 'Donated' : 'Missing'}
                                    </button>
                                    <button
                                        onClick={() => {
                                            startTransition(async () => {
                                                await deleteCollection(item.id)
                                            })
                                        }}
                                        className="text-[#93859E] hover:text-[#5C3D6B] opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                                        title="Delete Item"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}