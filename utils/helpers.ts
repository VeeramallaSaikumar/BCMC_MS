import * as XLSX from 'xlsx';

export function excelfetch(path: string, sheetName: string, rowNumber: number, columnNumber: number) {
    const workbook = XLSX.readFile(path);
    const worksheet = workbook.Sheets[sheetName];
    const cellAddress = { c: columnNumber - 1, r: rowNumber - 1 }; // Convert to zero-based index
    const cellRef = XLSX.utils.encode_cell(cellAddress);
    const cell = worksheet[cellRef];
    return cell ? cell.v : null; // Return cell value or null if cell is empty
}
