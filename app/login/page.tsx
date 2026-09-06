'use client'

import React, { useState, useEffect } from 'react'
import { login } from '../auth-actions'
import { Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function LoginPage() {
    const [mounted, setMounted] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [showPassword, setShowPassword] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div className="min-h-screen bg-[#F6F4F8] flex items-center justify-center p-6 font-sans">
            <div className="max-w-md w-full p-8 bg-white rounded-3xl border border-[#E4DFEA] shadow-sm space-y-6">
                <div className="text-center space-y-1">
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#7A508C] bg-[#F4EEF8] px-3 py-1 rounded-full mb-2">
                        <Sparkles className="w-3.5 h-3.5" /> Melody Isle Auth
                    </div>
                    <h1 className="text-2xl font-extrabold text-[#2A2030]">Welcome Back!</h1>
                    <p className="text-xs text-[#665773]">Log in to manage your island paradise 🌿</p>
                </div>

                {error && (
                    <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-2xl text-center">
                        {error}
                    </div>
                )}

                <form
                    action={async (formData) => {
                        try {
                            await login(formData)
                        } catch (err: any) {
                            setError(err.message || 'Failed to login')
                        }
                    }}
                    className="space-y-4"
                >
                    <div>
                        <label className="text-xs font-semibold text-[#665773] block mb-1">Email Address</label>
                        <input
                            name="email"
                            type="email"
                            required
                            placeholder="mayor@melody.isle"
                            className="w-full px-4 py-3 bg-[#F9F7FB] border border-[#E4DFEA] rounded-2xl text-xs focus:outline-none focus:border-[#7A508C]"
                        />
                    </div>

                    <div className="relative">
                        <label className="text-xs font-semibold text-[#665773] block mb-1">Password</label>
                        <input
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            required
                            placeholder="••••••••"
                            className="w-full px-4 py-3 bg-[#F9F7FB] border border-[#E4DFEA] rounded-2xl text-xs focus:outline-none focus:border-[#7A508C] pr-10"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-8 text-[#93859E] hover:text-[#52435C] transition-colors cursor-pointer text-xs font-semibold"
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-[#52435C] hover:bg-[#3D3044] text-white rounded-2xl text-xs font-semibold transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                    >
                        Enter Island <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                </form>

                <div className="text-center pt-2 border-t border-[#F0EBF4]">
                    <p className="text-xs text-[#665773]">
                        Don't have an island yet?{' '}
                        <Link href="/signup" className="text-[#7A508C] font-semibold hover:underline">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
