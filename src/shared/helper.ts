export class Helper {

    protected filterNonEmpty = <T>(arr: T[]): T[] => arr.filter((value: T): boolean => JSON.stringify(value) !== '[]');

    protected filterNonNull = <T>(arr: T[]): T[] => arr.filter((e: T): boolean => e !== null && e !== undefined);

    protected filterUnique = <T>(data: T[]): T[] => data.filter((v: T, i: number, a: T[]): boolean => a.indexOf(v) === i);

    protected cutomPaginate = <T, Y>(array: T[], page_size: number, page_number: number): T[] => array.slice((page_number - 1) * page_size, page_number * page_size);

    protected shallowCopy = <T>(data: T): T => JSON.parse(JSON.stringify(data));

    protected sort = <T, Y>(items: T[], attribute: Y): T[] => items.sort((a: T, b: T): number => a[`${String(attribute)}`] - b[`${String(attribute)}`]);

}
