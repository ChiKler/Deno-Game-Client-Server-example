/**
 *
 * REMEMBER TO USE AWAIT.
 *
**/
export async function sleep(ms) {
  return (
    new Promise((resolve) => setTimeout(resolve, ms))
  );
}