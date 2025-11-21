import { auth } from "../../../../lib/auth";

import { signUP, signIn } from "../../../../lib/actions/auth-actions";
import { toNextJsHandler } from "better-auth/next-js";

export const { POST, GET } = toNextJsHandler(auth);


