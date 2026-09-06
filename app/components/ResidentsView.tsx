'use client'

import React, { useTransition } from 'react'
import { deleteResident } from '../db-actions'
import { Users, X, UserPlus } from 'lucide-react'

export default function ResidentsView({
    initialResidents,
    onInviteClick
}: {
    initialResidents: any[]
    onInviteClick: () => void
}) {
    const [pending, startTransition] = useTransition()
    const residentCount = initialResidents.length
    const maxResidents = 10
    const occupancyPercentage = Math.round((residentCount / maxResidents) * 100)

    return (
        <div className="space-y-6 max-w-6xl">
            {/* Top Roster Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-[#665773]">Plot Occupancy</span>
                        <span className="text-xs font-bold text-[#7A508C] bg-[#F4EEF8] px-2.5 py-1 rounded-full">{residentCount} / 10 Plots</span>
                    </div>
                    <div className="w-full bg-[#F6F4F8] h-3 rounded-full overflow-hidden border border-[#E4DFEA]">
                        <div className="bg-gradient-to-r from-[#7A508C] to-[#9B77AD] h-full transition-all duration-500" style={{ width: `${occupancyPercentage}%` }}></div>
                    </div>
                    <p className="text-[11px] text-[#93859E]">{maxResidents - residentCount} empty plots available for new villagers 🏡</p>
                </div>

                <div className="p-6 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs flex items-center justify-between">
                    <div className="space-y-1">
                        <span className="text-xs font-semibold text-[#665773]">Island Vibe</span>
                        <h4 className="text-xl font-extrabold text-[#2A2030]">✨ Lively & Cozy</h4>
                        <p className="text-[11px] text-[#93859E]">Your villagers love wandering around Melody Isle!</p>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-[#F9F7FB] border border-[#EFEAF3] flex items-center justify-center text-xl">
                        🐾
                    </div>
                </div>

                <div className="p-6 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs flex items-center justify-between">
                    <div className="space-y-1">
                        <span className="text-xs font-semibold text-[#665773]">Invite Action</span>
                        <div className="pt-1">
                            <button
                                onClick={onInviteClick}
                                className="px-4 py-2 bg-[#52435C] hover:bg-[#3D3044] text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
                            >
                                <UserPlus className="w-3.5 h-3.5" /> Invite Resident
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Neighborhood Roster Card */}
            <div className="p-6 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs space-y-4">
                <div className="flex justify-between items-center border-b border-[#F0EBF4] pb-4">
                    <h3 className="font-bold text-base text-[#2A2030] flex items-center gap-2">
                        <Users className="w-4.5 h-4.5 text-[#7A508C]" /> Neighborhood Roster
                    </h3>
                    <span className="text-xs text-[#93859E]">{residentCount} active villagers</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {initialResidents.length === 0 ? (
                        <p className="text-xs text-[#93859E] text-center py-8 col-span-2">No residents on your island yet. Invite someone over!</p>
                    ) : (
                        initialResidents.map((resident: any) => (
                            <div key={resident.id} className="p-4 bg-[#F9F7FB] rounded-2xl border border-[#EFEAF3] flex items-center justify-between group transition-all hover:border-[#D5C6E3]">
                                <div className="flex items-center gap-3.5">
                                    <div className="w-12 h-12 rounded-2xl bg-[#EAE2F0] border border-[#D5C6E3] flex items-center justify-center text-sm font-bold text-[#7A508C] shadow-xs">
                                        {resident.name[0]}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-[#2A2030]">{resident.name}</h4>
                                        <div className="flex items-center gap-2 mt-0.5">
                                            <span className="text-[10px] text-[#665773] bg-[#E4DFEA]/60 px-2 py-0.5 rounded-md font-medium">{resident.species}</span>
                                            <span className="text-[10px] text-[#7A508C] bg-[#F4EEF8] px-2 py-0.5 rounded-md font-semibold">{resident.personality}</span>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    disabled={pending}
                                    onClick={() => {
                                        startTransition(async () => {
                                            await deleteResident(resident.id)
                                        })
                                    }}
                                    className="w-8 h-8 rounded-xl bg-white border border-[#E4DFEA] text-[#93859E] hover:text-rose-600 hover:border-rose-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all cursor-pointer shadow-xs disabled:opacity-50"
                                    title="Remove resident"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}