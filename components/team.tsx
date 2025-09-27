import Link from 'next/link'

interface TeamMember {
    name: string;
    role: string;
    color: string;
    initials: string;
}

export default function TeamSection() {
    const teamMembers: TeamMember[] = [
        {
            name: 'Liam Brown',
            role: 'Founder - CEO',
            color: 'blue',
            initials: 'LB'
        },
        {
            name: 'Elijah Jones',
            role: 'Co-Founder - CTO',
            color: 'purple',
            initials: 'EJ'
        },
        {
            name: 'Isabella Garcia',
            role: 'Sales Manager',
            color: 'green',
            initials: 'IG'
        },
    ];

    const getColorClasses = (color: string) => {
        switch(color) {
            case 'blue':
                return {
                    bg: 'bg-blue-800',
                    text: 'text-blue-900',
                    border: 'border-blue-200',
                    bgLight: 'bg-blue-50'
                };
            case 'purple':
                return {
                    bg: 'bg-purple-500',
                    text: 'text-purple-600',
                    border: 'border-purple-200',
                    bgLight: 'bg-purple-50'
                };
            case 'green':
                return {
                    bg: 'bg-green-500',
                    text: 'text-green-600',
                    border: 'border-green-200',
                    bgLight: 'bg-green-50'
                };
            default:
                return {
                    bg: 'bg-gray-500',
                    text: 'text-gray-600',
                    border: 'border-gray-200',
                    bgLight: 'bg-gray-50'
                };
        }
    };

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
                <div className="space-y-4">
                    {teamMembers.map((member, index) => {
                        const colors = getColorClasses(member.color);
                        return (
                            <div key={index} className="group">
                                <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-md">
                                    
                                    {/* Avatar Circle */}
                                    <div className={`w-14 h-14 ${colors.bg} rounded-full flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300`}>
                                        <span className="text-lg font-bold text-white">
                                            {member.initials}
                                        </span>
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-0.5 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                                            {member.name}
                                        </h3>
                                        <p className={`${colors.text} font-medium text-sm`}>
                                            {member.role}
                                        </p>
                                    </div>

                                    {/* Number */}
                                    <div className="hidden sm:block flex-shrink-0">
                                        <span className="text-xl font-light text-gray-300 dark:text-gray-600 group-hover:text-gray-400 dark:group-hover:text-gray-500 transition-colors duration-300">
                                            0{index + 1}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Stats or Additional Info */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                        <div className="w-8 h-8 bg-blue-800 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                        </div>
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">Liderazgo</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-300">Experiencia ejecutiva</p>
                    </div>

                    <div className="text-center p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
                        <div className="w-8 h-8 bg-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                        </div>
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">Tecnología</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-300">Innovación técnica</p>
                    </div>

                    <div className="text-center p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                        <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                            </svg>
                        </div>
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">Ventas</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-300">Crecimiento comercial</p>
                    </div>
                </div>
            </div>
        </section>
    );
}