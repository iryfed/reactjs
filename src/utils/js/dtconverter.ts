export function dtconverter<S extends string>(str: S) {
    const t = new Date(str);
    return <K extends string>(str2: K) => (
      t.getHours() + ':' + t.getMinutes()
    ) 
}