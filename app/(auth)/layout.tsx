import Image from 'next/image'

export default function AuthLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='grid lg:grid-cols-2 h-full items-center justify-center'>
        <div className='flex items-center justify-center'>{children}</div>
        <div className='hidden lg:flex  lg:bg-slate-300 h-full justify-center items-center lg:flex-col'>
            <Image src="/logotipo.svg"  alt="Logotipo" width="200" height="100"/>
            <h1 className='text-xl font-bold'>Rent a cars</h1>
        </div>
    </div>
  )
}
