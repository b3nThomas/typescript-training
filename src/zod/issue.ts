import { z } from 'zod';

const TestSchema = z.object({
    name: z.string()
});

type Test = z.infer<typeof TestSchema>

const BaseGenerateParams = z.object({
    slug: z.string().regex(/^\/[a-z0-9\\/-]*[a-z0-9-]+$/),
});

type Testy = z.infer<typeof BaseGenerateParams>;