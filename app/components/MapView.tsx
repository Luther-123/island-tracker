'use client'

import React, { useState } from 'react'
import { MapPin, Compass, Home, Trees, Waves } from 'lucide-react'

export default function MapView({ island }: { island: any }) {
    const [selectedZone, setSelectedZone] = useState('Resident Services')

    const zones = [
        { id: 1, name: 'Resident Services', type: 'Plaza', icon: Compass, color: 'bg-amber-100 border-amber-300 text-amber-800', desc: 'Central plaza with Tom Nook & Isabelle' },
        { id: 2, name: 'Museum & Fossils', type: 'Facility', icon: Trees, color: 'bg-emerald-100 border-emerald-300 text-emerald-800', desc: 'Blathers’ exhibition halls and art gallery' },
        { id: 3, name: 'Neighborhood Plot A', type: 'Residential', icon: Home, color: 'bg-purple-100 border-purple-300 text-purple-800', desc: 'Home of Marshal and Sherb' },
        { id: 4, name: 'North Secret Beach', type: 'Coastline', icon: Waves, color: 'bg-sky-100 border-sky-300 text-sky-800', desc: 'Redd’s Treasure Trawler docking area' },
    ]

    const activeInfo = zones.find(z => z.name === selectedZone)

    return (
        <div className="space-y-6 max-w-6xl">
            {/* Top Stat Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs space-y-2">
                    <span className="text-xs font-semibold text-[#665773]">Island Territory</span>
                    <h4 className="text-xl font-extrabold text-[#2A2030]">{island?.name || 'Melody Isle'}</h4>
                    <p className="text-[11px] text-[#93859E]">5-Star Tier Layout Mapped</p>
                </div>

                <div className="p-6 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs space-y-2">
                    <span className="text-xs font-semibold text-[#665773]">Hemisphere</span>
                    <h4 className="text-xl font-extrabold text-[#2A2030]">🌲 {island?.hemisphere}ern</h4>
                    <p className="text-[11px] text-[#93859E]">Pine trees and seasonal oak changes</p>
                </div>

                <div className="p-6 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs space-y-2">
                    <span className="text-xs font-semibold text-[#665773]">Active Zone</span>
                    <h4 className="text-xl font-extrabold text-[#7A508C]">{selectedZone}</h4>
                    <p className="text-[11px] text-[#93859E]">Click grid nodes below to inspect</p>
                </div>
            </div>

            {/* Interactive Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Grid Map View */}
                <div className="lg:col-span-2 p-6 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs space-y-4">
                    <div className="flex justify-between items-center border-b border-[#F0EBF4] pb-4">
                        <h3 className="font-bold text-base text-[#2A2030] flex items-center gap-2">
                            <MapPin className="w-4.5 h-4.5 text-[#7A508C]" /> Island Layout Matrix
                        </h3>
                        <span className="text-xs text-[#93859E]">4 Quadrants Active</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {zones.map((zone) => {
                            const Icon = zone.icon
                            const isSelected = selectedZone === zone.name
                            return (
                                <div
                                    key={zone.id}
                                    onClick={() => setSelectedZone(zone.name)}
                                    className={`p-6 rounded-3xl border-2 transition-all cursor-pointer flex flex-col justify-between space-y-6 ${zone.color} ${isSelected ? 'ring-4 ring-[#7A508C]/20 shadow-md scale-[1.02]' : 'opacity-85 hover:opacity-100'}`}
                                >
                                    <div className="flex justify-between items-start">
                                        <span className="text-[10px] font-bold uppercase tracking-wider bg-white/60 px-2.5 py-1 rounded-full">{zone.type}</span>
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-extrabold text-sm">{zone.name}</h4>
                                        <p className="text-[11px] opacity-90 mt-0.5">{zone.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Zone Details Inspector */}
                <div className="p-6 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs space-y-4 flex flex-col justify-between">
                    <div className="space-y-4">
                        <h3 className="font-bold text-base text-[#2A2030] border-b border-[#F0EBF4] pb-4 flex items-center gap-2">
                            <Compass className="w-4.5 h-4.5 text-[#7A508C]" /> Zone Inspector
                        </h3>

                        {activeInfo && (
                            <div className="space-y-3">
                                <div className="p-4 bg-[#F9F7FB] rounded-2xl border border-[#EFEAF3] space-y-2">
                                    <span className="text-[10px] font-semibold text-[#7A508C] uppercase">{activeInfo.type}</span>
                                    <h4 className="font-extrabold text-sm text-[#2A2030]">{activeInfo.name}</h4>
                                    <p className="text-xs text-[#665773] leading-relaxed">{activeInfo.desc}</p>
                                </div>

                                <div className="space-y-2 pt-2 text-xs text-[#665773]">
                                    <div className="flex justify-between py-1.5 border-b border-[#F6F4F8]">
                                        <span>Status</span>
                                        <span className="font-semibold text-emerald-600">Fully Developed</span>
                                    </div>
                                    <div className="flex justify-between py-1.5 border-b border-[#F6F4F8]">
                                        <span>Accessibility</span>
                                        <span className="font-semibold text-[#2A2030]">Bridge & Incline Linked</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="p-4 bg-[#F4EEF8] rounded-2xl text-[11px] text-[#7A508C] font-medium text-center">
                        🌿 Melody Isle Planning Grid v2.4
                    </div>
                </div>
            </div>
        </div>
    )
}