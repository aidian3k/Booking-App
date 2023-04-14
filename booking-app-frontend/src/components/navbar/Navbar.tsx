import {FC} from "react";

export const Navbar: FC = () => {
    return (
        <>
            <header className={'p-4 flex justify-between'}>
                <a className={'flex gap-2 items-center'} href={'hello'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                    </svg>
                    <p className={'text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'}>Rentify</p>
                </a>

                <div className={'flex border border-gray-300 rounded-full items-center gap-4 py-2 px-4 shadow shadow-gray-300 hover:shadow-gray-400 transition-all'}>
                    <button>
                        <p className={'text-serif bg-clip-text text-gray-900 font-medium'}>Anywhere</p>
                    </button>
                    <div className={'border border-l border-gray-300 h-full'}></div>
                    <button>
                        <p className={'text-serif bg-clip-text text-gray-900 font-medium'}>Anyweek</p>
                    </button>
                    <div className={'border border-l border-gray-300 h-full'}></div>
                    <button>
                        <p className={'text-serif bg-clip-text text-gray-300'}>Add guests</p>
                    </button>
                    <button className={'rounded-full bg-red-500 flex items-center p-1'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                </div>

                <button className={'flex border border-gray-300 rounded-full items-center gap-2 py-2 px-4 shadow shadow-gray-300 hover:shadow-gray-400 transition-all'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </button>
            </header>
            <div className={'w-full border border-gray-100 border-1'}></div>
        </>
    )
}