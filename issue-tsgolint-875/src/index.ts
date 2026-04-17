import {
  useSession,
  createError,
  type H3Event,
  type EventHandlerRequest,
  type SessionConfig,
} from 'h3';

interface SessionData {
  userId?: string;
}

function getSessionConfig(): SessionConfig {
  return {
    password: '',
    name: '',
    cookie: {
      sameSite: 'strict',
      httpOnly: true,
      secure: true,
    },
  };
}

async function useAppSession(event: H3Event<EventHandlerRequest>) {
  const config = getSessionConfig();

  return useSession<SessionData>(event, config);
}

async function validateSessionUser(event: H3Event<EventHandlerRequest>) {
  const session = await useAppSession(event);
  const { userId } = session.data;

  if (userId === undefined) {
    throw createError({
      status: 401,
    });
  }

  return userId;
}

export { useAppSession, validateSessionUser };
