import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';


export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="h-full w-full p-6">
        <Image
          src="/tun_bath_full.jpg"
          alt="Your Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className='z-10 px-6'>
        <AcmeLogo />

      </div>
      <div className=" flex p-6 z-10 inset-x-0">
        <Link
          href="/login"
          className="flex items-center gap-5 self-start rounded-lg bg-stone-100 px-6 py-3 text-sm font-medium text-grey-800 transition-colors hover:bg-red-500 md:text-base"
        >
          <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
        </Link>
      </div>
      <div className="absolute flex justify-center p-6 z-10 inset-x-0 bottom-20 bg-white">
        <p className={`${lusitana.className} text-xl text-gley-800 md:text-3xl md:leading-normal `}>
          <strong>Welcome to Bird Chat.</strong> This is a social network service for bird lovers.
        </p>
      </div>

      {/* <div className="flex h-20 shrink-0 items-end rounded-lg bg-yellow-200 p-4 md:h-52">
      </div> */}
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        {/* <div className="flex flex-col justify-center gap-6 rounded-lg bg-stone-400 px-6 py-10 md:w-2/5 md:px-20">
        </div> */}
        {/* <div className="flex items-center justify-center p-6 md:w-full md:px-28 md:py-12">
          <Image
            src="/tun_bath_full.jpg"
            width={1920}
            height={1080}
            // hidden モバイルで見せない　md:block デスクトップで見せる
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div> */}

      </div>
    </main>
  );
}
