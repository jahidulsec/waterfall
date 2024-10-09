import LoginForm from '@/components/login/login-form'
import Link from 'next/link'
import React from 'react'

function LoginPage() {
  return (
    <section className='relative place-content-center h-full px-14'>
        {/* header */}
        
        <div className="header mb-[3rem]">
            <h1 className='text-3xl mb-0.5 font-semibold'>Waterfall Merger</h1>
            <p className='text-sm'>If you don’t have an account <Link href={''} className='text-primary'>Click here</Link></p>

        </div>
        
        {/* form */}
        <LoginForm />
    </section>
  )
}

export default LoginPage

