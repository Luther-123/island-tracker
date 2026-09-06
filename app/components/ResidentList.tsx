'use client'

import React, { useTransition } from 'react'
import { deleteResident } from '../actions'
import { X, UserPlus } from 'lucide-react'

export default function ResidentList({
    initialResidents,
    onInviteClick
}: {
    initialResidents: any[]
    onInviteClick: () => void
}) {
    const [pending, startTransition] = useTransition()

    return (
        <div className="space-y-3">
            <div className="p-5 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs">
                <div className="grid grid-cols-4 gap-3 text-center mb-2">
                    {initialResidents.map((resident: any) => (
                        <div key={resident.id} className="flex flex-col items-center relative group">
                            <button
                                onClick={() => {
                                    startTransition(async () => {
                                        await deleteResident(resident.id)
                                    })
                                }}
                                title="Remove resident"
                                className="absolute -top-1 -right-1 w-5 h-5 bg-[#7A508C] text-white rounded-full text-[10px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#5C3D6B] cursor-pointer"
                            >
                                <X className="w-3 h-3" />
                            </button>
                            <div className="w-10 h-10 rounded-full bg-[#EAE2F0] border border-[#D5C6E3] flex items-center justify-center text-xs font-bold text-[#7A508C] mb-1 shadow-xs">
                                {resident.name[0]}
                            </div>
                            <span className="text-[11px] font-medium text-[#2A2030] truncate w-full">{resident.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <button
                onClick={onInviteClick}
                className="w-full py-2 bg-[#52435C] hover:bg-[#3D3044] text-white font-medium rounded-2xl text-xs transition-colors cursor-pointer shadow-xs flex items-center justify-center gap-2"
            >
                <UserPlus className="w-3.5 h-3.5" /> Invite more residents
            </button>
        </div>
    )
}