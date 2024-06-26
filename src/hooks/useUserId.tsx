import { auth } from "@clerk/nextjs/server";

const useUserId = () => {
  const { sessionClaims, userId } = auth();
  return (sessionClaims?.userId as string) || (userId as string);
};
export default useUserId;
