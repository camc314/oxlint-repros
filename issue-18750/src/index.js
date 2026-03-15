globalExceptionFilter.catch(exception, localMocks.filters.globalException.host);
// ^----- This is reported as a Promise, but the prototype is
// `public catch(exception: unknown, host: ArgumentsHost): void {`



import { z } from "zod/mini";

const schema = z.catch(z.optional(z.string()), undefined);
//               ^--- `Promise.catch()` requires 1 argument, but received 2.