import {Page, Locator, expect} from "@playwright/test"
import { error } from "node:console";

export class WebCommons{
    page: Page;

constructor(page: Page){
    this.page = page;
}

//common method to launch the application and Verify the title
async launchapplication(url: string, title?:string){
    await this.page.goto(url);
    if(title)
    {
        await expect(this.page).toHaveTitle(title);
    }
}
//Generate Web Element from the locator
async element(locator:string): Promise<Locator>{
    return this.page.locator(locator);
}

async getElement(locator: string, locatorType: string, role?: any): Promise<Locator>{
    switch(locatorType.toLowerCase()){
        case "xpath":
            return this.page.locator('xpath=${locator}');
        case "css":
            return this.page.locator('css=${locator}');
        case "placeholder":
            return this.page.getByPlaceholder(locator);
        case "text":
            return this.page.getByText(locator);
        case "role":
            return this.page.getByRole(role, {name: locator});
        case "label":
            return this.page.getByLabel(locator);
        default:
            throw new Error('Unsupported locator type: ${locatorType}');    
    }
}    

//scroll to the target element to check the visibility
async scrollToElement(locator:string){
    const element = await this.element(locator);
    await element.scrollIntoViewIfNeeded();
}
//Click on Target Element
async clickElement(locator: string){
    const element = await this.element(locator);
    await this.scrollToElement(locator);
    await element.click();
}
//Type the test in Target Element 
async entertext(locator: string, text: string){
    const element = await this.element(locator);
    await element.clear();
    await element.fill(text);
}
//Select option from the dropdown
async SelectOption(locator: string, option: string){
    const element = await this.element(locator);
    await this.scrollToElement(locator);
    await element.selectOption(option);
}
//Double click on Target Element
async DoubleClickElement(locator: string){
    const element = await this.element(locator);
    await this.scrollToElement(locator);
    await element.dblclick();
}
//Hover on TYaret Element
async hoverOverElement(locator: string){
    const element = await this.element(locator);
    await this.scrollToElement(locator);
    await element.hover();
}
//Select The CheckBox
async selectCheckbox(locator: string){
    const element = await this.element(locator);
    await this.scrollToElement(locator);
    const isChecked = await element.isChecked();
    if(!isChecked){
        await element.check();
    }
}
//Get Text from the Web Element
async getText(locator: string): Promise<string|null>{
    const element = await this.element(locator);
    await this.scrollToElement(locator);
    return await element.textContent();
}
//Get Attribute values form the Web element
async getAttribute(locator: string, attributename: string): Promise<string|null>{
    const element = await this.element(locator);
    await this.scrollToElement(locator);
    return await element.getAttribute(attributename);
}
//Method the Verify element is Visible
 async isElementVisible(locator: string): Promise<void> {
        const element = await this.element(locator);
        await expect(element).toBeVisible({ timeout: 30000 });
    }
    
 //Method to verify element is disappeared 
    async isElementDisappeared(locator: string): Promise<boolean> {
        const element = await this.element(locator);
        return await element.isHidden();
}
//Method to Upload the file
async uploadFile(locator: string, filepath : string){
    const element = await this.element(locator);
    await this.scrollToElement(locator);
    return await element.setInputFiles(filepath);
}
//Method to Handle Alert
async handleAlert(action: 'accept' | 'dismiss', promptText?: string){
    this.page.once('dialog', async dialog=>{
        if (action === 'accept'){
            await dialog.accept(promptText);
        }
        else{
            await dialog.dismiss();
        }
    });
}
//Method to Take screenshot
async takeSecreenshot (path: string){
    await this.page.screenshot({path: path});
}
//Method to Refresh the page
async refreshpage(){
    await this.page.reload();
}
//Method to set the resolution of the browser windoe
async setResolution(width: number, height: number){
    await this.page.setViewportSize({width, height});
}
//Method to launch New Tab
async launchNewTab(url: string){
    const newPage = await this.page.context().newPage();
    return newPage.goto(url);
}
//Method to locate the elemment inside the Frame
async frameElement(framelocator: string, elementlocator: string): Promise<Locator>{
    const frame = await this.page.frameLocator(framelocator);
    return frame.locator(elementlocator);
}  
//Method tocompare two values
    async compareValues(actualValue: string, expectedValue: string) {
        await expect(actualValue).toBe(expectedValue);
    } 

//Method to Verify expected value contains actual value. 
    async verifyValueContains(actualValue: string, expectedValue: string) {
        await expect(actualValue).toContain(expectedValue);
    }

}

