import { Journalist } from '@prisma/client';

export class JournalistEntity implements Journalist {
  id: string;
  name: string;
  last_name: string;
  email: string;
  password: string;
}
