import fs from 'fs'; 
import xlsx from 'xlsx';

export class ExcelUtil{

    static readExcel(filepath: string, sheetName: string): any {
      //Verify weather file is exist or not 

      if(!fs.existsSync(filepath)){
       throw new Error(`File not found: ${filepath}`); 
      }
      //Read the workbook form excel file
      const workbook = xlsx.readFile(filepath);

       //Get the specified sheet from the workbook. 
        const sheet = workbook.Sheets[sheetName];

        //Verify whether the sheet exists in the workbook.
        if (!sheet) {
            throw new Error(`Sheet not found: ${sheetName}`);
        }

        return xlsx.utils.sheet_to_json(sheet);
    }
}

let data = ExcelUtil.readExcel("./Files/TestData.xlsx", "Emp");
console.log(data);
//console.log(data[1]["Email"]);