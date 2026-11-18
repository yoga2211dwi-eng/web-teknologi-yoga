'use client';

import Link from 'next/link';
import NavLinks from '@/app/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { signOut } from 'next-auth/react';

export default function SideNav() {
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <Link
                className="mb-2 flex h-20 items-center justify-start rounded-md bg-blue-600 px-4 py-2 md:h-40 md:items-end md:p-4"
                href="/"
            >
                <div className="w-36 md:w-48">
                    <Image
                        src="/logo/uia-logo.png"
                        width={1536}
                        height={467}
                        className="w-full h-auto object-contain block"
                        alt="Banner UIA"
                        priority
                    />
                </div>
            </Link>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks />
                <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
                <button
                    onClick={() => signOut({ callbackUrl: '/login' })}
                    className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium text-gray-900 hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
                >
                    <PowerIcon className="w-6" />
                    <div className="hidden md:block">Keluar</div>
                </button>
            </div>
        </div>
    );
}