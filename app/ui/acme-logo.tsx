import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-black`}
    >
      <div className="w-12 h-12 bg-red-500 rounded-full"></div>
      <p className="text-[44px] pl-2">Bird Chat</p>
    </div>
  );
}
