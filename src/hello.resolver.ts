import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloResolver {
  @Query((returns) => String)
  async hello() {
    return 'hello world!';
  }
}
