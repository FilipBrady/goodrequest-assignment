import { z } from 'zod';

const shelterValidationFields = z.object({
  donationTarget: z.enum(['shelter', 'foundation']),
  shelterId: z.string().optional(),
});

export const donationFormSchema = z
  .object({
    donationTarget: z.enum(['shelter', 'foundation']),
    shelterId: z.string().optional(),
    amount: z.number().gt(0, 'Zadajte sumu vyssiu ako 0.'),

    firstName: z
      .string()
      .trim()
      .optional()
      .refine(
        value => !value || (value.length >= 2 && value.length <= 20),
        'Meno musi mat 2 az 20 znakov.',
      ),

    lastName: z
      .string()
      .trim()
      .min(2, 'Priezvisko musi mat aspon 2 znaky.')
      .max(30, 'Priezvisko moze mat najviac 30 znakov.'),

    email: z.email('Zadajte platny e-mail.'),

    phonePrefix: z.enum(['+421', '+420']),
    phone: z
      .string()
      .trim()
      .min(1, 'Telefonne cislo je povinne.')
      .refine(
        value => /^[0-9 ]+$/.test(value),
        'Telefon moze obsahovat len cisla a medzery.',
      ),

    consent: z
      .boolean()
      .refine(value => value, 'Musite suhlasit so spracovanim osobnych udajov.'),
  })
  .refine(data => data.donationTarget !== 'shelter' || !!data.shelterId, {
    path: ['shelterId'],
    message: 'Vyberte utulok.',
    // Keep shelter validation active even when unrelated fields are invalid.
    when(payload) {
      return shelterValidationFields.safeParse(payload.value).success;
    },
  })
  .superRefine((data, ctx) => {
    const normalizedPhone = data.phone.replace(/\s/g, '');

    if (data.phonePrefix === '+421' && !/^\d{9}$/.test(normalizedPhone)) {
      ctx.addIssue({
        code: 'custom',
        path: ['phone'],
        message: 'Zadajte platne slovenske telefonne cislo.',
      });
    }

    if (data.phonePrefix === '+420' && !/^\d{9}$/.test(normalizedPhone)) {
      ctx.addIssue({
        code: 'custom',
        path: ['phone'],
        message: 'Zadajte platne ceske telefonne cislo.',
      });
    }
  });

export type DonationFormValues = z.infer<typeof donationFormSchema>;
