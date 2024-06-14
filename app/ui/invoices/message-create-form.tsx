'use client';
import { BirdField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createMessage } from '@/app/lib/actionm';
import { useFormState } from 'react-dom';

export default function Form({ birds }: { birds: BirdField[] }) {
    const initialState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(createMessage, initialState);
    return (
      <form action={dispatch}>
        <div className="rounded-md bg-gray-50 p-4 md:p-6">
          {/* Customer Name */}
          <div className="mb-4">
            <label htmlFor="bird" className="mb-2 block text-sm font-medium">
              Choose Birds
            </label>
            <div className="relative">
              <select
                id="bird"
                name="birdId"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue=""
                aria-describedby="bird-error"
              >
                <option value="" disabled>
                  Select a bird
                </option>
                {birds.map((bird) => (
                  <option key={bird.id} value={bird.id}>
                    {bird.name}
                  </option>
                ))}
              </select>
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
            <div id="bird-error" aria-live="polite" aria-atomic="true">
              {state.errors?.birdId &&
                state.errors.birdId.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
  
          {/* Invoice Amount */}
          <div className="mb-4">
            <label htmlFor="message" className="mb-2 block text-sm font-medium">
              Type a message
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="message"
                  name="content"
                  type="text"
                  placeholder="Enter message about birds"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
                <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/dashboard/invoices"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <Button type="submit">Create Message</Button>
        </div>
      </form>
    );
  }