'use client'

import React, { useTransition } from 'react'
import { toggleCollectionStatus } from '../db-actions'

export default function CollectionList({ initialCollections }: { initialCollections: any[] }) {
    const [pending, startTransition] = useTransition()

    return (
        <div className="p-5 bg-white rounded-3xl border border-[#E4DFEA] shadow-xs grid grid-cols-1 gap-3">
            {initialCollections.length === 0 ? (
                <p className="text-xs text-[#93859E] text-center py-4">No collection items recorded yet.</p>
            ) : (
                initialCollections.map((item: any) => (
                    <div key={item.id} className="flex items-center justify-between text-sm py-1.5 border-b border-[#F9F7FB] last:border-0">
                        <div>
                            <span className="font-medium text-[#2A2030]">{item.name}</span>
                            <span className="ml-2 text-xs text-[#93859E]">({item.category})</span>
                        </div>
                        <button
                            disabled={pending}
                            onClick={() => {
                                startTransition(async () => {
                                    await toggleCollectionStatus(item.id, item.collected)
                                })
                            }}
                            className={`px-2.5 py-0.5 rounded-full text-xs transition-colors cursor-pointer disabled:opacity-50 ${item.collected ? 'bg-[#EAF2F8] text-[#29689A] hover:bg-[#d5e7f5]' : 'bg-[#FDF3E7] text-[#9A6B29] hover:bg-[#fae8d2]'
                                }`}
                        >
                            {item.collected ? 'Donated' : 'Missing'}
                        </button>
                    </div>
                ))
            )}
        </div>
    )
}