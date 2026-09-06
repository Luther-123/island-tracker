'use client'

import React, { useTransition } from 'react'
import { logout } from '../auth-actions'
import { Settings, LogOut, User, Globe, Shield, Sparkles } from 'lucide-react'

export default function AccountManagerView({ user, island }: { user: any, island: any }) {
    const [pending, startTransition] = useTransition()

    return (
        <div className="space-y-6 max-w-4xl">
            {/* Top Banner Card */}
            <div className="p-6 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#52435C] text-white flex items-center justify-center text-xl font-bold shadow-xs">
                        {user?.display_name ? user.display_name[0] : 'M'}
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h3 className="font-extrabold text-lg text-[#2A2030]">{user?.display_name || 'Mayor'}</h3>
                            <span className="text-[10px] bg-[#F4EEF8] text-[#7A508C] font-semibold px-2.5 py-0.5 rounded-full">Active Mayor</span>
                        </div>
                        <p className="text-xs text-[#665773] mt-0.5">{user?.email || 'mayor@melody.isle'}</p>
                    </div>
                </div>

                <button
                    onClick={() => {
                        startTransition(async () => {
                            await logout()
                        })
                    }}
                    disabled={pending}
                    className="flex items-center gap-2 px-4 py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-2xl text-xs font-semibold transition-colors cursor-pointer border border-rose-200 shadow-xs"
                >
                    <LogOut className="w-3.5 h-3.5" /> Log Out
                </button>
            </div>

            {/* Settings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Profile Details */}
                <div className="p-6 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs space-y-4">
                    <h4 className="font-bold text-sm text-[#2A2030] flex items-center gap-2 border-b border-[#F0EBF4] pb-3">
                        <User className="w-4 h-4 text-[#7A508C]" /> Mayor Profile
                    </h4>
                    <div className="space-y-3 text-xs">
                        <div className="flex justify-between items-center py-2 border-b border-[#F6F4F8]">
                            <span className="text-[#665773]">Display Name</span>
                            <span className="font-semibold text-[#2A2030]">{user?.display_name}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-[#F6F4F8]">
                            <span className="text-[#665773]">Account Email</span>
                            <span className="font-semibold text-[#2A2030]">{user?.email}</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                            <span className="text-[#665773]">Member Since</span>
                            <span className="font-semibold text-[#2A2030]">September 2026</span>
                        </div>
                    </div>
                </div>

                {/* Island Configuration */}
                <div className="p-6 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs space-y-4">
                    <h4 className="font-bold text-sm text-[#2A2030] flex items-center gap-2 border-b border-[#F0EBF4] pb-3">
                        <Globe className="w-4 h-4 text-[#7A508C]" /> Island Settings
                    </h4>
                    <div className="space-y-3 text-xs">
                        <div className="flex justify-between items-center py-2 border-b border-[#F6F4F8]">
                            <span className="text-[#665773]">Island Name</span>
                            <span className="font-semibold text-[#2A2030]">{island?.name}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-[#F6F4F8]">
                            <span className="text-[#665773]">Hemisphere</span>
                            <span className="font-semibold text-[#2A2030]">{island?.hemisphere} Hemisphere</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                            <span className="text-[#665773]">Save Synchronization</span>
                            <span className="font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">Neon PostgreSQL</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}