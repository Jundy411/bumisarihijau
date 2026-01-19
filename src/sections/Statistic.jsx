import React from 'react'

const Statistic = () => {
  return (
    <>
    <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                    <h3 className="text-4xl font-heading font-bold mb-2">150+</h3>
                    <p className="text-blue-200">Proyek Selesai</p>
                </div>
                <div>
                    <h3 className="text-4xl font-heading font-bold mb-2">45</h3>
                    <p className="text-blue-200">Tenaga Ahli</p>
                </div>
                <div>
                    <h3 className="text-4xl font-heading font-bold mb-2">100%</h3>
                    <p className="text-blue-200">Kepuasan Klien</p>
                </div>
                <div>
                    <h3 className="text-4xl font-heading font-bold mb-2">15</h3>
                    <p className="text-blue-200">Tahun Pengalaman</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Statistic