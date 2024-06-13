import Form from '@/app/ui/invoices/message-create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchBirds } from '@/app/lib/data';
 
export default async function Page() {
  const birds = await fetchBirds();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Messages',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form birds={birds} />
    </main>
  );
}

// import Form from '@/app/ui/invoices/create-form';
// import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
// import { fetchCustomers } from '@/app/lib/data';
 
// export default async function Page() {
//   const customers = await fetchCustomers();
 
//   return (
//     <main>
//       <Breadcrumbs
//         breadcrumbs={[
//           { label: 'Invoices', href: '/dashboard/invoices' },
//           {
//             label: 'Create Messages',
//             href: '/dashboard/invoices/create',
//             active: true,
//           },
//         ]}
//       />
//       <Form customers={customers} />
//     </main>
//   );
// }