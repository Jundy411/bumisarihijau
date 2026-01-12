import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-900 text-white py-10 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-8 h-8 bg-secondary flex items-center justify-center rounded text-white font-bold">
                    <i className="fa-solid fa-building"></i>
                </div>
                <span className="font-heading text-xl font-bold tracking-wide">TUKANG BANGUN</span>
            </div>
            <p className="text-gray-500 text-sm mb-6">Solusi konstruksi terpercaya untuk masa depan yang kokoh.</p>
            <div className="text-gray-600 text-sm">
                &copy; 2024 Mega Bangun Persada. All rights reserved.
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer