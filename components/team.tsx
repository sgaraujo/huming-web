import React from 'react';

export default function TeamSection() {

    return (
        <section className="bg-white dark:bg-gray-900 pt-35">
            <div className="mx-auto max-w-5xl px-6">
                
                {/* Header */}
                <div className="mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                                Nuestro equipo
                            </h2>
                        </div>
                        <div>
                            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                                En HumanIA contamos con un equipo multidisciplinario conformado por profesionales 
                                altamente capacitados en ingeniería, salud ocupacional, calidad, medio ambiente, 
                                riesgos laborales y normativa ISO.
                            </p>
                        </div>
                    </div>
                </div>
{/* Team List */}
            
            </div>
        </section>
    );
}