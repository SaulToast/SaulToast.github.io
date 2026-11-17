import { z } from 'astro/zod';

const publicUrl = z.url().refine(url => url.startsWith('https://'), 'Use a public HTTPS URL.');
const resumeUrl = z.union([
  publicUrl,
  z.string().regex(/^\/(?!\/)[^\s]+\.pdf$/i, 'Use a public PDF path such as /resume.pdf.'),
]);

// Add only approved public destinations. Null values render as labeled,
// non-interactive placeholders, never empty links or pretend buttons.
export const contact = z.object({
  email: z.email().nullable(),
  linkedin: publicUrl.nullable(),
  resume: resumeUrl.nullable(),
  github: publicUrl.nullable(),
}).parse({
  email: 'saul.n.hanson@gmail.com',
  linkedin: 'https://www.linkedin.com/in/saul-hanson-875188440',
  resume: '/resume.pdf',
  github: 'https://github.com/SaulToast',
});
