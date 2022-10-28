type MyResult = Promise<Promise<Promise<Promise<Promise<string>>>>>;

type MyAwaitedResult = Awaited<MyResult>; // string
