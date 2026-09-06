'use client'

import React, { useState } from 'react'
import AddModal from './AddModal'
import ResidentList from './ResidentList'
import TaskList from './TaskList'
import { CheckSquare, Compass, Users, Sparkles, Home, Image as ImageIcon, BookOpen, Settings, Calendar, Star, MapPin } from 'lucide-react'
import CollectionList from './CollectionList'
import NotesList from './NotesList'
import TasksView from './TasksView'
import CollectionsView from './CollectionsView'
import ResidentsView from './ResidentsView'
import NotesView from './NotesView'
import GalleryView from './GalleryView'
import AccountManagerView from './AccountManagerView'
import MapView from './MapView'
export default function DashboardContent({
    user,
    island,
    tasks,
    collections,
    residents,
    notes
}: {
    user: any,
    island: any,
    tasks: any[],
    collections: any[],
    residents: any[],
    notes: any[]
}) {
    const [currentView, setCurrentView] = useState('Overview')
    const [modalOpen, setModalOpen] = useState(false)
    const [modalTab, setModalTab] = useState<'task' | 'resident'>('task')

    const openTaskModal = () => {
        setModalTab('task')
        setModalOpen(true)
    }

    const openResidentModal = () => {
        setModalTab('resident')
        setModalOpen(true)
    }

    return (
        <div className="min-h-screen bg-[#F6F4F8] text-[#2E2733] flex font-sans">
            {/* Sidebar Navigation */}
            <aside className="w-64 bg-[#2A2030] text-[#E8E2EC] p-6 flex flex-col justify-between hidden md:flex shadow-lg">
                <div>
                    <div className="bg-[#3D3044] p-4 rounded-2xl mb-8 border border-[#52435C]">
                        <p className="text-xs text-[#B8ACC2]">Welcome to</p>
                        <h2 className="text-xl font-bold tracking-wide text-white">{island.name}</h2>
                    </div>
                    <nav className="space-y-2 text-sm">
                        {[
                            { name: 'Overview', icon: Home },
                            { name: 'Tasks', icon: CheckSquare },
                            { name: 'Collections', icon: Compass },
                            { name: 'Residents', icon: Users },
                            { name: 'Gallery', icon: ImageIcon },
                            { name: 'Notes', icon: BookOpen },
                            { name: 'Map', icon: MapPin },
                            { name: 'Settings', icon: Settings },
                        ].map((item) => {
                            const Icon = item.icon
                            const isActive = currentView === item.name
                            return (
                                <button
                                    key={item.name}
                                    onClick={() => setCurrentView(item.name)}
                                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-colors cursor-pointer ${isActive
                                        ? 'bg-[#52435C] text-white'
                                        : 'hover:bg-[#3D3044] text-[#B8ACC2]'
                                        }`}
                                >
                                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#D1BCE3]' : ''}`} /> {item.name}
                                </button>
                            )
                        })}
                    </nav>
                </div>
                <div className="text-xs text-[#93859E] border-t border-[#43354C] pt-4 flex items-center gap-2">
                    <Settings className="w-4 h-4" /> Version 1.0.4
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 p-6 md:p-10 overflow-y-auto">

                {/* Top Illustrated Banner */}
                <div className="relative w-full h-48 md:h-56 rounded-3xl overflow-hidden mb-8 shadow-sm bg-gradient-to-r from-[#4A3556] via-[#6D517D] to-[#9B77AD] flex items-end p-6 md:p-8 text-white">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-4">
                        <div>
                            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E8E2EC] mb-1">
                                <Sparkles className="w-3.5 h-3.5 text-[#D1BCE3]" /> Welcome back!
                            </div>
                            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                                {currentView === 'Overview' ? `Welcome back, ${island.player_name}!` : currentView}
                            </h1>
                            <p className="text-sm text-[#E8E2EC] mt-1">
                                {currentView === 'Overview' ? `Here is an overview of your island on ${island.name} 🌿` : `Manage your island's ${currentView.toLowerCase()} here ✨`}
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="bg-[#2A2030]/80 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#7A508C] text-xs font-medium text-white flex items-center gap-4">
                                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#D1BCE3]" /> 20 Sep 2026</span>
                                <span>•</span>
                                <span>{island.hemisphere} Hemisphere</span>
                            </div>
                            <button
                                onClick={openTaskModal}
                                className="flex items-center gap-2 px-4 py-2.5 bg-[#52435C] hover:bg-[#3D3044] text-white rounded-2xl text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                            >
                                + Add Item
                            </button>
                        </div>
                    </div>
                </div>

                {/* Conditional View Rendering */}
                {currentView === 'Overview' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Section 1: Overview Card */}
                        <div className="space-y-4">
                            <h3 className="font-bold text-base text-[#2A2030] flex items-center gap-2">
                                <Star className="w-4.5 h-4.5 text-[#7A508C]" /> Overview
                            </h3>
                            <div className="p-5 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs space-y-4">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-[#665773]">Island Rating</span>
                                    <div className="flex text-amber-500 gap-0.5">
                                        <Star className="w-3.5 h-3.5 fill-current" />
                                        <Star className="w-3.5 h-3.5 fill-current" />
                                        <Star className="w-3.5 h-3.5 fill-current" />
                                        <Star className="w-3.5 h-3.5 fill-current" />
                                        <Star className="w-3.5 h-3.5 text-gray-300" />
                                    </div>
                                </div>
                                <div className="flex justify-between items-center text-sm border-t border-[#F0EBF4] pt-3">
                                    <span className="text-[#665773]">Dream Address</span>
                                    <span className="font-mono text-xs text-[#2A2030] bg-[#F6F4F8] px-2.5 py-1 rounded-xl">DA-1234-5678-9101</span>
                                </div>
                                <div className="flex justify-between items-center text-sm border-t border-[#F0EBF4] pt-3">
                                    <span className="text-[#665773]">Residents</span>
                                    <span className="font-semibold text-xs text-[#2A2030]">{residents.length} / 10</span>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Tasks List */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="font-bold text-base text-[#2A2030] flex items-center gap-2">
                                    <CheckSquare className="w-4.5 h-4.5 text-[#8A629B]" /> Tasks
                                </h3>
                                <span onClick={() => setCurrentView('Tasks')} className="text-xs text-[#7A508C] font-medium cursor-pointer hover:underline">View all</span>
                            </div>
                            <TaskList initialTasks={tasks} />
                        </div>

                        {/* Section 3: Latest Photo Preview */}
                        {/* Gallery Photo Preview Card */}
                        <div className="p-6 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs space-y-4 flex flex-col justify-between">
                            <div className="flex justify-between items-center border-b border-[#F0EBF4] pb-3">
                                <h3 className="font-bold text-sm text-[#2A2030] flex items-center gap-2">
                                    <ImageIcon className="w-4 h-4 text-[#7A508C]" /> Latest Photo
                                </h3>
                                <button onClick={() => setCurrentView('Gallery')} className="text-xs font-semibold text-[#7A508C] hover:underline cursor-pointer">
                                    View all
                                </button>
                            </div>
                            <div className="w-full h-40 rounded-2xl overflow-hidden relative shadow-inner bg-[#EAE2F0]">
                                <img
                                    src="https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=800&auto=format&fit=crop"
                                    alt="Lavender Forest Path"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="font-bold text-xs text-[#2A2030]">My small forest path ✨</h4>
                                <p className="text-[10px] text-[#93859E]">19 Sep 2026</p>
                            </div>
                        </div>
                        {/* Section 4: Collections Grid */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="font-bold text-base text-[#2A2030] flex items-center gap-2">
                                    <Compass className="w-4.5 h-4.5 text-[#7A508C]" /> Collections
                                </h3>
                                <span onClick={() => setCurrentView('Collections')} className="text-xs text-[#7A508C] font-medium cursor-pointer hover:underline">View all</span>
                            </div>
                            <CollectionList initialCollections={collections} />
                        </div>

                        {/* Section 5: Island Map Snapshot */}
                        <div className="p-6 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs space-y-4 flex flex-col justify-between">
                            <div className="flex justify-between items-center border-b border-[#F0EBF4] pb-3">
                                <h3 className="font-bold text-sm text-[#2A2030] flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-[#7A508C]" /> My Island
                                </h3>
                            </div>
                            <div
                                onClick={() => setCurrentView('Map')}
                                className="w-full h-32 rounded-2xl bg-[#F4EEF8] border border-[#E4DFEA] flex flex-col items-center justify-center text-[#7A508C] cursor-pointer hover:bg-[#EAE2F0] transition-colors space-y-1"
                            >
                                <span className="text-xs font-bold">🗺️ Island Layout Map</span>
                                <span className="text-[10px] text-[#93859E]">Click to inspect quadrants</span>
                            </div>
                            <button
                                onClick={() => setCurrentView('Map')}
                                className="w-full py-2.5 bg-[#F9F7FB] hover:bg-[#E4DFEA]/40 text-[#52435C] rounded-2xl text-xs font-semibold transition-colors cursor-pointer border border-[#E4DFEA]"
                            >
                                View Map
                            </button>
                        </div>

                        {/* Section 6: Residents List */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="font-bold text-base text-[#2A2030] flex items-center gap-2">
                                    <Users className="w-4.5 h-4.5 text-[#5C3D6B]" /> Residents
                                </h3>
                                <span onClick={() => setCurrentView('Residents')} className="text-xs text-[#7A508C] font-medium cursor-pointer hover:underline">View all</span>
                            </div>
                            <ResidentList initialResidents={residents} onInviteClick={openResidentModal} />
                        </div>
                    </div>
                )}

                {currentView === 'Tasks' && (
                    <TasksView islandId={island.id} initialTasks={tasks} />
                )}
                {currentView === 'Collections' && (
                    <CollectionsView islandId={island.id} initialCollections={collections} />
                )}
                {currentView === 'Residents' && (
                    <ResidentsView initialResidents={residents} onInviteClick={openResidentModal} />
                )}
                {currentView === 'Notes' && (
                    <NotesView islandId={island.id} initialNotes={notes} />
                )}
                {currentView === 'Gallery' && (
                    <GalleryView islandName={island.name} />
                )}
                {currentView === 'Settings' && (
                    <AccountManagerView user={user} island={island} />
                )}
                {currentView === 'Map' && (
                    <MapView island={island} />
                )}

            </main>

            {/* Controlled Global Add Modal */}
            <AddModal
                islandId={island.id}
                externalOpen={modalOpen}
                defaultTab={modalTab}
                onClose={() => setModalOpen(false)}
            />
        </div>
    )
}