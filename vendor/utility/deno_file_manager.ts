const decoder: TextDecoder = new TextDecoder("utf-8");
const encoder: TextEncoder = new TextEncoder();

export async function file_read(path: string): Promise<String> {
  return (new String(decoder.decode(await Deno.readFile(path))));
}

export async function file_write(path: string, data: String): Promise<void> {
  await Deno.writeFile(path, encoder.encode(data.toString()));
}

export async function file_rename(
  path_old: string,
  path_new: string,
): Promise<void> {
  await Deno.rename(path_old, path_new);
}

export async function file_remove(path: string): Promise<void> {
  await Deno.remove(path);
}

export async function log_write(
  path: string,
  date: Date,
  data: string,
): Promise<void> {
  await file_write(
    path,
    new String(`${await file_read(path)}[${date.toISOString()}] ${data}\n`),
  );
}
