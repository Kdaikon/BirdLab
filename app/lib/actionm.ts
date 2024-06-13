'use server';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// export type Message = {
//     id
//     bird_id: string;
//     owner_id: string;
//     content: string;
//     date: string;
//   }


// export type Invoice = {
//     id: string;
//     customer_id: string;
//     amount: number;
//     date: string;
//     status: 'pending' | 'paid';
//   };

const FormSchema = z.object({
    id: z.string(),
    
    birdId: z.string(
        { invalid_type_error: 'Please select a bird.', }
    ),
    
    ownerid: z.string(),

    content: z.string(),

    date: z.string(),
});

const CreateMessage = FormSchema.omit({ id: true, ownerid: true, date: true });

// This is temporary until @types/react-dom is updated
export type State = {
    errors?: {
        birdId?: string[];
    };
    message?: string | null;
};


export async function createMessage(prevState: State, formData: FormData) {
    // Validate form using Zod
    const validatedFields =  CreateMessage.safeParse({
      birdId: formData.get('birdId'),
      content: formData.get('content'),
    });
   
    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Create Message.',
      };
    }
   
    // Prepare data for insertion into the database
    const { birdId, content } = validatedFields.data;
    const date = new Date().toISOString().split('T')[0];
    const owner_id = '410544b2-4001-4271-9855-fec4b6a6442a';
   
    // Insert data into the database
    try {
      await sql`
        INSERT INTO messages (bird_id, owner_id, content, date)
        VALUES (${birdId}, ${owner_id}, ${content}, ${date})
      `;
    } catch (error) {
      // If a database error occurs, return a more specific error.
      return {
        message: 'Database Error: Failed to Create Message.',
      };
    }
   
    // Revalidate the cache for the invoices page and redirect the user.
    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
  }
  