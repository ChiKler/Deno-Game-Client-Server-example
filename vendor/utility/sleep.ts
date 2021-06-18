/**
 *
 * REMEMBER TO USE AWAIT.
 *
**/
export async function sleep(ms : number) {
  return (
    new Promise((resolve) => setTimeout(resolve, ms))
  );
}