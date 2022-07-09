export function log(...args: any) {
  if (process.env.NEXT_PUBLIC_DEBUG) {
    console.warn(args)
  }
}
